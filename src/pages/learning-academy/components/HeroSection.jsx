import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/5 pt-24 pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="GraduationCap" size={16} />
            <span>Master Creative Skills</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Learn. Create.
            <span className="text-accent"> Excel.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
            Master professional creative skills with interactive tutorials, industry masterclasses, and hands-on projects. From beginner basics to advanced techniques, unlock your creative potential.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-accent" />
              <span className="text-text-secondary">500K+ Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={16} className="text-accent" />
              <span className="text-text-secondary">1,200+ Tutorials</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-accent" />
              <span className="text-text-secondary">50+ Certifications</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="default" 
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-creative"
            >
              Start Learning Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Search"
              iconPosition="left"
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;