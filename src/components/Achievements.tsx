import React, { useState } from 'react';
import { Award, CheckCircle2, Bookmark, Plus, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Achievements: React.FC = () => {
  const { milestones, addCertificatePlaceholder } = usePortfolio();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const honestMilestones = milestones.filter(m => !m.isPlaceholder);
  const placeholderMilestones = milestones.filter(m => m.isPlaceholder);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addCertificatePlaceholder(
      newTitle.trim(),
      newDesc.trim() || 'Reserved slot for official verified credential upon completion.'
    );
    setNewTitle('');
    setNewDesc('');
    setShowAddModal(false);
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden border-t border-slate-800/80 bg-[#060913]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>04. Milestones & Credentials</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span className="text-slate-400">Verifiable Learning</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Honest Milestones & Certificate Roadmap
              </h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
                As a first-year student, I believe in absolute academic integrity. Here are my verified foundational
                milestones, accompanied by clearly labeled placeholders for upcoming certifications.
              </p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="text-xs font-medium text-blue-400 hover:text-white flex items-center gap-2 bg-blue-950/40 border border-blue-900/60 hover:bg-blue-900/60 px-4 py-2 rounded-xl transition-all self-start md:self-auto shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Milestone Slot</span>
            </button>
          </div>
        </div>

        {/* 2-Column Split: Genuine Learning Milestones vs Certificate Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Genuine Academic & Learning Milestones (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Genuine Learning Milestones</h3>
              <span className="text-xs text-slate-500 font-mono">({honestMilestones.length} achieved)</span>
            </div>

            <div className="space-y-4">
              {honestMilestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/90 relative"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="text-emerald-400 font-semibold">{milestone.statusLabel}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="font-mono text-slate-400">{milestone.date}</span>
                      </div>
                      <h4 className="text-base font-bold text-white pt-1">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {milestone.description}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-emerald-950/50 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Upcoming Certificate Placeholders (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <Bookmark className="w-4 h-4 text-purple-400" />
              <h3 className="text-base font-bold text-white">Future Certificate Placeholders</h3>
              <span className="text-xs text-purple-400/80 font-mono">(Reserved Slots)</span>
            </div>

            <div className="space-y-4">
              {placeholderMilestones.map((slot) => (
                <div
                  key={slot.id}
                  className="rounded-2xl p-5 border border-dashed border-purple-800/60 bg-purple-950/10 hover:bg-purple-950/20 transition-all relative"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-purple-400 flex items-center gap-2">
                        <span className="font-semibold uppercase text-[10px] bg-purple-900/50 border border-purple-700/50 px-2 py-0.5 rounded">
                          {slot.statusLabel}
                        </span>
                        <span aria-hidden="true" className="text-purple-600">·</span>
                        <span className="font-mono text-slate-400">{slot.date}</span>
                      </div>
                      <h4 className="text-base font-bold text-white font-mono pt-1">
                        {slot.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {slot.description}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-purple-900/30 border border-purple-700/40 flex items-center justify-center text-purple-300 shrink-0 mt-1">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Integrity Pledge Box */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <strong className="text-white block mb-1">Honest Portfolio Standard:</strong>
              No fabricated certifications, no invented hackathon trophies, and no fake company affiliations.
              Every item represents genuine first-year computer science learning progress.
            </div>
          </div>
        </div>
      </div>

      {/* Add Custom Milestone Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md glass-panel bg-[#0b1022] rounded-2xl border border-slate-700 p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Add Certificate or Milestone Slot</h3>
            <p className="text-xs text-slate-400 mb-4">
              Add an upcoming certification or learning milestone you are currently working towards.
            </p>

            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Title or Placeholder Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. [Upcoming: Coursera Deep Learning Specialization]"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Description & Objective
                </label>
                <textarea
                  placeholder="Briefly describe what course or exam this credential covers..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500"
                >
                  Add Milestone Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
