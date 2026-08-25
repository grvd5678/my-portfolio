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
                <div key={item.label} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  {item.icon}
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
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
