import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const communityStats = [
    { label: 'Active Members', value: '125K+', icon: 'Users' },
    { label: 'Tutorials Shared', value: '8.5K+', icon: 'BookOpen' },
    { label: 'Projects Showcased', value: '45K+', icon: 'Image' },
    { label: 'Expert Mentors', value: '250+', icon: 'Award' }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Advanced Masking Techniques for Complex Hair',
      author: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c9c9b8d4?w=50&h=50&fit=crop&crop=face',
      category: 'Photo Editing',
      replies: 23,
      likes: 156,
      timeAgo: '2 hours ago',
      isExpert: true,
      tags: ['masking', 'hair-editing', 'advanced']
    },
    {
      id: 2,
      title: 'Color Grading Workflow for Cinematic Look',
      author: 'Marcus Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      category: 'Video Editing',
      replies: 18,
      likes: 89,
      timeAgo: '4 hours ago',
      isExpert: false,
      tags: ['color-grading', 'cinematic', 'workflow']
    },
    {
      id: 3,
      title: 'AI-Powered Background Generation Tips',
      author: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      category: 'AI Tools',
      replies: 31,
      likes: 203,
      timeAgo: '6 hours ago',
      isExpert: true,
      tags: ['ai-tools', 'backgrounds', 'generation']
    },
    {
      id: 4,
      title: 'Typography Hierarchy in Brand Design',
      author: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      category: 'Graphic Design',
      replies: 12,
      likes: 67,
      timeAgo: '8 hours ago',
      isExpert: false,
      tags: ['typography', 'branding', 'hierarchy']
    }
  ];

  const userTutorials = [
    {
      id: 1,
      title: 'Creating Realistic Water Reflections',
      author: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face',
      thumbnail: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=200&fit=crop',
      duration: '12 min',
      views: '2.3K',
      rating: 4.8,
      level: 'Intermediate',
      category: 'Photo Effects'
    },
    {
      id: 2,
      title: 'Minimalist Logo Design Process',
      author: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=200&fit=crop',
      duration: '18 min',
      views: '1.8K',
      rating: 4.9,
      level: 'Beginner',
      category: 'Logo Design'
    },
    {
      id: 3,
      title: 'Smooth Transition Effects in Video',
      author: 'Maya Patel',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face',
      thumbnail: 'https://images.unsplash.com/photo-1489599904472-c2d34d17f0a5?w=300&h=200&fit=crop',
      duration: '15 min',
      views: '3.1K',
      rating: 4.7,
      level: 'Advanced',
      category: 'Video Editing'
    }
  ];

  const showcaseProjects = [
    {
      id: 1,
      title: 'Brand Identity for Eco Startup',
      author: 'Creative Studio Pro',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c9c9b8d4?w=50&h=50&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      likes: 234,
      comments: 18,
      category: 'Branding',
      tools: ['Logo Design', 'Color Palette', 'Typography']
    },
    {
      id: 2,
      title: 'Surreal Portrait Manipulation',
      author: 'Digital Artist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      likes: 189,
      comments: 25,
      category: 'Photo Art',
      tools: ['Compositing', 'Color Grading', 'Digital Painting']
    },
    {
      id: 3,
      title: 'Motion Graphics Showreel',
      author: 'Motion Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1489599904472-c2d34d17f0a5?w=400&h=300&fit=crop',
      likes: 156,
      comments: 12,
      category: 'Motion Graphics',
      tools: ['Animation', 'Typography', 'Effects']
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Photo Editing': 'bg-blue-100 text-blue-700',
      'Video Editing': 'bg-purple-100 text-purple-700',
      'Graphic Design': 'bg-green-100 text-green-700',
      'AI Tools': 'bg-orange-100 text-orange-700',
      'Branding': 'bg-pink-100 text-pink-700',
      'Photo Art': 'bg-indigo-100 text-indigo-700',
      'Motion Graphics': 'bg-red-100 text-red-700'
    };
    return colors?.[category] || 'bg-gray-100 text-gray-700';
  };

  const getLevelColor = (level) => {
    const colors = {
      'Beginner': 'bg-emerald-100 text-emerald-700',
      'Intermediate': 'bg-blue-100 text-blue-700',
      'Advanced': 'bg-purple-100 text-purple-700'
    };
    return colors?.[level] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Creative Community
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join a vibrant community of creators sharing knowledge, techniques, and inspiration. Learn from peers and contribute to the collective growth.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'discussions', label: 'Discussions', icon: 'MessageSquare' },
            { id: 'tutorials', label: 'User Tutorials', icon: 'BookOpen' },
            { id: 'showcase', label: 'Project Showcase', icon: 'Image' }
          ]?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-accent text-accent-foreground shadow-creative'
                  : 'bg-card text-text-primary hover:bg-accent/10 hover:text-accent border border-border'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span className="font-medium">{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="space-y-6">
              {discussions?.map((discussion) => (
                <div key={discussion?.id} className="bg-card border border-border rounded-xl p-6 shadow-creative-sm hover:shadow-creative transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={discussion?.avatar}
                      alt={discussion?.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-primary mb-1 hover:text-accent cursor-pointer">
                            {discussion?.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-text-secondary">
                            <span className="flex items-center space-x-1">
                              <span>by {discussion?.author}</span>
                              {discussion?.isExpert && (
                                <Icon name="BadgeCheck" size={14} className="text-accent" />
                              )}
                            </span>
                            <span>•</span>
                            <span>{discussion?.timeAgo}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(discussion?.category)}`}>
                          {discussion?.category}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {discussion?.tags?.map((tag, index) => (
                          <span key={index} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-6 text-sm text-text-secondary">
                        <span className="flex items-center space-x-1 hover:text-accent cursor-pointer">
                          <Icon name="MessageSquare" size={16} />
                          <span>{discussion?.replies} replies</span>
                        </span>
                        <span className="flex items-center space-x-1 hover:text-accent cursor-pointer">
                          <Icon name="Heart" size={16} />
                          <span>{discussion?.likes} likes</span>
                        </span>
                        <span className="flex items-center space-x-1 hover:text-accent cursor-pointer">
                          <Icon name="Share" size={16} />
                          <span>Share</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="text-center">
                <Button variant="outline" size="lg" iconName="Plus" iconPosition="left">
                  Start New Discussion
                </Button>
              </div>
            </div>
          )}

          {/* User Tutorials Tab */}
          {activeTab === 'tutorials' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userTutorials?.map((tutorial) => (
                <div key={tutorial?.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-creative-sm hover:shadow-creative transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={tutorial?.thumbnail}
                      alt={tutorial?.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelColor(tutorial?.level)}`}>
                        {tutorial?.level}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(tutorial?.category)}`}>
                        {tutorial?.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-creative">
                        <Icon name="Play" size={24} className="text-accent ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {tutorial?.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-primary mb-2 line-clamp-2">{tutorial?.title}</h3>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <Image
                        src={tutorial?.avatar}
                        alt={tutorial?.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-text-secondary">{tutorial?.author}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-text-secondary">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Icon name="Eye" size={14} />
                          <span>{tutorial?.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="Star" size={14} className="text-warning fill-current" />
                          <span>{tutorial?.rating}</span>
                        </span>
                      </div>
                      <Button variant="outline" size="sm" iconName="Play" iconPosition="left">
                        Watch
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="col-span-full text-center">
                <Button variant="outline" size="lg" iconName="Upload" iconPosition="left">
                  Share Your Tutorial
                </Button>
              </div>
            </div>
          )}

          {/* Project Showcase Tab */}
          {activeTab === 'showcase' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcaseProjects?.map((project) => (
                <div key={project?.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-creative-sm hover:shadow-creative transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project?.image}
                      alt={project?.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project?.category)}`}>
                        {project?.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1">
                        {project?.tools?.slice(0, 2)?.map((tool, index) => (
                          <span key={index} className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {tool}
                          </span>
                        ))}
                        {project?.tools?.length > 2 && (
                          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                            +{project?.tools?.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-primary mb-2 line-clamp-2">{project?.title}</h3>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <Image
                        src={project?.avatar}
                        alt={project?.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-text-secondary">{project?.author}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-text-secondary">
                        <span className="flex items-center space-x-1 hover:text-accent cursor-pointer">
                          <Icon name="Heart" size={16} />
                          <span>{project?.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1 hover:text-accent cursor-pointer">
                          <Icon name="MessageSquare" size={16} />
                          <span>{project?.comments}</span>
                        </span>
                      </div>
                      <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="col-span-full text-center">
                <Button variant="outline" size="lg" iconName="Upload" iconPosition="left">
                  Share Your Project
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Community CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Join Our Creative Community</h3>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Connect with fellow creators, share your work, learn new techniques, and grow your skills in a supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              iconName="Users"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Join Community
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Start Discussion
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;