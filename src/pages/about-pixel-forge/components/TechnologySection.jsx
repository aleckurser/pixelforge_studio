import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnologySection = () => {
  const technologies = [
    {
      icon: "Zap",
      title: "WebGL Acceleration",
      description: "Hardware-accelerated rendering delivers desktop-class performance directly in your browser.",
      stats: "60 FPS real-time editing"
    },
    {
      icon: "Globe",
      title: "Real-time Collaboration",
      description: "Advanced operational transformation enables seamless multi-user editing without conflicts.",
      stats: "Sub-100ms sync globally"
    },
    {
      icon: "Brain",
      title: "AI-Powered Tools",
      description: "Machine learning algorithms provide intelligent suggestions and automated enhancements.",
      stats: "95% accuracy rate"
    },
    {
      icon: "Shield",
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC 2 compliance protect your creative assets and data.",
      stats: "Zero security incidents"
    }
  ];

  const innovations = [
    {
      year: "2021",
      title: "Platform Launch",
      description: "Launched with breakthrough WebGL rendering engine"
    },
    {
      year: "2022",
      title: "Real-time Collaboration",
      description: "First browser-based creative tool with live multi-user editing"
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Introduced intelligent creative assistance and automation"
    },
    {
      year: "2024",
      title: "Mobile Optimization",
      description: "Full-featured mobile editing with touch-optimized interface"
    },
    {
      year: "2025",
      title: "3D & AR Tools",
      description: "Expanding into 3D modeling and augmented reality creation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Technology That Powers Creativity
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We've achieved breakthrough innovations in browser-based creative tools, 
            delivering professional-grade performance that was previously impossible on the web.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies?.map((tech, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-creative-sm hover:shadow-creative transition-creative group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-warning/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-creative">
                  <Icon name={tech?.icon} size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-3">{tech?.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{tech?.description}</p>
                  <div className="inline-flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm font-medium text-accent">{tech?.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Timeline */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-creative-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Innovation Timeline</h3>
            <p className="text-text-secondary">Our journey of technological breakthroughs</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-warning to-success"></div>

            <div className="space-y-8">
              {innovations?.map((innovation, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-accent to-warning rounded-full flex items-center justify-center shadow-creative flex-shrink-0">
                    <span className="text-sm font-bold text-white">{innovation?.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-muted/30 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">{innovation?.title}</h4>
                    <p className="text-text-secondary">{innovation?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Icon name="Gauge" size={20} color="white" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Performance</h4>
            <p className="text-text-secondary text-sm mb-4">
              Optimized for speed with WebAssembly acceleration and intelligent caching.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Load Time</span>
                <span className="font-medium text-primary">&lt; 2s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Render Speed</span>
                <span className="font-medium text-primary">60 FPS</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-xl p-6">
            <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mb-4">
              <Icon name="Shield" size={20} color="white" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Security</h4>
            <p className="text-text-secondary text-sm mb-4">
              Enterprise-grade security with end-to-end encryption and compliance.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Encryption</span>
                <span className="font-medium text-primary">AES-256</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Compliance</span>
                <span className="font-medium text-primary">SOC 2</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-6">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
              <Icon name="Globe" size={20} color="white" />
            </div>
            <h4 className="text-lg font-semibold text-primary mb-2">Scalability</h4>
            <p className="text-text-secondary text-sm mb-4">
              Global CDN and auto-scaling infrastructure for worldwide availability.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Uptime</span>
                <span className="font-medium text-primary">99.9%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Regions</span>
                <span className="font-medium text-primary">15+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;