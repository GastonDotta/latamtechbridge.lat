import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ApplicationFormData } from '../types';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    companyName: '',
    founderName: '',
    founderEmail: '',
    country: 'Uruguay',
    website: '',
    arrStage: '$250k - $1M ARR',
    usRationale: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0e12]/80 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#fbf9f4] border border-[#0c0e12] p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#0c0e12] hover:bg-[#eae8e3] transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="inline-flex p-3 bg-[#00d2ff]/15 border border-[#00d2ff]">
              <CheckCircle2 className="w-8 h-8 text-[#00b8f5]" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#00677f]">
                DOSSIER RECIBIDO · EVALUACIÓN CONFIDENCIAL
              </span>
              <h3 className="text-2xl font-bold tracking-tight uppercase text-[#0c0e12]">
                APLICACIÓN REGISTRADA
              </h3>
              <p className="font-serif text-[#45474b] max-w-md mx-auto leading-relaxed">
                Hemos recibido los antecedentes de <strong>{formData.companyName}</strong>. El comité de admisión en Manhattan revisará la documentación y se comunicará a {formData.founderEmail}.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none"
            >
              ENTENDIDO
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#00d2ff]" />
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#5e636e]">
                  COHORT ADMISSIONS · NEW YORK RESIDENCY
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight uppercase text-[#0c0e12]">
                APPLY FOR NEXT COHORT
              </h3>
              <p className="font-serif text-sm text-[#45474b] mt-1">
                Cupo estricto de 8 startups de alto crecimiento del Cono Sur con tracción comprobada.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                  COMPANY NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Cloud Inc"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                  PRODUCT URL / WEBSITE *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://company.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                  FOUNDER NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.founderName}
                  onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                  FOUNDER EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="founder@company.com"
                  value={formData.founderEmail}
                  onChange={(e) => setFormData({ ...formData, founderEmail: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                  HOME MARKET / HEADQUARTERS
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
                >
                  <option value="Uruguay">Uruguay</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Chile">Chile</option>
                  <option value="Other Southern Cone">Other Southern Cone Region</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                  CURRENT TRACTION / REVENUE (ARR)
                </label>
                <select
                  value={formData.arrStage}
                  onChange={(e) => setFormData({ ...formData, arrStage: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
                >
                  <option value="$100k - $250k ARR">$100k - $250k ARR</option>
                  <option value="$250k - $1M ARR">$250k - $1M ARR</option>
                  <option value="$1M - $3M ARR">$1M - $3M ARR</option>
                  <option value="$3M+ ARR">$3M+ ARR</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                U.S. EXPANSION RATIONALE & ENTERPRISE TARGET *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe your current traction in South America and what enterprise deals or pilots you plan to close in the U.S."
                value={formData.usRationale}
                onChange={(e) => setFormData({ ...formData, usRationale: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#0c0e12]/15">
              <span className="text-[10px] text-[#76777b] uppercase font-semibold">
                1% ENDOWMENT STAKE · NO PROGRAM FEES
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none cursor-pointer"
              >
                <span>SUBMIT APPLICATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
