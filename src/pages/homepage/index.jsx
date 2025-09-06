import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StudioShowcase from './components/StudioShowcase';
import FeaturedCreations from './components/FeaturedCreations';
import PerformanceMetrics from './components/PerformanceMetrics';
import LearningPreview from './components/LearningPreview';
import CollaborationShowcase from './components/CollaborationShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <StudioShowcase />
        <FeaturedCreations />
        <PerformanceMetrics />
        <LearningPreview />
        <CollaborationShowcase />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;