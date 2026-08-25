import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[90vh] bg-[#0a0a0f] rounded-lg border border-purple-500/30 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-xl font-bold">Resume Preview</h3>
          <div className="flex gap-2">
            <a
              href="/Gourav_Das_Resume_FullStack.pdf"
              download="Gourav_Das_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
            >
              <Download size={18} /> Download
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="w-full h-[calc(100%-4rem)] overflow-auto">
          <iframe
            src="/Gourav_Das_Resume_FullStack.pdf"
            className="w-full h-full"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
