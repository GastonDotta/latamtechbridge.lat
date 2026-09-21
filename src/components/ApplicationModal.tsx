import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { submitAirtableRecord, toAirtableDate } from '../lib/airtable';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_FORM = {
  companyName: '',
  oneliner: '',
  founderName: '',
  founderEmail: '',
  foundersLinkedin: '',
  founderBio: '',
  hasCofounders: 'No',
  cofounderName: '',
  cofounderLinkedin: '',
  cofounderEmail: '',
  cofoundersBio: '',
  companyLinkedin: '',
  website: '',
  country: 'Uruguay',
  companyCreation: '',
  mrr: '',
  tractionStage: 'Pre-revenue with users',
  companyUSA: 'No',
  linkToDeck: '',
  why: '',
};

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await submitAirtableRecord({
        'Company Name': formData.companyName,
        'Oneliner': formData.oneliner,
        'Founder Name': formData.founderName,
        'Founder E-mail': formData.founderEmail,
        'Founders Linkedin': formData.foundersLinkedin,
        'Founder Bio': formData.founderBio,
        'Co-founders': formData.hasCofounders,
        ...(formData.hasCofounders === 'Yes'
          ? {
              'Co-founder Name': formData.cofounderName,
              'Co-founder Linkedin': formData.cofounderLinkedin,
              'Co-founder Email': formData.cofounderEmail,
              'Co-founders Bio': formData.cofoundersBio,
            }
          : {}),
        'Company Linkedin': formData.companyLinkedin,
        'Website': formData.website,
        'Country': formData.country,
        'Company Creation Date': toAirtableDate(formData.companyCreation),
        'Traction Stage': formData.tractionStage,
        'Company USA': formData.companyUSA,
        'Link to deck': formData.linkToDeck,
        'Why': formData.why,
        'Status': 'Received',
        ...(formData.mrr ? { MRR: Number(formData.mrr) } : {}),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData(INITIAL_FORM);
    onClose();
  };

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0e12]/80 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#fbf9f4] border border-[#0c0e12] p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">

        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-[#0c0e12] hover:bg-[#eae8e3] transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="py-8 text-center space-y-6">
            <div className="inline-flex p-3 bg-[#00d2ff]/15 border border-[#00d2ff]">
              <CheckCircle2 className="w-8 h-8 text-[#00b8f5]" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#00677f]">APPLICATION RECEIVED</span>
              <h3 className="text-2xl font-bold tracking-tight uppercase text-[#0c0e12]">
                THANK YOU, {formData.founderName.split(' ')[0].toUpperCase()}
              </h3>
              <p className="font-serif text-[#45474b] max-w-md mx-auto leading-relaxed">
                We've received <strong>{formData.companyName}</strong>'s application. Our admissions team will review it and reach out to {formData.founderEmail} within the next few days.
              </p>
            </div>
            <button onClick={handleReset} className="px-6 py-3 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none">CLOSE</button>
          </div>
        ) : status === 'error' ? (
          <div className="py-8 text-center space-y-6">
            <h3 className="text-2xl font-bold tracking-tight uppercase text-[#0c0e12]">SOMETHING WENT WRONG</h3>
            <p className="font-serif text-[#45474b] max-w-md mx-auto leading-relaxed">Please try again or send your application directly to <strong>gastondotta@sumeria.uy</strong>.</p>
            <button onClick={() => setStatus('idle')} className="px-6 py-3 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none">TRY AGAIN</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#00d2ff]" />
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#5e636e]">COHORT ADMISSIONS · NEW YORK RESIDENCY</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight uppercase text-[#0c0e12]">APPLY FOR NEXT COHORT</h3>
              <p className="font-serif text-sm text-[#45474b] mt-1">Strict cap of 8 high-growth Southern Cone startups with proven traction.</p>
            </div>

            {/* Company info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">COMPANY NAME *</label>
                <input type="text" required placeholder="e.g. Acme Cloud Inc" value={formData.companyName} onChange={(e) => update('companyName', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">WEBSITE *</label>
                <input type="url" required placeholder="https://company.com" value={formData.website} onChange={(e) => update('website', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">ONELINER *</label>
              <input type="text" required placeholder="What does your company do in one sentence?" value={formData.oneliner} onChange={(e) => update('oneliner', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
            </div>

            {/* Founder info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">FOUNDER NAME *</label>
                <input type="text" required placeholder="Full Name" value={formData.founderName} onChange={(e) => update('founderName', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">FOUNDER EMAIL *</label>
                <input type="email" required placeholder="founder@company.com" value={formData.founderEmail} onChange={(e) => update('founderEmail', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">FOUNDER'S LINKEDIN</label>
                <input type="url" placeholder="https://linkedin.com/in/yourprofile" value={formData.foundersLinkedin} onChange={(e) => update('foundersLinkedin', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">COMPANY LINKEDIN</label>
                <input type="url" placeholder="https://linkedin.com/company/yourcompany" value={formData.companyLinkedin} onChange={(e) => update('companyLinkedin', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">FOUNDER BIO *</label>
              <textarea required rows={3} placeholder="Background, previous companies, and why you are the person to build this." value={formData.founderBio} onChange={(e) => update('founderBio', e.target.value)} className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">CO-FOUNDERS? *</label>
              <select required value={formData.hasCofounders} onChange={(e) => update('hasCofounders', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {formData.hasCofounders === 'Yes' && (
              <div className="space-y-4 border border-[#0c0e12]/15 bg-white p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">CO-FOUNDER NAME *</label>
                    <input type="text" required placeholder="Full Name" value={formData.cofounderName} onChange={(e) => update('cofounderName', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">CO-FOUNDER EMAIL *</label>
                    <input type="email" required placeholder="cofounder@company.com" value={formData.cofounderEmail} onChange={(e) => update('cofounderEmail', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">CO-FOUNDER LINKEDIN</label>
                  <input type="url" placeholder="https://linkedin.com/in/cofounder" value={formData.cofounderLinkedin} onChange={(e) => update('cofounderLinkedin', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">CO-FOUNDERS BIO *</label>
                  <textarea required rows={3} placeholder="Who they are and what they own in the company." value={formData.cofoundersBio} onChange={(e) => update('cofoundersBio', e.target.value)} className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
                </div>
              </div>
            )}

            {/* Company details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">COUNTRY *</label>
                <select required value={formData.country} onChange={(e) => update('country', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none">
                  <option value="Uruguay">Uruguay</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Chile">Chile</option>
                  <option value="Other">Other LatAm country</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">FOUNDED</label>
                <input type="text" placeholder="e.g. 2023" value={formData.companyCreation} onChange={(e) => update('companyCreation', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">U.S. ENTITY?</label>
                <select value={formData.companyUSA} onChange={(e) => update('companyUSA', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="In process">In process</option>
                </select>
              </div>
            </div>

            {/* Traction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">MONTHLY RECURRING REVENUE (USD)</label>
                <input type="number" placeholder="e.g. 5000" value={formData.mrr} onChange={(e) => update('mrr', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">TRACTION STAGE</label>
                <select value={formData.tractionStage} onChange={(e) => update('tractionStage', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none">
                  <option value="Pre-revenue with users">Pre-revenue with users</option>
                  <option value="$0 - $5k MRR">$0 - $5k MRR</option>
                  <option value="$5k - $25k MRR">$5k - $25k MRR</option>
                  <option value="$25k - $100k MRR">$25k - $100k MRR</option>
                  <option value="$100k+ MRR">$100k+ MRR</option>
                </select>
              </div>
            </div>

            {/* Deck */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">LINK TO DECK</label>
              <input type="url" placeholder="Google Drive, Docsend, or any public link" value={formData.linkToDeck} onChange={(e) => update('linkToDeck', e.target.value)} className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
            </div>

            {/* Why */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">WHY ARE YOU READY FOR THE U.S. MARKET? *</label>
              <textarea required rows={3} placeholder="Tell us about your traction, your team, and what you want to achieve in New York." value={formData.why} onChange={(e) => update('why', e.target.value)} className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none" />
            </div>

            {/* Submit */}
            <div className="pt-2 flex items-center justify-between border-t border-[#0c0e12]/15">
              <span className="text-[10px] text-[#76777b] uppercase font-semibold">1% EQUITY STAKE · NO PROGRAM FEES</span>
              <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? (
                  <><Loader2 className="w-3.5 h-3.5 animate-spin" /><span>SENDING...</span></>
                ) : (
                  <><span>SUBMIT APPLICATION</span><ArrowRight className="w-3.5 h-3.5" /></>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
