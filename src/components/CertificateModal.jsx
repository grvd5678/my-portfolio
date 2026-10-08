import { X, Award, ExternalLink, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0b0b18] rounded-2xl border border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-950/50 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300">
              <Award size={22} />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-white leading-tight">
                {certificate.title}
              </h3>
              <p className="text-xs text-purple-300 font-mono mt-0.5">
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
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          {/* Official Verification Box for AWS or verified certs */}
          {certificate.validationNumber && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-cyan-500/10 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300">
                  <ShieldCheck size={16} /> Official Credential Verification
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Active & Verified
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-400 block text-[11px]">Validation Number:</span>
                  <span className="font-mono text-white font-semibold select-all">
                    {certificate.validationNumber}
                  </span>
                </div>
                {certificate.issueDate && (
                  <div>
                    <span className="text-gray-400 block text-[11px]">Validity:</span>
                    <span className="text-gray-200">
                      {certificate.issueDate} — {certificate.expirationDate || "Present"}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                {certificate.verificationUrl && (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all"
                  >
                    <ExternalLink size={13} /> Verify at AWS Portal
                  </a>
                )}
                {certificate.certificatePdf && (
                  <a
                    href={certificate.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-semibold border border-white/15 transition-all"
                  >
                    <FileText size={13} /> View Certificate (PDF)
                  </a>
                )}
              </div>
            </div>
          )}

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
              Key Competencies Validated
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills?.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 inline-flex items-center gap-1"
                >
                  <CheckCircle2 size={12} className="text-cyan-400" /> {skill}
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
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
