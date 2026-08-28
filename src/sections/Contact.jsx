import { Mail, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please use the direct Email App button.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:gouravdas350@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name || 'Visitor')}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-5 sm:mb-6 border-b border-white/10 pb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-300 border border-orange-500/20 mb-1.5">
          <Sparkles size={13} /> Get In Touch
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          Let's Build <span className="text-gradient">Something Great</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Have an open role, full-stack project, or collaboration in mind? Let's connect.
        </p>
      </div>

      {/* Grid: 3 Channel Cards (5 cols) + Message Form (7 cols) */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* 3 Glowing Channel Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {/* EMAIL */}
          <a
            href="mailto:gouravdas350@gmail.com"
            className="p-4 rounded-2xl bg-[#0c0c1a]/90 border border-pink-500/30 hover:border-pink-400/60 hover:bg-white/[0.04] transition-all flex items-center gap-4 group shadow-lg"
          >
            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[11px] font-mono text-pink-300">Direct Email</p>
              <h4 className="text-sm font-bold text-white group-hover:text-pink-200 transition-colors">
                gouravdas350@gmail.com
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5">Let's discuss an opportunity</p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/gourav-das-7a94a02b1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#0c0c1a]/90 border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-white/[0.04] transition-all flex items-center gap-4 group shadow-lg"
          >
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-mono text-cyan-300">LinkedIn Network</p>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                Connect on LinkedIn
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5">Professional endorsements & bio</p>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/grvd5678"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#0c0c1a]/90 border border-purple-500/30 hover:border-purple-400/60 hover:bg-white/[0.04] transition-all flex items-center gap-4 group shadow-lg"
          >
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-mono text-purple-300">GitHub Repositories</p>
              <h4 className="text-sm font-bold text-white group-hover:text-purple-200 transition-colors">
                github.com/grvd5678
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5">Explore open-source repositories</p>
            </div>
          </a>
        </div>

        {/* Message Form (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-[#090918]/80 border border-white/10 backdrop-blur-xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                placeholder="Your Message..."
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            {status.message && (
              <div
                role="alert"
                className={`p-2.5 rounded-xl text-xs ${
                  status.type === 'success'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="flex gap-2.5 pt-1">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={14} />
              </Button>
              <button
                type="button"
                onClick={handleEmailClick}
                className="flex-1 flex items-center justify-center gap-2 border border-purple-500/40 px-4 py-2.5 rounded-full hover:bg-purple-500/10 text-purple-300 text-xs font-medium transition-all"
              >
                <Mail size={14} /> Email App
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
