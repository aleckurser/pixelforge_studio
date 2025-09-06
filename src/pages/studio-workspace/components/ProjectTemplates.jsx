import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProjectTemplates = ({ isVisible, onClose, onTemplateSelect, activeStudio }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templateCategories = {
    photo: [
      { id: 'all', name: 'All Templates', icon: 'Grid3X3' },
      { id: 'portrait', name: 'Portrait', icon: 'User' },
      { id: 'landscape', name: 'Landscape', icon: 'Mountain' },
      { id: 'product', name: 'Product', icon: 'Package' },
      { id: 'event', name: 'Event', icon: 'Calendar' }
    ],
    design: [
      { id: 'all', name: 'All Templates', icon: 'Grid3X3' },
      { id: 'social', name: 'Social Media', icon: 'Share2' },
      { id: 'print', name: 'Print Design', icon: 'Printer' },
      { id: 'web', name: 'Web Graphics', icon: 'Monitor' },
      { id: 'branding', name: 'Branding', icon: 'Award' }
    ],
    video: [
      { id: 'all', name: 'All Templates', icon: 'Grid3X3' },
      { id: 'social-video', name: 'Social Video', icon: 'Smartphone' },
      { id: 'youtube', name: 'YouTube', icon: 'Play' },
      { id: 'commercial', name: 'Commercial', icon: 'Briefcase' },
      { id: 'tutorial', name: 'Tutorial', icon: 'BookOpen' }
    ]
  };

  const templates = {
    photo: [
      {
        id: 1,
        name: 'Professional Portrait',
        category: 'portrait',
        dimensions: '2400 × 3600 px',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
        description: 'Perfect for professional headshots and portraits',
        isPro: false
      },
      {
        id: 2,
        name: 'Landscape Photography',
        category: 'landscape',
        dimensions: '4000 × 2667 px',
        thumbnail: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=300&h=200&fit=crop',
        description: 'Ideal for nature and landscape photography',
        isPro: false
      },
      {
        id: 3,
        name: 'Product Showcase',
        category: 'product',
        dimensions: '2000 × 2000 px',
        thumbnail: 'https://images.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_150.jpg',
        description: 'Clean background for product photography',
        isPro: true
      },
      {
        id: 4,
        name: 'Event Photography',
        category: 'event',
        dimensions: '3000 × 2000 px',
        thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop',
        description: 'Optimized for event and wedding photography',
        isPro: false
      }
    ],
    design: [
      {
        id: 1,
        name: 'Instagram Post',
        category: 'social',
        dimensions: '1080 × 1080 px',
        thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=300&h=300&fit=crop',
        description: 'Square format for Instagram posts',
        isPro: false
      },
      {
        id: 2,
        name: 'Business Card',
        category: 'print',
        dimensions: '3.5 × 2 in',
        thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop',
        description: 'Standard business card template',
        isPro: true
      },
      {
        id: 3,
        name: 'Web Banner',
        category: 'web',
        dimensions: '1200 × 400 px',
        thumbnail: 'https://images.pixabay.com/photo/2016/11/30/20/58/programming-1873854_150.jpg',
        description: 'Website header banner template',
        isPro: false
      },
      {
        id: 4,
        name: 'Logo Design',
        category: 'branding',
        dimensions: '500 × 500 px',
        thumbnail: 'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?w=300&h=300&fit=crop',
        description: 'Square logo design template',
        isPro: true
      }
    ],
    video: [
      {
        id: 1,
        name: 'Instagram Reel',
        category: 'social-video',
        dimensions: '1080 × 1920 px',
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=400&fit=crop',
        description: 'Vertical video for Instagram Reels',
        isPro: false
      },
      {
        id: 2,
        name: 'YouTube Video',
        category: 'youtube',
        dimensions: '1920 × 1080 px',
        thumbnail: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?w=300&h=200&fit=crop',
        description: 'Standard YouTube video format',
        isPro: false
      },
      {
        id: 3,
        name: 'Commercial Ad',
        category: 'commercial',
        dimensions: '1920 × 1080 px',
        thumbnail: 'https://images.pixabay.com/photo/2018/01/14/23/12/nature-3082832_150.jpg',
        description: 'Professional commercial template',
        isPro: true
      },
      {
        id: 4,
        name: 'Tutorial Video',
        category: 'tutorial',
        dimensions: '1920 × 1080 px',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
        description: 'Educational content template',
        isPro: false
      }
    ]
  };

  const currentCategories = templateCategories?.[activeStudio] || [];
  const currentTemplates = templates?.[activeStudio] || [];

  const filteredTemplates = selectedCategory === 'all' 
    ? currentTemplates 
    : currentTemplates?.filter(template => template?.category === selectedCategory);

  const handleTemplateSelect = (template) => {
    onTemplateSelect(template);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-creative-lg w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-card-foreground">Choose a Template</h2>
            <p className="text-sm text-text-secondary mt-1">
              Start your project with a professional template
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
            className="text-text-secondary hover:text-primary"
          />
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Categories Sidebar */}
          <div className="w-64 border-r border-border p-4">
            <h3 className="text-sm font-semibold text-card-foreground mb-3">Categories</h3>
            <div className="space-y-1">
              {currentCategories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-creative ${
                    selectedCategory === category?.id
                      ? 'bg-accent text-accent-foreground'
                      : 'text-card-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={category?.icon} size={16} />
                  <span>{category?.name}</span>
                </button>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold text-card-foreground mb-3">Quick Start</h4>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Plus"
                  onClick={() => onTemplateSelect({ type: 'blank' })}
                  className="justify-start"
                >
                  Blank Canvas
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Upload"
                  className="justify-start"
                >
                  Upload File
                </Button>
              </div>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTemplates?.map((template) => (
                <div
                  key={template?.id}
                  className="group cursor-pointer"
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className="relative rounded-lg overflow-hidden bg-muted hover:ring-2 hover:ring-accent transition-creative">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={template?.thumbnail}
                        alt={template?.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Pro Badge */}
                      {template?.isPro && (
                        <div className="absolute top-2 right-2 bg-warning text-warning-foreground px-2 py-1 rounded text-xs font-medium">
                          PRO
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button
                          variant="default"
                          size="sm"
                          iconName="Plus"
                          className="bg-accent hover:bg-accent/90"
                        >
                          Use Template
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-medium text-card-foreground mb-1 group-hover:text-accent transition-colors">
                        {template?.name}
                      </h3>
                      <p className="text-xs text-text-secondary mb-2">
                        {template?.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-secondary font-mono">
                          {template?.dimensions}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Icon name="Download" size={12} className="text-text-secondary" />
                          <span className="text-xs text-text-secondary">
                            {Math.floor(Math.random() * 1000) + 100}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTemplates?.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-text-secondary opacity-40 mb-4" />
                <h3 className="text-lg font-medium text-card-foreground mb-2">No templates found</h3>
                <p className="text-text-secondary">
                  Try selecting a different category or create a blank canvas
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4 flex items-center justify-between">
          <div className="text-sm text-text-secondary">
            {filteredTemplates?.length} templates available
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Plus"
              onClick={() => handleTemplateSelect({ type: 'blank' })}
              className="bg-accent hover:bg-accent/90"
            >
              Start Blank
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplates;