import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecognitionSection = () => {
  const awards = [
    {
      title: "Best Creative Software 2024",
      organization: "Creative Bloq Awards",
      year: "2024",
      icon: "Award",
      color: "warning"
    },
    {
      title: "Innovation in Web Technology",
      organization: "WebGL Awards",
      year: "2023",
      icon: "Zap",
      color: "accent"
    },
    {
      title: "Editor\'s Choice",
      organization: "Design Tools Review",
      year: "2023",
      icon: "Star",
      color: "success"
    },
    {
      title: "Startup of the Year",
      organization: "TechCrunch Disrupt",
      year: "2022",
      icon: "Trophy",
      color: "error"
    }
  ];

  const testimonials = [
    {
      quote: "PixelForge has revolutionized how our team collaborates on creative projects. The real-time editing capabilities are game-changing.",
      author: "Jessica Martinez",
      role: "Creative Director",
      company: "Ogilvy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "As an educator, I love how PixelForge makes professional tools accessible to students worldwide. It's democratizing creativity.",
      author: "Prof. Michael Thompson",
      role: "Design Department Head",
      company: "Art Institute of Chicago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The browser-based approach eliminates so many barriers. Our global team can now work together seamlessly on complex projects.",
      author: "Aisha Patel",
      role: "Senior Designer",
      company: "Pentagram",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const press = [
    {
      publication: "TechCrunch",
      headline: "PixelForge Raises $50M to Democratize Creative Tools",
      date: "March 2024",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop"
    },
    {
      publication: "The Verge",
      headline: "The Future of Creative Software is in the Browser",
      date: "February 2024",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop"
    },
    {
      publication: "Wired",
      headline: "How PixelForge is Changing Creative Collaboration",
      date: "January 2024",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Industry Recognition
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Our commitment to innovation and excellence has been recognized by leading 
            industry publications, organizations, and creative professionals worldwide.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {awards?.map((award, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-creative-sm hover:shadow-creative transition-creative group text-center">
              <div className={`w-16 h-16 bg-${award?.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-creative`}>
                <Icon name={award?.icon} size={24} className={`text-${award?.color}`} />
              </div>
              <h3 className="font-semibold text-primary mb-2">{award?.title}</h3>
              <p className="text-sm text-text-secondary mb-1">{award?.organization}</p>
              <p className="text-xs text-accent font-medium">{award?.year}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">What Industry Leaders Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-creative-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial?.author}</div>
                    <div className="text-sm text-text-secondary">{testimonial?.role}</div>
                    <div className="text-sm text-accent">{testimonial?.company}</div>
                  </div>
                </div>
                <blockquote className="text-text-secondary italic leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>
                <div className="flex items-center mt-4">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Coverage */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-creative-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Press Coverage</h3>
            <p className="text-text-secondary">Featured in leading technology and design publications</p>
          </div>

          <div className="space-y-6">
            {press?.map((article, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-creative">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <Image
                      src={article?.logo}
                      alt={article?.publication}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{article?.headline}</h4>
                    <p className="text-sm text-text-secondary">{article?.publication} • {article?.date}</p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-creative">
                  <span className="text-sm font-medium">Read Article</span>
                  <Icon name="ExternalLink" size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-creative shadow-creative-sm mx-auto">
              <Icon name="FileText" size={18} />
              <span>View Press Kit</span>
            </button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-warning/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Community Love</h3>
            <p className="text-text-secondary">Real feedback from our global creative community</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-sm text-text-secondary">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">98%</div>
              <div className="text-sm text-text-secondary">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">50K+</div>
              <div className="text-sm text-text-secondary">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-error mb-2">24/7</div>
              <div className="text-sm text-text-secondary">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;