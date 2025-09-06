import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const leadership = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former Adobe Creative Director with 15 years in creative software. Led teams that shipped Photoshop CC and Illustrator's web features.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      linkedin: "sarah-chen-pixelforge",
      twitter: "sarahchen_pf"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      bio: "WebGL pioneer and former Google Chrome engineer. Built the rendering engine that powers PixelForge\'s real-time collaboration.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "marcus-rodriguez-tech",
      twitter: "marcusdev"
    },
    {
      name: "Elena Kowalski",
      role: "Head of Design",
      bio: "Award-winning UX designer from Figma. Passionate about making complex creative tools intuitive and accessible to everyone.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "elena-kowalski-design",
      twitter: "elenadesigns"
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      bio: "Full-stack architect who scaled creative platforms at Canva. Expert in real-time systems and browser performance optimization.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "david-park-eng",
      twitter: "davidpark_dev"
    }
  ];

  const departments = [
    {
      name: "Engineering",
      count: 45,
      icon: "Code",
      color: "accent"
    },
    {
      name: "Design",
      count: 18,
      icon: "Palette",
      color: "warning"
    },
    {
      name: "Product",
      count: 12,
      icon: "Lightbulb",
      color: "success"
    },
    {
      name: "Marketing",
      count: 8,
      icon: "Megaphone",
      color: "error"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We're a diverse group of creators, engineers, and dreamers united by our passion 
            for democratizing creativity. Our team brings together expertise from the world's 
            leading creative and technology companies.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership?.map((member, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-creative-sm hover:shadow-creative transition-creative group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-creative">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-creative">
                    <Icon name="Verified" size={14} color="white" />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-primary mb-1">{member?.name}</h4>
                  <p className="text-sm text-accent font-medium mb-3">{member?.role}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{member?.bio}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-creative">
                    <Icon name="Linkedin" size={14} />
                  </button>
                  <button className="w-8 h-8 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-creative">
                    <Icon name="Twitter" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-muted/50 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Our Global Team</h3>
            <p className="text-text-secondary">Talented individuals from around the world</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {departments?.map((dept, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 bg-${dept?.color}/20 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon name={dept?.icon} size={20} className={`text-${dept?.color}`} />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{dept?.count}</div>
                <div className="text-sm text-text-secondary">{dept?.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-card px-6 py-3 rounded-lg shadow-creative-sm">
              <Icon name="MapPin" size={16} className="text-accent" />
              <span className="text-sm font-medium text-primary">Remote-first • 25+ Countries • 6 Continents</span>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-creative-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-warning rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-creative">
              <Icon name="Users" size={28} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Join Our Mission</h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to shape the future of creativity. 
              Join us in building tools that empower millions of creators worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-creative shadow-creative-sm">
                <Icon name="Briefcase" size={18} />
                <span>View Open Positions</span>
              </button>
              <button className="flex items-center justify-center space-x-2 border border-border hover:bg-muted text-primary px-6 py-3 rounded-lg font-medium transition-creative">
                <Icon name="Coffee" size={18} />
                <span>Culture & Benefits</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;