import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    creators: 0,
    projects: 0,
    uptime: 0,
    performance: 0
  });

  const targetValues = {
    creators: 2000000,
    projects: 50000000,
    uptime: 99.9,
    performance: 60
  };

  const metrics = [
    {
      key: 'creators',
      label: 'Active Creators',
      value: animatedValues?.creators,
      target: targetValues?.creators,
      suffix: '+',
      icon: 'Users',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      description: 'Creative professionals worldwide'
    },
    {
      key: 'projects',
      label: 'Projects Completed',
      value: animatedValues?.projects,
      target: targetValues?.projects,
      suffix: '+',
      icon: 'FolderOpen',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      description: 'Successfully delivered creations'
    },
    {
      key: 'uptime',
      label: 'Platform Uptime',
      value: animatedValues?.uptime,
      target: targetValues?.uptime,
      suffix: '%',
      icon: 'Activity',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      description: 'Reliable creative workspace'
    },
    {
      key: 'performance',
      label: 'WebGL Performance',
      value: animatedValues?.performance,
      target: targetValues?.performance,
      suffix: ' FPS',
      icon: 'Zap',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      description: 'Real-time rendering speed'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedValues({
        creators: Math.floor(targetValues?.creators * easeOutQuart),
        projects: Math.floor(targetValues?.projects * easeOutQuart),
        uptime: Math.min(targetValues?.uptime, (targetValues?.uptime * easeOutQuart)),
        performance: Math.floor(targetValues?.performance * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedValues(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num, key) => {
    if (key === 'uptime') {
      return num?.toFixed(1);
    }
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000)?.toFixed(0) + 'K';
    }
    return num?.toString();
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="TrendingUp" size={16} />
            <span>Platform Performance</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
              Scale
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Trusted by millions of creators worldwide. Our platform delivers 
            enterprise-grade performance with consumer-friendly accessibility.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics?.map((metric) => (
            <div
              key={metric?.key}
              className="relative bg-card rounded-2xl p-8 shadow-creative hover:shadow-creative-lg transition-all duration-300 border border-border group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${metric?.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={metric?.icon} size={28} className={metric?.color} />
              </div>

              {/* Value */}
              <div className="mb-4">
                <div className="text-4xl font-bold text-primary mb-2">
                  {formatNumber(metric?.value, metric?.key)}{metric?.suffix}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {metric?.label}
                </h3>
                <p className="text-sm text-text-secondary">
                  {metric?.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-2000 ${metric?.color?.replace('text-', 'bg-')}`}
                  style={{
                    width: `${(metric?.value / metric?.target) * 100}%`
                  }}
                ></div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-card rounded-2xl p-8 shadow-creative border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Technical Excellence
            </h3>
            <p className="text-text-secondary">
              Powered by cutting-edge web technologies for professional-grade performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WebGL Performance */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Cpu" size={28} className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">WebGL Acceleration</h4>
                <p className="text-text-secondary text-sm">
                  Hardware-accelerated rendering for real-time image and video processing
                </p>
              </div>
            </div>

            {/* WebAssembly */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Zap" size={28} className="text-purple-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">WebAssembly</h4>
                <p className="text-text-secondary text-sm">
                  Near-native performance for complex image processing algorithms
                </p>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Cloud" size={28} className="text-green-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Global CDN</h4>
                <p className="text-text-secondary text-sm">
                  Worldwide content delivery for instant asset loading and collaboration
                </p>
              </div>
            </div>
          </div>

          {/* Real-time Status */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-text-secondary">All Systems Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-blue-500" />
                <span className="text-sm text-text-secondary">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-green-500" />
                <span className="text-sm text-text-secondary">End-to-End Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;