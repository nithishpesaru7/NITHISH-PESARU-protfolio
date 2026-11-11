import React from 'react';
import { Github, ArrowUp, Heart } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { profile } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#04060d] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Academic Identity */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-[10px] font-mono font-bold">
                NP
              </span>
              <span className="text-sm font-bold text-white tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Aspiring AI Engineer · First-Year B.Tech Computer Science & Engineering
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-blue-400 transition-colors">Milestones</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Social and Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2">
          <p>© {new Date().getFullYear()} {profile.name}. All portfolio projects documented honestly.</p>
          <p className="flex items-center gap-1">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
