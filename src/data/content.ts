import { CohortPillar, RoadmapPhase, EcosystemPartner, TeamMember, TeamMandate } from '../types';

export const IMAGES = {
  // Plate I: Founder Workspace, Midtown Manhattan view with coffee & table
  plate1: 'https://i.imgur.com/QgSpXww.jpg',
  // Plate II: Commercial Strategy Session, Manhattan conference room (NeueHouse style)
  plate2: 'https://i.imgur.com/lrxjn0N.jpg',
  // Archival Plate II: Boardroom meeting table & skyline windows
  archivalPlate2: 'https://i.imgur.com/dRsBOGx.jpg',
  // CTA Banner: Midtown Manhattan 5th Ave street at dusk/night
  ctaBg: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1920&q=80',
};

export const PILLARS: CohortPillar[] = [
  {
    number: '01',
    category: 'MEET',
    title: 'CLOSED ROOMS',
    description: 'Curated one-on-one evaluations with enterprise buyers, venture partners, and operators who evaluate your commercial readiness.'
  },
  {
    number: '02',
    category: 'WORK',
    title: 'DAILY BASE',
    description: 'Operating directly out of Midtown Manhattan with enterprise meeting rooms, institutional legal advisors, and zero logistical friction.'
  },
  {
    number: '03',
    category: 'CONNECT',
    title: 'LATINO SYNDICATE',
    description: 'Direct access to Colectivo and the top tier of Latino tech operators, founders, and executives leading global firms in New York.'
  },
  {
    number: '04',
    category: 'BUILD',
    title: 'U.S. PIPELINE',
    description: 'Structuring commercial pilots, finalizing Delaware C-Corp documentation, and establishing concrete reasons to return every quarter.'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'RESIDENCY',
    duration: 'DAYS 1-14',
    title: 'NYC IMMERSION',
    description: 'Operating daily out of 417 5th Ave, Delaware incorporation, corporate banking, and direct enterprise meetings across Manhattan.',
    isHighlight: true
  },
  {
    phase: 'PHASE I',
    duration: '30 DAYS',
    title: 'ENTITY & FOLLOW-UP',
    description: 'Delaware entity finalization, U.S. banking activation, and executing on every introduction made during the Manhattan residency.'
  },
  {
    phase: 'PHASE II',
    duration: '90 DAYS',
    title: 'PILOT VALIDATION',
    description: 'Structured partner check-ins, testing preliminary enterprise pilot parameters, and refining localized U.S. collateral.'
  },
  {
    phase: 'PHASE III',
    duration: '6 MONTHS',
    title: 'PERMANENT INROADS',
    description: 'Active investor syndication discussions, formalized client retainers, and subsequent executive deployment back to New York.'
  }
];

export const ECOSYSTEM_PARTNERS: EcosystemPartner[] = [
  {
    name: 'TRANSATLANTIC INNOVATION HUB (TIH)',
    role: 'MIDTOWN ANCHOR',
    description: 'Physical headquarters at 417 5th Avenue in Midtown Manhattan, offering dedicated residency workspace, private boardrooms, and institutional convening facilities.'
  },
  {
    name: 'ENTREPRENEURS ROUNDTABLE ACCELERATOR (ERA)',
    role: 'VENTURE PLATFORM',
    description: "New York City's premier institutional accelerator platform, connecting participating founders directly into a top-tier mentor network of 500+ venture-backed alumni and partners."
  },
  {
    name: 'COLECTIVO',
    role: 'EXECUTIVE SYNDICATE',
    description: 'The premier professional network of Latino tech operators, founders, and executives in the United States, providing strategic mentorship, customer introductions, and leadership guidance.'
  },
  {
    name: 'EMBASSY & CONSULATE GENERAL OF URUGUAY IN NEW YORK',
    role: 'SOVEREIGN ALLIANCE',
    description: 'Bilateral trade cooperation, diplomatic connectivity, and sovereign backing ensuring institutional longevity and government-level market access across the Southern Cone.'
  }
];

export const TEAM = [
  {
    number: "01",
    name: "Gastón Dotta",
    role: "Co-Founder / Uruguay", // O el rol que corresponda
    location: "Montevideo · New York",
    image: "https://imgur.com/y1WHwAj.png", // Link directo a su foto
    linkedin: "https://www.linkedin.com/in/gastondotta/",
  },
  {
    number: "02",
    name: "Nombre del Miembro 2",
    role: "Co-Founder / Argentina",
    location: "Buenos Aires · New York",
    image: "https://imgur.com/zOnq83z.png", // Link directo a su foto
    linkedin: "https://www.linkedin.com/in/tomas-esposito/",
  },
];

export const TEAM_MANDATES: TeamMandate[] = [
  {
    number: '01',
    title: 'SELECTION',
    description: 'Every application is read. Eight companies are admitted. The rest are declined with the same discipline.'
  },
  {
    number: '02',
    title: 'RESIDENCY',
    description: 'Daily base at 417 5th Avenue. Introductions are not a mailing list. They are meetings that happen because someone is in Manhattan.'
  },
  {
    number: '03',
    title: 'CONTINUITY',
    description: 'The work does not end at JFK. Entity, banking, pilots, and the reason to return every quarter are owned after the flight home.'
  }
];
