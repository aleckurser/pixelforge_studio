import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCreations = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const featuredWorks = [
    {
      id: 1,
      title: "Neon Dreams",
      creator: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Photo Edit",
      studio: "Photo Editor",
      tools: ["Color Grading", "Light Effects", "Compositing"],
      likes: 2847,
      views: 15420,
      timeAgo: "2 days ago"
    },
    {
      id: 2,
      title: "Brand Identity Suite",
      creator: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Graphic Design",
      studio: "Image Design",
      tools: ["Vector Graphics", "Typography", "Brand Templates"],
      likes: 1923,
      views: 8765,
      timeAgo: "1 week ago"
    },
    {
      id: 3,
      title: "Motion Graphics Reel",
      creator: "Elena Vasquez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Video Edit",
      studio: "Video Workshop",
      tools: ["Motion Graphics", "Transitions", "Audio Sync"],
      likes: 3456,
      views: 22100,
      timeAgo: "3 days ago"
    },
    {
      id: 4,
      title: "Abstract Composition",
      creator: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Digital Art",
      studio: "Image Design",
      tools: ["Digital Brushes", "Layer Blending", "Texture Mapping"],
      likes: 1654,
      views: 9876,
      timeAgo: "5 days ago"
    },
    {
      id: 5,
      title: "Product Showcase",
      creator: "Anna Thompson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150",
      image: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Commercial",
      studio: "Photo Editor",
      tools: ["Background Removal", "Lighting", "Color Correction"],
      likes: 2134,
      views: 12890,
      timeAgo: "1 day ago"
    },
    {
      id: 6,
      title: "Cinematic Trailer",
      creator: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Video Edit",
      studio: "Video Workshop",
      tools: ["Color Grading", "Sound Design", "Visual Effects"],
      likes: 4567,
      views: 31250,
      timeAgo: "4 days ago"
    }
  ];

  const getStudioIcon = (studio) => {
    switch (studio) {
      case 'Photo Editor': return 'Camera';
      case 'Image Design': return 'Palette';
      case 'Video Workshop': return 'Video';
      default: return 'Sparkles';
    }
  };

  const getStudioColor = (studio) => {
    switch (studio) {
      case 'Photo Editor': return 'text-blue-500';
      case 'Image Design': return 'text-purple-500';
      case 'Video Workshop': return 'text-red-500';
      default: return 'text-accent';
    }
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Community Showcase</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
              Creations
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover incredible work from our creative community. Each piece showcases 
            the power and versatility of PixelForge Studio's professional tools.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredWorks?.map((work) => (
            <div
              key={work?.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-creative hover:shadow-creative-lg transition-all duration-300 border border-border"
              onMouseEnter={() => setHoveredItem(work?.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={work?.image}
                  alt={work?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredItem === work?.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Tools Used */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {work?.tools?.slice(0, 2)?.map((tool, index) => (
                        <span
                          key={index}
                          className="bg-background/90 backdrop-blur-sm text-primary px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                      {work?.tools?.length > 2 && (
                        <span className="bg-background/90 backdrop-blur-sm text-primary px-2 py-1 rounded-md text-xs font-medium">
                          +{work?.tools?.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button className="bg-background/90 backdrop-blur-sm p-2 rounded-lg hover:bg-background transition-creative">
                          <Icon name="Heart" size={16} className="text-error" />
                        </button>
                        <button className="bg-background/90 backdrop-blur-sm p-2 rounded-lg hover:bg-background transition-creative">
                          <Icon name="Share" size={16} className="text-primary" />
                        </button>
                      </div>
                      
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleNavigation('/studio-workspace')}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        iconName="Edit"
                        iconPosition="left"
                      >
                        Remix
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Studio Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center space-x-1 ${getStudioColor(work?.studio)}`}>
                    <Icon name={getStudioIcon(work?.studio)} size={12} />
                    <span className="text-xs font-medium">{work?.studio}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-creative">
                      {work?.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{work?.category}</p>
                  </div>
                </div>

                {/* Creator Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={work?.avatar}
                      alt={work?.creator}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-primary">{work?.creator}</p>
                      <p className="text-xs text-text-secondary">{work?.timeAgo}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={12} />
                      <span>{work?.likes?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{work?.views?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleNavigation('/asset-marketplace')}
            className="text-primary border-border hover:bg-muted"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Explore Community Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreations;