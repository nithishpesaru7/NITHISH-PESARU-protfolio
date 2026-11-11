import React, { useState } from 'react';
import { Github, Play, CheckCircle2, AlertCircle, ArrowUpRight, Code, Layers } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { GradeCalculatorInteractive } from './GradeCalculatorInteractive';
import { BasicCalculatorInteractive } from './BasicCalculatorInteractive';

export const Projects: React.FC = () => {
  const { projects } = usePortfolio();
  const [activeInteractiveDemo, setActiveInteractiveDemo] = useState<'grade_calc' | 'basic_calc' | null>('grade_calc');

  const gradeCalcProject = projects.find(p => p.id === 'student-grade-calculator');
  const basicCalcProject = projects.find(p => p.id === 'python-basic-calculator');

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>03. Applied Engineering</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span className="text-slate-400">Software Projects</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Learning Projects
              </h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
                Tangible software built from first principles during my first year of computer science.
                Every project includes honest technical documentation and interactive in-browser simulators.
              </p>
            </div>

            <a
              href="https://github.com/nithishpesaru7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 px-4 py-2 rounded-xl transition-all self-start md:self-auto shrink-0"
            >
              <Github className="w-4 h-4 text-blue-400" />
              <span>github.com/nithishpesaru7</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Project 1: Student Grade Calculator (Hero Feature Card) */}
        {gradeCalcProject && (
          <div className="mb-14 glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 hover:border-slate-700/80 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Information & Learning Outcomes */}
              <div className="lg:col-span-7 space-y-5">
                {/* Status & Category metadata (unboxed, zero-pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Completed Project
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{gradeCalcProject.subtitle}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="font-mono text-blue-400">Python 3 & Algorithmic Heuristics</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {gradeCalcProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {gradeCalcProject.description}
                </p>

                {/* Tech Stack unboxed tags */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-2 uppercase tracking-wider">
                    Core Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {gradeCalcProject.techStack.map(tech => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                    Key Architectural Highlights:
                  </span>
                  {gradeCalcProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setActiveInteractiveDemo(activeInteractiveDemo === 'grade_calc' ? null : 'grade_calc')}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{activeInteractiveDemo === 'grade_calc' ? 'Hide Simulator' : 'Test Live Simulator'}</span>
                  </button>

                  <a
                    href="https://github.com/nithishpesaru7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Product Preview */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-xl relative group">
                  <img
                    src="/src/assets/images/project_grade_calculator_1794418632932.jpg"
                    alt="Student Grade Calculator and Analytics Interface"
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="p-4 bg-[#0a0f20]/95 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Academic Evaluation Interface</span>
                    <span className="text-blue-400 font-mono text-[11px]">Interactive Demo Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Live Simulator for Project 1 */}
            {activeInteractiveDemo === 'grade_calc' && (
              <div className="mt-8 pt-6 border-t border-slate-800/80 animate-in fade-in duration-300">
                <GradeCalculatorInteractive />
              </div>
            )}
          </div>
        )}

        {/* Project 2: Python Basic Calculator (In Progress Card) */}
        {basicCalcProject && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 hover:border-slate-700/80 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Project details & In-Progress notice */}
              <div className="lg:col-span-7 space-y-5">
                {/* Status & Subtitle with unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    In Progress
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{basicCalcProject.subtitle}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="font-mono text-purple-400">{basicCalcProject.statusNote}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {basicCalcProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {basicCalcProject.description}
                </p>

                {/* In Progress Callout */}
                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/50 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-amber-300">Active Work in Progress:</strong> Core arithmetic functions and
                    runtime exception traps (including ZeroDivisionError) are tested and operational. Currently implementing
                    tokenized multi-operator precedence parsing.
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-2 uppercase tracking-wider">
                    Technologies & Techniques:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {basicCalcProject.techStack.map(tech => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">
                    Functional Capabilities:
                  </span>
                  {basicCalcProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setActiveInteractiveDemo(activeInteractiveDemo === 'basic_calc' ? null : 'basic_calc')}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-purple-600/20 transition-all flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{activeInteractiveDemo === 'basic_calc' ? 'Hide Calculator' : 'Try In-Progress Calculator'}</span>
                  </button>

                  <a
                    href="https://github.com/nithishpesaru7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5 text-purple-400" />
                    <span>Source on GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Code Architecture Overview Box */}
              <div className="lg:col-span-5 bg-[#050711] rounded-2xl p-5 border border-slate-800 text-left">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2 text-purple-300 font-semibold">
                    <Code className="w-4 h-4" />
                    <span>Python Architecture Preview</span>
                  </span>
                  <span className="text-[11px] text-amber-400">v0.8-alpha</span>
                </div>

                <div className="mt-4 space-y-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300">
                    <span className="text-blue-400 font-bold">def</span> <span className="text-yellow-300">divide</span>(a, b):<br />
                    <span className="text-slate-500 pl-4"># ZeroDivision safeguard</span><br />
                    <span className="text-purple-400 pl-4">if</span> b == 0:<br />
                    <span className="text-rose-400 pl-8">raise ZeroDivisionError</span><br />
                    <span className="text-purple-400 pl-4">return</span> a / b
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300">
                    <span className="text-blue-400 font-bold">class</span> <span className="text-emerald-300">BasicCalculator</span>:<br />
                    <span className="text-slate-500 pl-4"># Modular arithmetic engine</span><br />
                    <span className="text-slate-400 pl-4">history = []</span><br />
                    <span className="text-slate-400 pl-4">operations = [add, sub, mul, div, pow]</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Target: Complete Iteration 2</span>
                  <span className="text-purple-400 font-mono">Semester 1</span>
                </div>
              </div>
            </div>

            {/* Embedded Live Simulator for Project 2 */}
            {activeInteractiveDemo === 'basic_calc' && (
              <div className="mt-8 pt-6 border-t border-slate-800/80 animate-in fade-in duration-300">
                <BasicCalculatorInteractive />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
