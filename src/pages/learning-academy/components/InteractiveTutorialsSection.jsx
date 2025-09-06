import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const InteractiveTutorialsSection = () => {
  const [activeCategory, setActiveCategory] = useState('photo-editing');

  const categories = [
    { id: 'photo-editing', name: 'Photo Editing', icon: 'Camera', count: 245 },
    { id: 'graphic-design', name: 'Graphic Design', icon: 'Palette', count: 189 },
    { id: 'video-editing', name: 'Video Editing', icon: 'Video', count: 156 },
    { id: 'ai-tools', name: 'AI Tools', icon: 'Zap', count: 98 }
  ];

  const tutorials = {
    'photo-editing': [
      {
        id: 1,
        title: 'Advanced Portrait Retouching',
        instructor: 'Sarah Chen',
        duration: '45 min',
        difficulty: 'Intermediate',
        thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616c9c9b8d4?w=400&h=250&fit=crop',
        rating: 4.9,
        students: '12.5K',
        isInteractive: true,
        tools: ['Healing Brush', 'Frequency Separation', 'Color Grading']
      },
      {
        id: 2,
        title: 'Landscape HDR Processing',
        instructor: 'Marcus Rodriguez',
        duration: '32 min',
        difficulty: 'Advanced',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
        rating: 4.8,
        students: '8.9K',
        isInteractive: true,
        tools: ['HDR Merge', 'Tone Mapping', 'Local Adjustments']
      },
      {
        id: 3,
        title: 'Creative Double Exposure',
        instructor: 'Emma Thompson',
        duration: '28 min',
        difficulty: 'Beginner',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
        rating: 4.7,
        students: '15.2K',
        isInteractive: true,
        tools: ['Blend Modes', 'Layer Masks', 'Opacity Control']
      }
    ],
    'graphic-design': [
      {
        id: 4,
        title: 'Logo Design Fundamentals',
        instructor: 'David Park',
        duration: '52 min',
        difficulty: 'Beginner',
        thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop',
        rating: 4.9,
        students: '18.7K',
        isInteractive: true,
        tools: ['Vector Tools', 'Typography', 'Color Theory']
      },
      {
        id: 5,
        title: 'Brand Identity Systems',
        instructor: 'Lisa Wang',
        duration: '67 min',
        difficulty: 'Advanced',
        thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
        rating: 4.8,
        students: '9.4K',
        isInteractive: true,
        tools: ['Style Guides', 'Asset Management', 'Brand Guidelines']
      }
    ],
    'video-editing': [
      {
        id: 6,
        title: 'Cinematic Color Grading',
        instructor: 'Alex Johnson',
        duration: '41 min',
        difficulty: 'Intermediate',
        thumbnail: 'https://images.unsplash.com/photo-1489599904472-c2d34d17f0a5?w=400&h=250&fit=crop',
        rating: 4.9,
        students: '11.3K',
        isInteractive: true,
        tools: ['Color Wheels', 'LUTs', 'Scopes']
      }
    ],
    'ai-tools': [
      {
        id: 7,
        title: 'AI-Powered Background Removal',
        instructor: 'Maya Patel',
        duration: '25 min',
        difficulty: 'Beginner',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
        rating: 4.8,
        students: '22.1K',
        isInteractive: true,
        tools: ['AI Selection', 'Edge Refinement', 'Smart Masking']
      }
    ]
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-emerald-600 bg-emerald-50';
      case 'Intermediate': return 'text-blue-600 bg-blue-50';
      case 'Advanced': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Interactive Tutorials
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Learn by doing with hands-on tutorials that use real PixelForge tools. Practice techniques in actual project environments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-accent text-accent-foreground shadow-creative'
                  : 'bg-card text-text-primary hover:bg-accent/10 hover:text-accent border border-border'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span className="font-medium">{category?.name}</span>
              <span className="text-xs opacity-75">({category?.count})</span>
            </button>
          ))}
        </div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials?.[activeCategory]?.map((tutorial) => (
            <div key={tutorial?.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-creative-sm hover:shadow-creative transition-all duration-300 group">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <Image
                  src={tutorial?.thumbnail}
                  alt={tutorial?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Interactive Badge */}
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <Icon name="MousePointer" size={12} />
                  <span>Interactive</span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-creative">
                    <Icon name="Play" size={24} className="text-accent ml-1" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {tutorial?.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Difficulty Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial?.difficulty)}`}>
                    {tutorial?.difficulty}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-text-secondary">
                    <Icon name="Star" size={12} className="text-warning fill-current" />
                    <span>{tutorial?.rating}</span>
                  </div>
                </div>

                {/* Title & Instructor */}
                <h3 className="font-semibold text-primary mb-2 line-clamp-2">{tutorial?.title}</h3>
                <p className="text-sm text-text-secondary mb-4">by {tutorial?.instructor}</p>

                {/* Tools */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tutorial?.tools?.slice(0, 2)?.map((tool, index) => (
                      <span key={index} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                    {tutorial?.tools?.length > 2 && (
                      <span className="text-xs text-accent">+{tutorial?.tools?.length - 2} more</span>
                    )}
                  </div>
                </div>

                {/* Stats & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <span className="flex items-center space-x-1">
                      <Icon name="Users" size={12} />
                      <span>{tutorial?.students}</span>
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    iconName="Play"
                    iconPosition="left"
                  >
                    Start Tutorial
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            iconName="ChevronDown"
            iconPosition="right"
          >
            Load More Tutorials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTutorialsSection;