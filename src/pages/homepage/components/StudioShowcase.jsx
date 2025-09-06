import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StudioShowcase = () => {
  const [activeStudio, setActiveStudio] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const studios = [
    {
      id: 'photo-editor',
      name: 'Photo Editor Suite',
      description: 'Professional photo editing with advanced retouching, color grading, and compositing tools.',
      icon: 'Camera',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['AI-Powered Retouching', 'Advanced Color Grading', 'Layer Compositing', 'RAW Processing'],
      tools: [
        { name: 'Healing Brush', icon: 'Paintbrush' },
        { name: 'Color Curves', icon: 'TrendingUp' },
        { name: 'Masking Tools', icon: 'Layers' },
        { name: 'Filters', icon: 'Sparkles' }
      ]
    },
    {
      id: 'image-design',
      name: 'Image Design Studio',
      description: 'Create stunning graphics, illustrations, and digital art with professional design tools.',
      icon: 'Palette',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Vector Graphics', 'Typography Tools', 'Shape Libraries', 'Brand Templates'],
      tools: [
        { name: 'Pen Tool', icon: 'Edit3' },
        { name: 'Text Editor', icon: 'Type' },
        { name: 'Shapes', icon: 'Square' },
        { name: 'Gradients', icon: 'Zap' }
      ]
    },
    {
      id: 'video-workshop',
      name: 'Video Workshop',
      description: 'Edit videos with professional-grade tools, effects, and motion graphics capabilities.',
      icon: 'Video',
      color: 'from-red-500 to-red-600',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Timeline Editing', 'Motion Graphics', 'Audio Mixing', 'Export Optimization'],
      tools: [
        { name: 'Timeline', icon: 'BarChart3' },
        { name: 'Transitions', icon: 'Shuffle' },
        { name: 'Effects', icon: 'Wand2' },
        { name: 'Audio', icon: 'Volume2' }
      ]
    }
  ];

  const handleStudioChange = (index) => {
    setActiveStudio(index);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 1000);
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Layers" size={16} />
            <span>Three Powerful Studios</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Where pixels meet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
              possibility
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience the full spectrum of creative tools in one unified platform. 
            Switch seamlessly between photo editing, graphic design, and video production.
          </p>
        </div>

        {/* Studio Navigation */}
        <div className="flex flex-col lg:flex-row justify-center mb-12">
          <div className="flex flex-col lg:flex-row bg-muted rounded-2xl p-2 space-y-2 lg:space-y-0 lg:space-x-2">
            {studios?.map((studio, index) => (
              <button
                key={studio?.id}
                onClick={() => handleStudioChange(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeStudio === index
                    ? 'bg-background shadow-creative text-primary'
                    : 'text-text-secondary hover:text-primary hover:bg-background/50'
                }`}
              >
                <Icon name={studio?.icon} size={20} />
                <span className="font-medium whitespace-nowrap">{studio?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Studio Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Studio Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${studios?.[activeStudio]?.color} flex items-center justify-center shadow-creative`}>
                  <Icon name={studios?.[activeStudio]?.icon} size={24} color="white" />
                </div>
                <h3 className="text-3xl font-bold text-primary">
                  {studios?.[activeStudio]?.name}
                </h3>
              </div>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                {studios?.[activeStudio]?.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Key Features</h4>
              <div className="grid grid-cols-2 gap-3">
                {studios?.[activeStudio]?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Interactive Tools</h4>
              <div className="grid grid-cols-2 gap-3">
                {studios?.[activeStudio]?.tools?.map((tool, index) => (
                  <button
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted transition-creative text-left"
                    onClick={() => setIsInteracting(true)}
                  >
                    <Icon name={tool?.icon} size={16} className="text-accent" />
                    <span className="text-text-primary font-medium">{tool?.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={() => handleNavigation('/studio-workspace')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Try {studios?.[activeStudio]?.name}
            </Button>
          </div>

          {/* Interactive Preview */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-creative-lg overflow-hidden border border-border">
              {/* Preview Header */}
              <div className="bg-muted px-6 py-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${studios?.[activeStudio]?.color} flex items-center justify-center`}>
                      <Icon name={studios?.[activeStudio]?.icon} size={12} color="white" />
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {studios?.[activeStudio]?.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-xs text-text-secondary">Live Preview</span>
                  </div>
                </div>
              </div>

              {/* Preview Content */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={studios?.[activeStudio]?.image}
                  alt={studios?.[activeStudio]?.name}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    isInteracting ? 'scale-105 brightness-110' : 'scale-100'
                  }`}
                />
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name="MousePointer" size={16} className="text-accent" />
                          <span className="text-sm font-medium text-primary">
                            Click tools to interact
                          </span>
                        </div>
                        <div className="text-xs text-text-secondary">
                          WebGL Accelerated
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Processing Indicator */}
                {isInteracting && (
                  <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-medium text-primary">Processing...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Performance Badge */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium shadow-creative">
              60 FPS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioShowcase;