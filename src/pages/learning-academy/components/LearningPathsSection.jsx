import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathsSection = () => {
  const [selectedPath, setSelectedPath] = useState('beginner');

  const learningPaths = [
    {
      id: 'beginner',
      title: 'Creative Foundations',
      level: 'Beginner',
      duration: '4-6 weeks',
      icon: 'Sparkles',
      color: 'from-emerald-500 to-teal-600',
      description: 'Master the fundamentals of digital creativity with hands-on projects and guided tutorials.',
      modules: [
        'Introduction to Digital Design',
        'Color Theory & Composition',
        'Basic Photo Editing',
        'Typography Essentials',
        'First Creative Project'
      ],
      students: '125K+',
      rating: 4.9
    },
    {
      id: 'intermediate',
      title: 'Professional Techniques',
      level: 'Intermediate',
      duration: '6-8 weeks',
      icon: 'Target',
      color: 'from-blue-500 to-indigo-600',
      description: 'Advance your skills with professional workflows and industry-standard techniques.',
      modules: [
        'Advanced Photo Retouching',
        'Motion Graphics Basics',
        'Brand Identity Design',
        'Video Editing Fundamentals',
        'Portfolio Development'
      ],
      students: '89K+',
      rating: 4.8
    },
    {
      id: 'advanced',
      title: 'Creative Mastery',
      level: 'Advanced',
      duration: '8-12 weeks',
      icon: 'Crown',
      color: 'from-purple-500 to-pink-600',
      description: 'Master complex creative challenges and develop your unique artistic voice.',
      modules: [
        'Advanced Compositing',
        'AI-Assisted Workflows',
        'Creative Direction',
        'Client Project Management',
        'Industry Specialization'
      ],
      students: '45K+',
      rating: 4.9
    }
  ];

  const currentPath = learningPaths?.find(path => path?.id === selectedPath);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Structured Learning Paths
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Follow curated learning journeys designed by industry experts to take you from beginner to professional.
          </p>
        </div>

        {/* Path Selection */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Path Cards */}
          <div className="lg:w-1/3 space-y-4">
            {learningPaths?.map((path) => (
              <div
                key={path?.id}
                onClick={() => setSelectedPath(path?.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPath === path?.id
                    ? 'border-accent bg-accent/5 shadow-creative'
                    : 'border-border bg-card hover:border-accent/50 hover:shadow-creative-sm'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path?.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={path?.icon} size={24} color="white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-primary">{path?.title}</h3>
                      <span className="text-xs bg-muted text-text-secondary px-2 py-1 rounded-full">
                        {path?.level}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-2">{path?.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{path?.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Users" size={12} />
                        <span>{path?.students}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Star" size={12} className="text-warning fill-current" />
                        <span>{path?.rating}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Path Details */}
          <div className="lg:w-2/3">
            <div className="bg-card border border-border rounded-xl p-8 shadow-creative-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentPath?.color} flex items-center justify-center`}>
                  <Icon name={currentPath?.icon} size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{currentPath?.title}</h3>
                  <p className="text-text-secondary mb-4">{currentPath?.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-text-secondary">
                    <span className="flex items-center space-x-2">
                      <Icon name="BarChart3" size={16} />
                      <span>{currentPath?.level} Level</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} />
                      <span>{currentPath?.duration}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Icon name="Users" size={16} />
                      <span>{currentPath?.students} enrolled</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="mb-8">
                <h4 className="font-semibold text-primary mb-4">Course Modules</h4>
                <div className="space-y-3">
                  {currentPath?.modules?.map((module, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-text-primary">{module}</span>
                      <div className="ml-auto flex items-center space-x-2">
                        <Icon name="Play" size={16} className="text-text-secondary" />
                        <span className="text-xs text-text-secondary">12 lessons</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Start This Path
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                >
                  Preview Curriculum
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;