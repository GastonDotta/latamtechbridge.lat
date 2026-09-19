import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/standaloneHtmlGenerator';

interface HtmlExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlExportModal: React.FC<HtmlExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlCode = generateStandaloneHtml();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = htmlCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'southern-cone-tech-bridge-nyc.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleOpenNewTab = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0c0e12]/85 backdrop-blur-xs">
      <div className="relative w-full max-w-5xl bg-[#fbf9f4] border border-[#0c0e12] p-6 sm:p-8 shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-[#0c0e12]/15">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#00d2ff]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00677f]">
                STANDALONE PRODUCTION ASSET
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase text-[#0c0e12]">
              CÓDIGO HTML AUTÓNOMO LISTO PARA LLEVAR A LA REALIDAD
            </h3>
            <p className="font-serif text-xs sm:text-sm text-[#45474b]">
              HTML 100% puro y autónomo con enlaces directos a imágenes, Google Fonts y estilos Tailwind integrados. No requiere servidor ni Node.js: ábrelo directamente en tu navegador o cópialo a tu hosting.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#0c0e12] hover:bg-[#eae8e3] transition-colors ml-4"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#0c0e12]/10 bg-[#f4f2ec] px-4 -mx-6 sm:-mx-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0c0e12] uppercase">
            <Code className="w-4 h-4 text-[#00b8f5]" />
            <span>index.html ({Math.round(htmlCode.length / 1024)} KB)</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleOpenNewTab}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-[#0c0e12]/30 hover:border-[#0c0e12] bg-white text-[#0c0e12] transition-colors rounded-none"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Ver en pestaña</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-[#0c0e12] bg-white hover:bg-[#eae8e3] text-[#0c0e12] transition-colors rounded-none"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .html</span>
            </button>

            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-none ${
                copied
                  ? 'bg-[#00d2ff] text-[#0c0e12]'
                  : 'bg-[#0c0e12] text-white hover:bg-[#00d2ff] hover:text-[#0c0e12]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>¡COPIADO AL PORTAPAPELES!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPIAR CÓDIGO HTML</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Preview Container */}
        <div className="flex-1 overflow-hidden mt-4 border border-[#0c0e12]/20 bg-[#0c0e12] text-[#fbf9f4] relative">
          <div className="absolute top-2 right-3 z-10 text-[10px] font-mono tracking-widest text-[#76777b] uppercase">
            UTF-8 · STANDALONE HTML5
          </div>
          <pre className="h-full overflow-auto p-4 sm:p-5 text-xs font-mono leading-relaxed text-[#c6c6cb] selection:bg-[#00d2ff] selection:text-[#0c0e12]">
            <code>{htmlCode}</code>
          </pre>
        </div>

        {/* Footer Note */}
        <div className="pt-4 flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#76777b] uppercase">
          <span>ENLACES DIRECTOS A IMÁGENES ACTIVOS Y VERIFICADOS</span>
          <button
            onClick={onClose}
            className="text-[#0c0e12] hover:underline"
          >
            VOLVER AL SITIO
          </button>
        </div>

      </div>
    </div>
  );
};
