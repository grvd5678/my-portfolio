import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [ref, isVisible] = useScrollAnimation();
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
      setStatus({ type: 'error', message: 'Failed to send message. Please try the email option below.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:gouravdas350@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
  };

  const contactInfo = [
    { icon: <Mail className="text-purple-400" aria-hidden="true" />, label: "Email", value: "gouravdas350@gmail.com" },
    { icon: <Phone className="text-purple-400" aria-hidden="true" />, label: "Phone", value: "+91 8910418563" },
    { icon: <MapPin className="text-purple-400" aria-hidden="true" />, label: "Location", value: "Kolkata, West Bengal" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white/5">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                  {item.icon}
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">Connect on Socials</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/grvd5678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gourav-das-7a94a02b1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/gourav_das17281"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-pink-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input id="name" type="text" placeholder="Your Name" required
                       value={formData.name}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                       className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input id="email" type="email" placeholder="Your Email" required
                       value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})}
                       className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" placeholder="Your Message" rows="5" required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500" />
              </div>

              {status.message && (
                <div role="alert" className={`p-3 rounded-lg text-sm ${
                  status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                }`}>
                  {status.message}
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} aria-hidden="true" />
                </Button>
                <button
                  type="button"
                  onClick={handleEmailClick}
                  aria-label="Open email app"
                  className="flex-1 flex items-center justify-center gap-2 border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-500/10 transition-all">
                  <Mail size={18} aria-hidden="true" /> Email App
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
