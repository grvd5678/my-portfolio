import { X, Award, ExternalLink } from "lucide-react";

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0b0b18] rounded-2xl border border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
              <Award size={20} />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white leading-tight">
                {certificate.title}
              </h3>
              <p className="text-xs text-purple-300 font-mono">
                {certificate.organization} • {certificate.duration || "Certified"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            aria-label="Close certificate preview"
          >
            <X size={20} />
          </button>
        </div>

        {/* Certificate Body & Info */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <h4 className="text-xs font-semibold uppercase text-cyan-300 tracking-wider mb-2 font-mono">
              Credential Verification & Scope
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {certificate.desc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase text-purple-300 tracking-wider mb-2 font-mono">
              Key Skills Validated
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills?.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs text-gray-400">
            <span className="font-mono">Badge: {certificate.badge || "Verified"}</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-md"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;

