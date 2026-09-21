const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN as string | undefined;
const AIRTABLE_BASE = 'applHvBnlfub2djo3';
const AIRTABLE_TABLE = 'tblhMN4kCuo7rNHdD';

function compactFields(fields: Record<string, unknown>): Record<string, unknown> {
  const next: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (!trimmed) continue;
      next[key] = trimmed;
      continue;
    }
    if (typeof value === 'number' && Number.isNaN(value)) continue;
    next[key] = value;
  }

  return next;
}

/** Airtable date fields reject "2023"; the form placeholder is a year. */
export function toAirtableDate(value: string): string | undefined {
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  if (/^\d{4}$/.test(trimmed)) return `${trimmed}-01-01`;
  return undefined;
}

export async function submitAirtableRecord(fields: Record<string, unknown>): Promise<void> {
  if (!AIRTABLE_TOKEN) {
    throw new Error('Missing Airtable token');
  }

  const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [{ fields: compactFields(fields) }],
      typecast: true,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error('Airtable submit failed', res.status, detail);
    throw new Error('Failed to submit');
  }
}
