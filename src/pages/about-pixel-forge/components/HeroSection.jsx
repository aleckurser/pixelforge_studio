import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/5 pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-warning/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/5 to-warning/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-creative">
                  <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">About PixelForge</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Forging the Future of
                <span className="block text-transparent bg-gradient-to-r from-accent to-warning bg-clip-text">
                  Creative Expression
                </span>
              </h1>
              
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                We're democratizing professional creativity through accessible, collaborative technology. 
                Our mission is to eliminate barriers between creative ideas and professional execution, 
                empowering every creator to achieve their vision.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">2M+</div>
                <div className="text-sm text-text-secondary">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">50M+</div>
                <div className="text-sm text-text-secondary">Projects Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-text-secondary">Countries</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-creative shadow-creative-sm">
                <Icon name="Play" size={18} />
                <span>Watch Our Story</span>
              </button>
              <button className="flex items-center justify-center space-x-2 border border-border hover:bg-muted text-primary px-6 py-3 rounded-lg font-medium transition-creative">
                <Icon name="Users" size={18} />
                <span>Meet the Team</span>
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-creative-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="PixelForge team collaborating"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Sparkles" size={18} color="white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Innovation at Heart</div>
                      <div className="text-sm text-gray-600">Building tomorrow's creative tools today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-warning rounded-2xl flex items-center justify-center shadow-creative animate-pulse-soft">
              <Icon name="Palette" size={24} color="white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-success rounded-xl flex items-center justify-center shadow-creative">
              <Icon name="Zap" size={18} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;