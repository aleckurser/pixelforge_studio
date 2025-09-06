import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const MasterclassSection = () => {
  const [selectedMasterclass, setSelectedMasterclass] = useState(0);

  const masterclasses = [
    {
      id: 1,
      title: 'Advanced Compositing Techniques',
      instructor: {
        name: 'Elena Rodriguez',
        title: 'Senior VFX Artist at Pixar',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616c9c9b8d4?w=100&h=100&fit=crop&crop=face',
        experience: '15+ years'
      },
      duration: '2h 45m',
      lessons: 12,
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      description: 'Master the art of seamless compositing with industry-proven techniques used in blockbuster films. Learn advanced masking, color matching, and integration methods.',
      highlights: [
        'Professional compositing workflows',
        'Advanced masking techniques',
        'Color theory for integration',
        'Industry case studies',
        'Real-time feedback sessions'
      ],
      price: 149,
      rating: 4.9,
      students: '3.2K',
      level: 'Advanced',
      tools: ['Compositing Engine', 'Color Grading', 'Motion Tracking']
    },
    {
      id: 2,
      title: 'Creative Direction & Visual Storytelling',
      instructor: {
        name: 'Marcus Chen',
        title: 'Creative Director at Adobe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        experience: '12+ years'
      },
      duration: '3h 15m',
      lessons: 15,
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'Develop your creative vision and learn to communicate powerful stories through visual design. Master the principles that drive successful creative campaigns.',
      highlights: [
        'Visual storytelling principles',
        'Brand narrative development',
        'Creative brief interpretation',
        'Client presentation skills',
        'Portfolio development'
      ],
      price: 199,
      rating: 4.8,
      students: '2.8K',
      level: 'Intermediate',
      tools: ['Design System', 'Presentation Tools', 'Brand Guidelines']
    },
    {
      id: 3,
      title: 'AI-Powered Creative Workflows',
      instructor: {
        name: 'Dr. Sarah Kim',
        title: 'AI Research Lead at OpenAI',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        experience: '10+ years'
      },
      duration: '2h 30m',
      lessons: 10,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      description: 'Discover how to leverage AI tools to enhance your creative process. Learn to integrate machine learning into your workflow for unprecedented efficiency.',
      highlights: [
        'AI tool integration strategies',
        'Automated workflow optimization',
        'Creative AI prompt engineering',
        'Quality control with AI',
        'Future of creative technology'
      ],
      price: 179,
      rating: 4.9,
      students: '4.1K',
      level: 'Intermediate',
      tools: ['AI Assistant', 'Smart Filters', 'Auto Enhancement']
    }
  ];

  const currentMasterclass = masterclasses?.[selectedMasterclass];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Crown" size={16} />
            <span>Premium Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Industry Masterclasses
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Learn from industry leaders and master advanced techniques used by professionals at top creative studios worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Masterclass List */}
          <div className="lg:col-span-1 space-y-4">
            {masterclasses?.map((masterclass, index) => (
              <div
                key={masterclass?.id}
                onClick={() => setSelectedMasterclass(index)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedMasterclass === index
                    ? 'border-accent bg-accent/5 shadow-creative'
                    : 'border-border bg-card hover:border-accent/50 hover:shadow-creative-sm'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <Image
                    src={masterclass?.instructor?.avatar}
                    alt={masterclass?.instructor?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-primary text-sm mb-1 line-clamp-2">
                      {masterclass?.title}
                    </h3>
                    <p className="text-xs text-text-secondary mb-2">
                      by {masterclass?.instructor?.name}
                    </p>
                    <div className="flex items-center space-x-3 text-xs text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={10} />
                        <span>{masterclass?.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Star" size={10} className="text-warning fill-current" />
                        <span>{masterclass?.rating}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Masterclass Details */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-creative">
              {/* Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={currentMasterclass?.thumbnail}
                  alt={currentMasterclass?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-creative cursor-pointer hover:scale-105 transition-transform">
                    <Icon name="Play" size={32} className="text-accent ml-1" />
                  </div>
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {currentMasterclass?.level}
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ${currentMasterclass?.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title & Instructor */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {currentMasterclass?.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={currentMasterclass?.instructor?.avatar}
                      alt={currentMasterclass?.instructor?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-primary">
                        {currentMasterclass?.instructor?.name}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {currentMasterclass?.instructor?.title}
                      </p>
                      <p className="text-xs text-accent">
                        {currentMasterclass?.instructor?.experience} experience
                      </p>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed">
                    {currentMasterclass?.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-text-secondary">
                  <span className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{currentMasterclass?.duration}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Icon name="BookOpen" size={16} />
                    <span>{currentMasterclass?.lessons} lessons</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Icon name="Users" size={16} />
                    <span>{currentMasterclass?.students} students</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                    <span>{currentMasterclass?.rating}</span>
                  </span>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">What You'll Learn</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentMasterclass?.highlights?.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-3">Tools Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentMasterclass?.tools?.map((tool, index) => (
                      <span key={index} className="bg-muted text-text-secondary px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
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
                    Enroll Now - ${currentMasterclass?.price}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    Preview Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;