import React from 'react';
import { ArrowRight, Github, Code2, Sparkles, GraduationCap, ChevronDown, Edit3 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero: React.FC = () => {
  const { profile, openEditModal } = usePortfolio();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-screen desktop grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Academic Status Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400/90 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>{profile.academicStatus}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Class of 2028</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12]">
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
              <br />
              <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-bold">
                Aspiring AI Engineer
              </span>
            </h1>

            {/* Introduction prose */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed">
              First-year Computer Science undergraduate passionate about the convergence of mathematics,
              Python programming, and artificial intelligence. Dedicated to building foundational systems,
              mastering computational logic, and transitioning from core programming to production-grade AI.
            </p>

            {/* Academic institution pill-free metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>B.Tech in Computer Science & Engineering</span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-blue-300/90 font-mono">{profile.collegeName}</span>
              <button
                onClick={openEditModal}
                className="text-[11px] text-blue-400 hover:text-blue-300 underline underline-offset-2 ml-1"
                title="Change institution placeholder"
              >
                (edit)
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl glass-panel text-slate-200 hover:text-white font-medium text-sm hover:border-slate-600 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <Github className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" />
                <span>GitHub Profile</span>
              </a>

              <button
                onClick={openEditModal}
                className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 font-medium text-xs hover:border-slate-700 transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <Edit3 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Customize Details</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Developer Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-30 blur-xl transition-all" />

              {/* Glass Frame */}
              <div className="relative glass-panel rounded-2xl overflow-hidden border border-slate-700/60 p-3 sm:p-4 bg-[#0a0f20]/90">
                <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-xl overflow-hidden bg-[#070b18] border border-slate-800 flex flex-col justify-between p-6">
                  {profile.photoUrl ? (
                    <>
                      <img
                        src={profile.photoUrl}
                        alt="Nithish Pesaru - Aspiring AI Engineer & Computer Science Student"
                        className="absolute inset-0 w-full h-full object-cover object-[center_20%] transition-transform duration-500 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060913] via-[#060913]/60 to-transparent p-4 flex flex-col justify-end">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold text-sm sm:text-base flex items-center gap-1.5">
                              <span>{profile.name}</span>
                              <span className="text-[10px] text-blue-400 font-mono font-normal bg-blue-950/60 border border-blue-800/40 px-1.5 py-0.5 rounded">B.Tech 1st Yr</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">Focus: Python · AI/ML Foundations</p>
                          </div>
                          <a
                            href={profile.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-200 hover:text-white transition-colors"
                            title="GitHub Profile"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* High-Tech Developer Avatar & Monogram Placeholder */
                    <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-4 space-y-4">
                      {/* Ambient glow behind avatar */}
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-md opacity-40 animate-pulse" />
                        <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl font-mono font-bold shadow-xl border border-white/20">
                          NP
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {profile.name}
                        </h3>
                        <p className="text-xs text-blue-400 font-medium">
                          Aspiring AI Engineer · 1st-Year B.Tech CSE
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-mono text-slate-300 pt-1">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Python</span>
                        <span className="text-slate-600">·</span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Algorithms</span>
                        <span className="text-slate-600">·</span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-300">GenAI</span>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={openEditModal}
                          className="text-[11px] text-slate-400 hover:text-blue-300 underline underline-offset-4 transition-colors flex items-center gap-1 mx-auto"
                        >
                          <Edit3 className="w-3 h-3" />
                          <span>Add Photo / Edit Details</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Status Bar inside card */}
                <div className="mt-3 px-2 py-2 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Learning Horizon:</span>
                  </div>
                  <span className="font-mono text-slate-200">Python · ML Math · GenAI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative Proof Strip below the hero split */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl glass-panel border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              1st Year
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">B.Tech Computer Science</div>
            <div className="text-[11px] text-blue-400/80 mt-0.5">Foundational Batch</div>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              02+
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Core Learning Projects</div>
            <div className="text-[11px] text-blue-400/80 mt-0.5">Grade & Basic Calculators</div>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              04
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Tech Disciplines</div>
            <div className="text-[11px] text-blue-400/80 mt-0.5">Python · HTML · CSS · GenAI</div>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Honest Milestones</div>
            <div className="text-[11px] text-purple-400/80 mt-0.5">Zero Fabricated Credentials</div>
          </div>
        </div>
      </div>
    </section>
  );
};
