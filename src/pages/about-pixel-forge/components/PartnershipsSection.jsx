import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipsSection = () => {
  const partners = [
    {
      name: "Adobe Creative Cloud",
      type: "Technology Partner",
      description: "Seamless integration with Creative Cloud workflows and asset libraries.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
      icon: "Layers"
    },
    {
      name: "Google Cloud",
      type: "Infrastructure Partner",
      description: "Powering our global infrastructure with enterprise-grade cloud services.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
      icon: "Cloud"
    },
    {
      name: "Figma",
      type: "Design Partner",
      description: "Direct import/export capabilities for seamless design-to-production workflows.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
      icon: "Figma"
    },
    {
      name: "Unsplash",
      type: "Content Partner",
      description: "Integrated access to millions of high-quality stock photos and assets.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
      icon: "Image"
    }
  ];

  const educationPartners = [
    {
      name: "Art Institute of Chicago",
      program: "Creative Technology Curriculum",
      students: "2,500+ students",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=300&h=200&fit=crop"
    },
    {
      name: "Parsons School of Design",
      program: "Digital Design Specialization",
      students: "1,800+ students",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop"
    },
    {
      name: "Royal College of Art",
      program: "Innovation in Creative Tools",
      students: "1,200+ students",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop"
    }
  ];

  const initiatives = [
    {
      title: "Creative Education Initiative",
      description: "Free access to PixelForge Studio for educational institutions worldwide, reaching over 100,000 students.",
      icon: "GraduationCap",
      impact: "100K+ students"
    },
    {
      title: "Sustainability Commitment",
      description: "Carbon-neutral hosting and green energy partnerships to minimize our environmental impact.",
      icon: "Leaf",
      impact: "100% renewable energy"
    },
    {
      title: "Accessibility Program",
      description: "Making creative tools accessible to users with disabilities through inclusive design and assistive technology.",
      icon: "Heart",
      impact: "WCAG 2.1 AA compliant"
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to open-source projects that advance web-based creative technologies for everyone.",
      icon: "Code",
      impact: "50+ projects supported"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Partnerships & Ecosystem
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We collaborate with industry leaders, educational institutions, and technology partners 
            to create a thriving ecosystem that benefits creators worldwide.
          </p>
        </div>

        {/* Technology Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Technology Partners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners?.map((partner, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-creative-sm hover:shadow-creative transition-creative group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-10 bg-gray-100 rounded flex items-center justify-center">
                    <Image
                      src={partner?.logo}
                      alt={partner?.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary mb-1">{partner?.name}</h4>
                  <p className="text-sm text-accent mb-3">{partner?.type}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{partner?.description}</p>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-creative">
                    <Icon name={partner?.icon} size={16} className="text-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Education Partners</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {educationPartners?.map((partner, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-creative-sm hover:shadow-creative transition-creative group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={partner?.image}
                    alt={partner?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-creative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="GraduationCap" size={16} className="text-accent" />
                        <span className="text-sm font-medium text-gray-900">{partner?.students}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-primary mb-2">{partner?.name}</h4>
                  <p className="text-sm text-accent mb-3">{partner?.program}</p>
                  <button className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-creative">
                    <span className="text-sm font-medium">Learn More</span>
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div className="bg-gradient-to-r from-muted/50 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Initiatives</h3>
            <p className="text-text-secondary">Committed to making a positive impact on the creative community and beyond</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives?.map((initiative, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-creative-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-warning/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={initiative?.icon} size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-2">{initiative?.title}</h4>
                    <p className="text-text-secondary text-sm mb-3 leading-relaxed">{initiative?.description}</p>
                    <div className="inline-flex items-center space-x-2 bg-success/10 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm font-medium text-success">{initiative?.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-creative-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-warning rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-creative">
              <Icon name="Handshake" size={28} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Partner With Us</h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Join our ecosystem of partners and help us democratize creativity worldwide. 
              Whether you're an educational institution, technology company, or creative organization, 
              let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-creative shadow-creative-sm">
                <Icon name="Mail" size={18} />
                <span>Partnership Inquiries</span>
              </button>
              <button className="flex items-center justify-center space-x-2 border border-border hover:bg-muted text-primary px-6 py-3 rounded-lg font-medium transition-creative">
                <Icon name="FileText" size={18} />
                <span>Partnership Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;