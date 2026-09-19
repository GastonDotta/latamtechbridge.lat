import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c0e12]/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#fbf9f4] border border-[#0c0e12] p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#0c0e12] hover:bg-[#eae8e3] transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSent ? (
          <div className="py-6 text-center space-y-4">
            <div className="inline-flex p-3 bg-[#00d2ff]/15 border border-[#00d2ff]">
              <CheckCircle2 className="w-8 h-8 text-[#00b8f5]" />
            </div>
            <h3 className="text-xl font-bold tracking-tight uppercase text-[#0c0e12]">
              SOLICITUD ENVIADA
            </h3>
            <p className="font-serif text-sm text-[#45474b]">
              El equipo de directores de Southern Cone Tech Bridge NYC se pondrá en contacto a la brevedad para coordinar una llamada informativa.
            </p>
            <button
              onClick={() => {
                setIsSent(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase rounded-none"
            >
              CERRAR
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#00d2ff]" />
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#5e636e]">
                  MANHATTAN ADVISORY TEAM
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight uppercase text-[#0c0e12]">
                TALK TO THE TEAM
              </h3>
              <p className="font-serif text-xs sm:text-sm text-[#45474b] mt-1">
                Coordina una sesión preliminar de 20 minutos con nuestros directores en Midtown Manhattan.
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                TU NOMBRE / ROL
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Matías Rodríguez, CEO"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                EMAIL CORPORATIVO
              </label>
              <input
                type="email"
                required
                placeholder="matias@startup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0c0e12] block">
                PREGUNTAS O COMENTARIOS
              </label>
              <textarea
                rows={3}
                placeholder="¿Qué dudas tienes sobre la residencia, incorporación o clientes en EE.UU.?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#0c0e12]/25 text-sm focus:border-[#00d2ff] focus:outline-none rounded-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#0c0e12]/15">
              <span className="text-[10px] font-semibold text-[#76777b] uppercase">
                417 5TH AVE · MIDTOWN
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0c0e12] text-white text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#00d2ff] hover:text-[#0c0e12] transition-colors rounded-none"
              >
                <span>AGENDAR CONTACTO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
