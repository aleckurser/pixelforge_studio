import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LearningPathsSection from './components/LearningPathsSection';
import InteractiveTutorialsSection from './components/InteractiveTutorialsSection';
import MasterclassSection from './components/MasterclassSection';
import SkillAssessmentSection from './components/SkillAssessmentSection';
import CertificationSection from './components/CertificationSection';
import CommunitySection from './components/CommunitySection';

const LearningAcademy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LearningPathsSection />
        <InteractiveTutorialsSection />
        <MasterclassSection />
        <SkillAssessmentSection />
        <CertificationSection />
        <CommunitySection />
      </main>
    </div>
  );
};

export default LearningAcademy;