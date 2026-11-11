import React from 'react';
import { GraduationCap, Brain, Terminal, Globe, Target, Compass, Edit3 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { profile, openEditModal } = usePortfolio();

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>01. Academic Profile</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span className="text-slate-400">Foundation</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Me & Academic Journey
            </h2>
            <button
              onClick={openEditModal}
              className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1.5 self-start md:self-auto bg-blue-950/40 border border-blue-900/60 px-3 py-1.5 rounded-lg transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Update Education Placeholders</span>
            </button>
          </div>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Currently in my foundational year of Computer Science engineering, balancing rigorous coursework
            with self-directed exploration in Python, AI principles, and modern software engineering.
          </p>
        </div>

        {/* Top Grid: Education Card & Core Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Education Card (5 cols) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Undergraduate Education
              </h3>
              <p className="text-xs text-blue-400 font-medium mb-6">
                First-Year Bachelor of Technology (B.Tech)
              </p>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="pb-3 border-b border-slate-800/80">
                  <span className="text-xs text-slate-500 block mb-0.5">Degree & Specialization</span>
                  <span className="font-semibold text-white">{profile.degree}</span>
                </div>

                <div className="pb-3 border-b border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 block mb-0.5">Institution Name</span>
                    <button
                      onClick={openEditModal}
                      className="text-[11px] text-blue-400 hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <span className="font-mono text-blue-300 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/40 text-xs inline-block">
                    {profile.collegeName}
                  </span>
                </div>

                <div className="pb-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block mb-0.5">Registration / Student ID</span>
                    <span className="font-mono text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-900/40 text-xs inline-block">
                      {profile.regNumber}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block mb-0.5">Expected Grad</span>
                    <span className="font-mono text-slate-200 text-xs">
                      {profile.graduationYear}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-500 block mb-1">Current Academic Focus</span>
                  <div className="text-xs text-slate-400 space-y-1">
                    <p>· Discrete Mathematics & Calculus for Computation</p>
                    <p>· Problem Solving through Procedural & Object-Oriented Logic</p>
                    <p>· Digital Logic & Computer Organization Foundations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Status: Active Enrolled Student</span>
              <span className="text-emerald-400 font-mono">Academic Year 1</span>
            </div>
          </div>

          {/* Core Areas of Fascination (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Passions & Technical Focus</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Rather than jumping to shallow surface-level AI tools, I am dedicated to learning the solid
                mathematical and architectural foundations from the ground up:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-2 mb-2 text-blue-400">
                    <Terminal className="w-4 h-4" />
                    <h4 className="font-semibold text-white text-sm">Python Programming</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Selected as my primary language for its scientific ecosystem, algorithmic clarity, and role
                    as the lingua franca of machine learning research.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-2 mb-2 text-purple-400">
                    <Brain className="w-4 h-4" />
                    <h4 className="font-semibold text-white text-sm">AI & Machine Learning</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Fascinated by neural networks, supervised learning models, and how mathematical optimization
                    transforms raw datasets into predictive intelligence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-2 mb-2 text-indigo-400">
                    <Compass className="w-4 h-4" />
                    <h4 className="font-semibold text-white text-sm">Basic Generative AI</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Exploring transformer mechanics, prompt engineering structures, token dynamics, and API
                    integration patterns for practical student productivity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Globe className="w-4 h-4" />
                    <h4 className="font-semibold text-white text-sm">Modern Web Interfaces</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Learning HTML, CSS, and modern web design so that every algorithm or calculator I build
                    can be packaged in accessible, responsive web tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Career Goals Block */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center gap-2 mb-3 text-indigo-400">
                <Target className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Career Vision: Path to AI Engineering</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                My ambition is to graduate as an AI Engineer capable of designing, training, evaluating, and
                deploying scalable intelligent models. Here is my 4-year undergraduate execution roadmap:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-900/40">
                  <div className="text-blue-400 font-mono font-bold text-[11px] mb-1">YEAR 1 (Current)</div>
                  <div className="text-white font-semibold mb-1">Foundations</div>
                  <p className="text-slate-400 text-[11px]">Python, Discrete Math, Web basics & CLI algorithms.</p>
                </div>

                <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-900/40">
                  <div className="text-indigo-400 font-mono font-bold text-[11px] mb-1">YEAR 2</div>
                  <div className="text-white font-semibold mb-1">Data & ML Core</div>
                  <p className="text-slate-400 text-[11px]">DSA, Linear Algebra, NumPy, Pandas, Scikit-learn.</p>
                </div>

                <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-900/40">
                  <div className="text-purple-400 font-mono font-bold text-[11px] mb-1">YEAR 3</div>
                  <div className="text-white font-semibold mb-1">Deep Learning</div>
                  <p className="text-slate-400 text-[11px]">PyTorch, CNNs, Transformers, full-stack AI pipelines.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-slate-400 font-mono font-bold text-[11px] mb-1">YEAR 4</div>
                  <div className="text-white font-semibold mb-1">AI Engineering</div>
                  <p className="text-slate-400 text-[11px]">Model deployment, LLMOps, production systems & career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
