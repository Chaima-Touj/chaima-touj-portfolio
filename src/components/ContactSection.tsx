import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { validateContactForm, ContactFormData } from '../utils/validation';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setIsSubmitting(false);
    setIsSubmitted(true);
    confetti({
      particleCount: 45,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#c084fc', '#e879f9', '#60a5fa'],
    });
  };

  return (
    <section id="contact" className="relative py-20 scroll-mt-20">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full glass-card border border-purple-200 dark:border-purple-500/30 text-xs font-semibold text-purple-700 dark:text-purple-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-display mb-3">
            Let's Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
              Together
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/80">
            Have a project in mind, seeking a passionate MERN Stack developer, or simply want to connect? Send a message and let's craft something remarkable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Channels & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with quick copy */}
            <div className="rounded-3xl glass-card p-6 border border-purple-200 dark:border-purple-500/20 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-600/20 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-purple-700 dark:text-purple-300/70 uppercase tracking-wider font-mono font-medium">
                    Direct Email
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono break-all">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl glass-pill bg-purple-100/70 dark:bg-transparent border border-purple-300 dark:border-purple-500/30 hover:border-purple-400 text-xs text-purple-800 dark:text-purple-200 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl glass-card p-5 border border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/50 flex items-center justify-between group transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-purple-700 dark:text-purple-300/70 font-mono">Professional Network</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                    LinkedIn Profile
                  </div>
                </div>
              </div>
              <span className="text-xs text-purple-700 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                Connect →
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl glass-card p-5 border border-purple-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/50 flex items-center justify-between group transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700/30 border border-slate-300 dark:border-slate-500/30 flex items-center justify-center text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-purple-700 dark:text-purple-300/70 font-mono">Source Code Repositories</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                    GitHub Profile
                  </div>
                </div>
              </div>
              <span className="text-xs text-purple-700 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                Explore →
              </span>
            </a>

            {/* Response Time Notice */}
            <div className="p-4 rounded-2xl glass-card border border-purple-200 dark:border-purple-500/15 text-xs text-slate-600 dark:text-slate-300/80 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>Based in Tunis (GMT+1) · Open to opportunities.</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-6 sm:p-8 border border-purple-200 dark:border-purple-500/25 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your email app should open with your message ready to send. Please press Send in your email app. You can also reach me at <span className="text-purple-700 dark:text-purple-300 font-mono font-semibold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-purple-900 dark:text-purple-200 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Connor"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-white/90 dark:bg-[#130728]/70 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-400 bg-red-50 dark:bg-red-950/20'
                            : 'border-purple-200 dark:border-purple-500/25 focus:border-purple-600 dark:focus:border-purple-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-purple-900 dark:text-purple-200 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-white/90 dark:bg-[#130728]/70 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 bg-red-50 dark:bg-red-950/20'
                            : 'border-purple-200 dark:border-purple-500/25 focus:border-purple-600 dark:focus:border-purple-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-purple-900 dark:text-purple-200 mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. MERN Stack Project Collaboration / Opportunity"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-white/90 dark:bg-[#130728]/70 focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-red-400 bg-red-50 dark:bg-red-950/20'
                          : 'border-purple-200 dark:border-purple-500/25 focus:border-purple-600 dark:focus:border-purple-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="contact-message" className="text-xs font-semibold text-purple-900 dark:text-purple-200">
                        Your Message *
                      </label>
                      <span className="text-[10px] text-purple-700 dark:text-purple-300/60 font-mono">
                        {formData.message.length}/2000
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project goals, technical requirements, or schedule details..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-white/90 dark:bg-[#130728]/70 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-red-400 bg-red-50 dark:bg-red-950/20'
                          : 'border-purple-200 dark:border-purple-500/25 focus:border-purple-600 dark:focus:border-purple-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 dark:text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-500 hover:to-fuchsia-500 shadow-lg shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Opening Email App...</span>
                      </>
                    ) : (
                      <>
                        <span>Send by Email</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
