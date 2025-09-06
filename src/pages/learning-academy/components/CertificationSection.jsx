import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CertificationSection = () => {
  const [selectedCertification, setSelectedCertification] = useState('foundation');

  const certifications = [
    {
      id: 'foundation',
      title: 'PixelForge Foundation Certificate',
      level: 'Beginner',
      duration: '4-6 weeks',
      price: 'Free',
      icon: 'Award',
      color: 'from-emerald-500 to-teal-600',
      description: 'Master the fundamentals of digital creativity and earn your first professional credential.',
      skills: [
        'Basic Photo Editing',
        'Color Theory',
        'Composition Principles',
        'File Management',
        'Export Optimization'
      ],
      requirements: [
        'Complete 15 interactive tutorials',
        'Submit 3 practice projects',
        'Pass final assessment (80%+)',
        'Peer review participation'
      ],
      benefits: [
        'Industry-recognized credential',
        'LinkedIn certificate badge',
        'Portfolio showcase rights',
        'Community access'
      ],
      graduates: '25K+',
      rating: 4.8
    },
    {
      id: 'professional',
      title: 'PixelForge Professional Certificate',
      level: 'Intermediate',
      duration: '8-10 weeks',
      price: '$199',
      icon: 'Target',
      color: 'from-blue-500 to-indigo-600',
      description: 'Advance your skills with professional workflows and industry-standard techniques.',
      skills: [
        'Advanced Retouching',
        'Brand Design Systems',
        'Video Editing',
        'Client Communication',
        'Project Management'
      ],
      requirements: [
        'Foundation Certificate (or equivalent)',
        'Complete 25 advanced tutorials',
        'Submit 5 professional projects',
        'Pass comprehensive exam (85%+)',
        'Complete capstone project'
      ],
      benefits: [
        'Professional credential',
        'Career services access',
        'Industry mentor matching',
        'Job placement assistance',
        'Premium community access'
      ],
      graduates: '12K+',
      rating: 4.9
    },
    {
      id: 'specialist',
      title: 'PixelForge Specialist Certificate',
      level: 'Advanced',
      duration: '12-16 weeks',
      price: '$399',
      icon: 'Crown',
      color: 'from-purple-500 to-pink-600',
      description: 'Become a recognized expert in your chosen creative specialization.',
      skills: [
        'Creative Direction',
        'Advanced Compositing',
        'AI-Powered Workflows',
        'Team Leadership',
        'Innovation Methods'
      ],
      requirements: [
        'Professional Certificate',
        'Choose specialization track',
        'Complete 40+ expert tutorials',
        'Lead collaborative projects',
        'Pass expert-level assessment (90%+)',
        'Present final portfolio'
      ],
      benefits: [
        'Expert-level recognition',
        'Speaking opportunities',
        'Consulting network access',
        'Revenue sharing program',
        'Beta feature access',
        'Annual expert summit'
      ],
      graduates: '3.5K+',
      rating: 4.9
    }
  ];

  const currentCert = certifications?.find(cert => cert?.id === selectedCertification);

  const specializations = [
    { name: 'Photo Retouching', icon: 'Camera', students: '2.1K' },
    { name: 'Brand Design', icon: 'Palette', students: '1.8K' },
    { name: 'Video Production', icon: 'Video', students: '1.2K' },
    { name: 'AI Creative', icon: 'Zap', students: '0.9K' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Award" size={16} />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Certification Programs
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Earn industry-recognized credentials that validate your creative skills and advance your career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Certification Cards */}
          <div className="lg:col-span-1 space-y-4">
            {certifications?.map((cert) => (
              <div
                key={cert?.id}
                onClick={() => setSelectedCertification(cert?.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedCertification === cert?.id
                    ? 'border-accent bg-accent/5 shadow-creative'
                    : 'border-border bg-card hover:border-accent/50 hover:shadow-creative-sm'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert?.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={cert?.icon} size={24} color="white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-primary text-sm">{cert?.title}</h3>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-muted text-text-secondary px-2 py-1 rounded-full">
                        {cert?.level}
                      </span>
                      <span className="text-xs font-medium text-accent">
                        {cert?.price}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={10} />
                        <span>{cert?.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Users" size={10} />
                        <span>{cert?.graduates}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Star" size={10} className="text-warning fill-current" />
                        <span>{cert?.rating}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Details */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8 shadow-creative">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentCert?.color} flex items-center justify-center`}>
                  <Icon name={currentCert?.icon} size={32} color="white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">{currentCert?.title}</h3>
                  <p className="text-text-secondary mb-4">{currentCert?.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-text-secondary">
                    <span className="flex items-center space-x-2">
                      <Icon name="BarChart3" size={16} />
                      <span>{currentCert?.level} Level</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} />
                      <span>{currentCert?.duration}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={16} />
                      <span>{currentCert?.price}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                    <Icon name="CheckCircle" size={18} className="text-emerald-500" />
                    <span>Skills You'll Master</span>
                  </h4>
                  <div className="space-y-2">
                    {currentCert?.skills?.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Dot" size={16} className="text-accent" />
                        <span className="text-sm text-text-secondary">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                    <Icon name="ListChecks" size={18} className="text-blue-500" />
                    <span>Requirements</span>
                  </h4>
                  <div className="space-y-2">
                    {currentCert?.requirements?.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Dot" size={16} className="text-accent" />
                        <span className="text-sm text-text-secondary">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                  <Icon name="Gift" size={18} className="text-purple-500" />
                  <span>Certification Benefits</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentCert?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations (for Specialist level) */}
              {currentCert?.id === 'specialist' && (
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">Choose Your Specialization</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {specializations?.map((spec, index) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon name={spec?.icon} size={20} className="text-accent" />
                          <div>
                            <p className="font-medium text-primary text-sm">{spec?.name}</p>
                            <p className="text-xs text-text-secondary">{spec?.students} specialists</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Award"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {currentCert?.price === 'Free' ? 'Start Free Certification' : `Enroll Now - ${currentCert?.price}`}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="FileText"
                  iconPosition="left"
                >
                  View Curriculum
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Success Stories</h3>
            <p className="text-text-secondary">See how our certifications have transformed careers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Senior Designer at Adobe',
                certification: 'Professional Certificate',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616c9c9b8d4?w=100&h=100&fit=crop&crop=face',
                quote: 'The PixelForge certification gave me the confidence and skills to land my dream job at Adobe.'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Freelance Creative Director',
                certification: 'Specialist Certificate',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                quote: 'After earning my specialist certification, my freelance rates increased by 150%.'
              },
              {
                name: 'Emma Thompson',
                role: 'Creative Agency Owner',
                certification: 'All Certifications',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                quote: 'PixelForge certifications helped me build credibility and grow my agency to 15 employees.'
              }
            ]?.map((story, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-creative-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={story?.avatar}
                    alt={story?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-primary">{story?.name}</p>
                    <p className="text-sm text-text-secondary">{story?.role}</p>
                    <p className="text-xs text-accent">{story?.certification}</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary italic">"{story?.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;