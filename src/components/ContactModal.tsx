import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE = 'applHvBnlfub2djo3';
const AIRTABLE_TABLE = 'tblhMN4kCuo7rNHdD';

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [{
            fields: {
              'Founder Name': name,
              'Founder Email': email,
              'US Rationale': `[CONTACT REQUEST] ${notes}`,
              'Status': 'Received',
              'Company Name': '[Contact inquiry]',
            }
          }]
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setName('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0e12]/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#fbf9f4] border border-[#0c0e12] p-6 sm:p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-[#0c0e12] hover:bg-[#eae8e3] transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center space-y-4">
            <div className="inline-flex p-3 bg-[#00d2ff]/15 border border-[#00d2ff]">
              <CheckCircle2 className="w-8 h-8 text-[#00b8f5]" />
            </div>
            <h3 className="text-xl font-bold tracking-tight uppercase text-[#0c0e12]">WE'LL BE IN TOUCH</h3>
            <p className="font-serif text-sm text-[#45474b]">Our team will reach out to schedule a 20-minute introductory call.</p>
            <button onClick={handleReset} className="px-6 py-2.5 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase rounded-none">CLOSE</button>
          </div>
        ) : status === 'error' ? (
          <div className="py-6 text-center space-y-4">
            <h3 className="text-xl font-bold tracking-tight uppercase text-[#0c0e12]">SOMETHING WENT WRONG</h3>
            <p className="font-serif text-sm text-[#45474b]">Please try again or email us directly at <strong>gastondotta@sumeria.uy</strong>.</p>
            <button onClick={() => setStatus('idle')} className="px-6 py-2.5 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase rounded-none">TRY AGAIN</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#00d2ff]" />
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#5e636e]">MANHATTAN ADVISORY TEAM</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight uppercase text-[#0c0e12]">TALK TO THE TEAM</h3>
              <p className="font-serif text-xs sm:text-sm text-[#45474b] mt-1">Schedule a 20-minute introductory call with our directors in Midtown Manhattan.</p>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">YOUR NAME / ROLE</label>
              <input type="text" required placeholder="e.g. Matías Rodríguez, CEO" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">EMAIL</label>
              <input type="email" required placeholder="matias@startup.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">QUESTIONS OR COMMENTS</label>
              <textarea rows={3} placeholder="What would you like to know about the residency, incorporation, or U.S. market entry?" value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#0c0e12]/15">
              <span className="text-[10px] font-semibold text-[#76777b] uppercase">417 5TH AVE · MIDTOWN</span>
              <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none disabled:opacity-50">
                {status === 'sending' ? (
                  <><Loader2 className="w-3.5 h-3.5 animate-spin" /><span>SENDING...</span></>
                ) : (
                  <><span>GET IN TOUCH</span><ArrowRight className="w-3.5 h-3.5" /></>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
