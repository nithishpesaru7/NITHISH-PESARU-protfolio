import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PlaceholderEditorModal } from './components/PlaceholderEditorModal';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-[#060913] text-slate-100 bg-grid-pattern selection:bg-blue-600 selection:text-white relative">
        {/* Navigation Bar obeying Top Bar Contract */}
        <Navbar />

        {/* Six Main Portfolio Sections */}
        <main>
          {/* Section 1: Home / Hero */}
          <Hero />

          {/* Section 2: About Me */}
          <About />

          {/* Section 3: Skills */}
          <Skills />

          {/* Section 4: Projects */}
          <Projects />

          {/* Section 5: Achievements & Honest Milestones */}
          <Achievements />

          {/* Section 6: Contact & Social Handles */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Modal for Customizing Placeholders */}
        <PlaceholderEditorModal />
      </div>
    </PortfolioProvider>
  );
}
