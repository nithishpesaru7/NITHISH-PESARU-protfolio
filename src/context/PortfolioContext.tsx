import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, SkillItem, ProjectItem, MilestoneItem } from '../types/portfolio';
import { initialProfile, skillsData, projectsData, milestonesData } from '../data/portfolioData';

interface PortfolioContextType {
  profile: UserProfile;
  skills: SkillItem[];
  projects: ProjectItem[];
  milestones: MilestoneItem[];
  isEditModalOpen: boolean;
  activeDemoModal: 'none' | 'grade_calc' | 'basic_calc';
  openEditModal: () => void;
  closeEditModal: () => void;
  openDemoModal: (demo: 'grade_calc' | 'basic_calc') => void;
  closeDemoModal: () => void;
  updateProfile: (updated: Partial<UserProfile>) => void;
  resetProfile: () => void;
  addCertificatePlaceholder: (title: string, desc: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEY = 'nithish_portfolio_profile_v5';
const MILESTONES_STORAGE_KEY = 'nithish_portfolio_milestones_v5';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...initialProfile, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to initialProfile
    }
    return initialProfile;
  });

  const [milestones, setMilestones] = useState<MilestoneItem[]>(() => {
    try {
      const saved = localStorage.getItem(MILESTONES_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return milestonesData;
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeDemoModal, setActiveDemoModal] = useState<'none' | 'grade_calc' | 'basic_calc'>('none');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // Ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(MILESTONES_STORAGE_KEY, JSON.stringify(milestones));
    } catch {
      // Ignore
    }
  }, [milestones]);

  const updateProfile = (updated: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updated }));
  };

  const resetProfile = () => {
    setProfile(initialProfile);
    setMilestones(milestonesData);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(MILESTONES_STORAGE_KEY);
  };

  const addCertificatePlaceholder = (title: string, desc: string) => {
    const newItem: MilestoneItem = {
      id: `cert-${Date.now()}`,
      title,
      category: 'Certificate Placeholder',
      date: 'Future Target',
      description: desc,
      isPlaceholder: true,
      statusLabel: 'Placeholder Slot'
    };
    setMilestones(prev => [...prev, newItem]);
  };

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openDemoModal = (demo: 'grade_calc' | 'basic_calc') => setActiveDemoModal(demo);
  const closeDemoModal = () => setActiveDemoModal('none');

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        skills: skillsData,
        projects: projectsData,
        milestones,
        isEditModalOpen,
        activeDemoModal,
        openEditModal,
        closeEditModal,
        openDemoModal,
        closeDemoModal,
        updateProfile,
        resetProfile,
        addCertificatePlaceholder
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
