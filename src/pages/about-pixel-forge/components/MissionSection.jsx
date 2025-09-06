import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: "Heart",
      title: "Creative Empowerment",
      description: "We believe every person has a unique creative voice that deserves to be heard and seen."
    },
    {
      icon: "Zap",
      title: "Technical Excellence",
      description: "Pushing the boundaries of what\'s possible in browser-based creative tools through innovation."
    },
    {
      icon: "Users",
      title: "Community Building",
      description: "Fostering a global community where creators inspire, learn from, and collaborate with each other."
    },
    {
      icon: "Globe",
      title: "Accessibility First",
      description: "Making professional-grade creative tools accessible to everyone, regardless of background or budget."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Our Mission & Values
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We're on a mission to democratize creativity by building the most powerful, 
            accessible, and collaborative creative platform ever imagined. Our values guide 
            every decision we make and every feature we build.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-accent/10 to-warning/10 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-warning rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-creative">
              <Icon name="Target" size={28} color="white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Eliminating Creative Barriers
            </h3>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
              "We envision a world where the gap between creative imagination and professional execution 
              disappears entirely. Where a student in rural India has the same creative tools as a designer 
              in Silicon Valley. Where collaboration happens seamlessly across continents, and where 
              learning never stops."
            </p>
            <div className="mt-6 text-sm text-text-secondary">
              — Sarah Chen, CEO & Co-founder
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values?.map((value, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-creative-sm hover:shadow-creative transition-creative group">
              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-warning/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-creative">
                <Icon name={value?.icon} size={20} className="text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                {value?.title}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {value?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12 shadow-creative-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Our Impact</h3>
            <p className="text-text-secondary">Real numbers from our global creative community</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-text-secondary">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">24/7</div>
              <div className="text-sm text-text-secondary">Global Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">500K+</div>
              <div className="text-sm text-text-secondary">Hours Saved Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-error mb-2">Zero</div>
              <div className="text-sm text-text-secondary">Creative Limits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;