import React, { useState } from 'react';
import { Terminal, Code, Cpu, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { SkillCategory } from '../types/portfolio';

export const Skills: React.FC = () => {
  const { skills } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'languages':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'web':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-indigo-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-800/80 bg-[#060913]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>02. Technical Arsenal</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span className="text-slate-400">Foundations</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Current Skills & Technical Stack
              </h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
                An honest reflection of my first-year technical toolkit: core Python syntax, modern web fundamentals,
                and practical exploration into generative artificial intelligence.
              </p>
            </div>

            {/* Interactive Category Filter Tabs (allowed functional button segmented control) */}
            <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
              {[
                { id: 'all', label: 'All Stack' },
                { id: 'languages', label: 'Python Core' },
                { id: 'web', label: 'HTML & CSS' },
                { id: 'ai', label: 'Basic GenAI' },
                { id: 'tools', label: 'Dev Tools' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as SkillCategory)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <div
              key={skill.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Header: Title and Category Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {skill.name}
                      </h3>
                      {/* Zero-Pill: Clean unboxed metadata with typographic separator */}
                      <div className="text-xs text-slate-400 flex items-center gap-1.5">
                        <span className="capitalize">{skill.category}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-blue-400 font-medium">{skill.level}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed my-3">
                  {skill.description}
                </p>

                {/* Key topics learned - clean unboxed list */}
                <div className="mt-4 pt-4 border-t border-slate-800/70">
                  <span className="text-[11px] font-medium text-slate-400 block mb-2">
                    Core Concepts Covered:
                  </span>
                  <div className="space-y-1.5">
                    {skill.keyTopics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-800/60">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
                  <span>Proficiency Growth</span>
                  <span className="text-blue-300">{skill.level}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.levelPercent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Immediate Next Learning Targets strip */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Learning Horizon · Semester 2 & Beyond</span>
            </div>
            <p className="text-sm text-slate-300">
              Actively preparing to transition into NumPy, Pandas, Linear Algebra for Machine Learning, and PyTorch tensors.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">NumPy</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Pandas</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Linear Algebra</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-purple-300">PyTorch</span>
          </div>
        </div>
      </div>
    </section>
  );
};
