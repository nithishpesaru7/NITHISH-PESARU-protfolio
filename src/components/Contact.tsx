import React, { useState } from 'react';
import { Github, Mail, Linkedin, Copy, Check, Send, ArrowUpRight, Edit3 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact: React.FC = () => {
  const { profile, openEditModal } = usePortfolio();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    // Simulate sending and trigger mailto fallback option
    setFormSubmitted(true);
    setTimeout(() => {
      // Clear after submission
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
    }, 4000);
  };

  const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
    formSubject || `Portfolio Inquiry from ${formName || 'a visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background glow accents */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>05. Communication</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span className="text-slate-400">Connect</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Get in Touch & Connect
              </h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
                Interested in discussing computer science foundations, open-source Python projects, AI study roadmaps,
                or student opportunities? Feel free to reach out.
              </p>
            </div>

            <button
              onClick={openEditModal}
              className="text-xs font-medium text-blue-400 hover:text-white flex items-center gap-2 bg-blue-950/40 border border-blue-900/60 hover:bg-blue-900/60 px-4 py-2 rounded-xl transition-all self-start md:self-auto shrink-0"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Contact Placeholders</span>
            </button>
          </div>
        </div>

        {/* 2-Column Grid: Contact Channels vs Functional Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Handles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* GitHub Card (Primary Verifiable Profile) */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
                    <Github className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">GitHub Profile</h3>
                    <p className="text-xs text-slate-400 font-mono">@nithishpesaru7</p>
                  </div>
                </div>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 transition-colors"
                  title="Open GitHub Profile"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Explore my repositories, code commits, Python project branches, and foundational learning experiments.
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-blue-400 hover:underline truncate max-w-[220px]"
                >
                  {profile.githubUrl}
                </a>
                <button
                  onClick={() => handleCopy(profile.githubUrl, 'github')}
                  className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px]"
                >
                  {copiedItem === 'github' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedItem === 'github' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Email Card (with customizable placeholder / real email) */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Email Address</h3>
                    <p className="text-xs text-slate-400">Direct Inquiries & Collaboration</p>
                  </div>
                </div>

                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-lg bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 transition-colors"
                  title="Send Direct Email"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Available for academic inquiries, first-year developer discussions, or project feedback.
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                <span className="font-mono text-indigo-300 truncate max-w-[220px]">
                  {profile.email}
                </span>
                <button
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px]"
                >
                  {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedItem === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn Card (Placeholder with edit option) */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
                    <Linkedin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">LinkedIn Profile</h3>
                    <p className="text-xs text-purple-400/80 font-mono">(Customizable Placeholder)</p>
                  </div>
                </div>

                <button
                  onClick={openEditModal}
                  className="p-2 rounded-lg bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border border-purple-500/20 transition-colors"
                  title="Configure LinkedIn URL"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Professional networking channel for computer science undergraduates and prospective engineering connections.
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                <span className="font-mono text-purple-300 truncate max-w-[220px]">
                  {profile.linkedinUrl}
                </span>
                <button
                  onClick={openEditModal}
                  className="text-blue-400 hover:underline text-[11px]"
                >
                  Configure
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out this form to send a message directly to Nithish via email client or test the messaging workflow.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-900/60 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you! You can send this inquiry directly to Nithish using your favorite email program:
                </p>
                <div className="pt-2">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-md transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App ({profile.email})</span>
                  </a>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline block mx-auto pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Subject or Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Student Project Collaboration / Python Code Discussion"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Message Content
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your note, feedback on the calculators, or greeting here..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500">
                    Target destination: <span className="font-mono text-slate-400">{profile.email}</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 self-start sm:self-auto"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
