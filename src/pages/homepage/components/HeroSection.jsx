import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const demoStages = [
    {
      title: "Raw Footage",
      description: "Original unedited content",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      filters: []
    },
    {
      title: "AI Color Grading",
      description: "Intelligent color enhancement",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      filters: ["brightness(1.2)", "contrast(1.3)", "saturate(1.4)"]
    },
    {
      title: "Smart Composition",
      description: "AI-powered framing optimization",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      filters: ["brightness(1.2)", "contrast(1.3)", "saturate(1.4)", "hue-rotate(10deg)"]
    },
    {
      title: "Professional Result",
      description: "Studio-quality output",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      filters: ["brightness(1.3)", "contrast(1.4)", "saturate(1.5)", "hue-rotate(15deg)", "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"]
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoStages?.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPlaying, demoStages?.length]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-accent) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, var(--color-accent) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>New: AI-Powered Creative Assistant</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight">
                Professional creativity,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
                  unleashed
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                Transform your creative vision into reality with our browser-native creative suite. 
                Professional photo editing, image design, and video production—all powered by AI 
                and built for collaboration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => handleNavigation('/studio-workspace')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-creative text-lg px-8 py-4"
                iconName="Zap"
                iconPosition="left"
              >
                Start Creating Free
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handlePlayPause}
                className="text-primary border-border hover:bg-muted text-lg px-8 py-4"
                iconName={isPlaying ? "Pause" : "Play"}
                iconPosition="left"
              >
                {isPlaying ? "Pause Demo" : "Watch Demo"}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2M+</div>
                <div className="text-sm text-text-secondary">Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50M+</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-text-secondary">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Demo */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-creative-lg overflow-hidden border border-border">
              {/* Demo Header */}
              <div className="bg-muted px-6 py-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-error rounded-full"></div>
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-text-primary">PixelForge Studio</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePlayPause}
                      className="p-2 rounded-lg hover:bg-background transition-creative"
                    >
                      <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary">
                      {demoStages?.[currentDemo]?.title}
                    </h3>
                    <div className="text-sm text-text-secondary">
                      Step {currentDemo + 1} of {demoStages?.length}
                    </div>
                  </div>
                  
                  <p className="text-text-secondary">
                    {demoStages?.[currentDemo]?.description}
                  </p>
                  
                  {/* Image Demo */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={demoStages?.[currentDemo]?.image}
                      alt={demoStages?.[currentDemo]?.title}
                      className="w-full h-full object-cover transition-all duration-1000"
                      style={{
                        filter: demoStages?.[currentDemo]?.filters?.join(' ')
                      }}
                    />
                    
                    {/* Processing Overlay */}
                    {isPlaying && (
                      <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-sm font-medium text-primary">Processing...</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Progress</span>
                      <span className="text-primary font-medium">
                        {Math.round(((currentDemo + 1) / demoStages?.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${((currentDemo + 1) / demoStages?.length) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium shadow-creative">
              WebGL Powered
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium shadow-creative">
              Real-time Processing
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-text-secondary">
          <span className="text-sm">Explore Studios</span>
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;