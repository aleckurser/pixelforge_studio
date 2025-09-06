import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Martinez',
      role: 'Creative Director',
      company: 'Pixel Studios',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150',
      content: `PixelForge Studio has completely transformed our creative workflow. The real-time collaboration features allow our global team to work together seamlessly, and the AI-powered tools have cut our editing time in half. It's like having a professional studio in the browser.`,rating: 5,project: 'Brand Campaign for Fortune 500',
      tools: ['Photo Editor', 'AI Assistant', 'Collaboration'],
      results: '50% faster delivery, 3x more iterations'
    },
    {
      id: 2,
      name: 'Marcus Chen',role: 'Freelance Designer',company: 'Independent',avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',content: `As a freelancer, I needed professional tools without the professional price tag. PixelForge Studio gives me everything I had in expensive desktop software, plus the flexibility to work from anywhere. My clients love the collaborative review process.`,rating: 5,project: 'E-commerce Product Photography',
      tools: ['Photo Editor', 'Background Removal', 'Color Grading'],
      results: '200% increase in client satisfaction'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',role: 'Motion Graphics Artist',company: 'Creative Agency',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
      content: `The Video Workshop is incredible. I can create complex motion graphics right in the browser with performance that rivals desktop applications. The learning academy helped me master advanced techniques I never thought possible online.`,
      rating: 5,
      project: 'Social Media Campaign',
      tools: ['Video Workshop', 'Motion Graphics', 'Learning Academy'],
      results: 'Mastered 5 new techniques in 2 weeks'
    },
    {
      id: 4,
      name: 'David Kim',role: 'Art Director',company: 'Tech Startup',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',content: `We switched our entire design team to PixelForge Studio and haven't looked back. The collaborative features, version control, and asset management have streamlined our entire creative process. Plus, the WebGL performance is outstanding.`,
      rating: 5,
      project: 'Product Launch Campaign',
      tools: ['Full Studio Suite', 'Team Collaboration', 'Asset Management'],
      results: 'Reduced project timeline by 40%'
    }
  ];

  const industryRecognition = [
    {
      award: 'Best Creative Tool 2024',
      organization: 'Design Awards',
      logo: 'Award'
    },
    {
      award: 'Innovation in Web Technology',
      organization: 'Tech Excellence',
      logo: 'Zap'
    },
    {
      award: 'Editor\'s Choice',
      organization: 'Creative Magazine',
      logo: 'Star'
    },
    {
      award: 'Top Collaboration Platform',
      organization: 'Workflow Awards',
      logo: 'Users'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} />
            <span>What Creators Say</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
              professionals
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of creative professionals who have transformed their 
            workflows with PixelForge Studio's innovative platform.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-creative-lg border border-border">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-2 text-warning">
                  {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-primary leading-relaxed">
                  "{testimonials?.[currentTestimonial]?.content}"
                </blockquote>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials?.[currentTestimonial]?.avatar}
                      alt={testimonials?.[currentTestimonial]?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-primary">
                        {testimonials?.[currentTestimonial]?.name}
                      </h4>
                      <p className="text-text-secondary">
                        {testimonials?.[currentTestimonial]?.role} at {testimonials?.[currentTestimonial]?.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="bg-muted rounded-xl p-4 space-y-3">
                    <div>
                      <span className="text-sm font-medium text-primary">Project: </span>
                      <span className="text-sm text-text-secondary">{testimonials?.[currentTestimonial]?.project}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Tools Used: </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {testimonials?.[currentTestimonial]?.tools?.map((tool, index) => (
                          <span key={index} className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Results: </span>
                      <span className="text-sm text-success">{testimonials?.[currentTestimonial]?.results}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="space-y-4">
                {testimonials?.map((testimonial, index) => (
                  <button
                    key={testimonial?.id}
                    onClick={() => handleTestimonialChange(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      currentTestimonial === index
                        ? 'bg-accent text-accent-foreground shadow-creative'
                        : 'bg-muted hover:bg-muted/80 text-text-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial?.avatar}
                        alt={testimonial?.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium truncate">{testimonial?.name}</h5>
                        <p className="text-sm opacity-80 truncate">{testimonial?.role}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Industry Recognition</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryRecognition?.map((recognition, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-creative border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={recognition?.logo} size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{recognition?.award}</h4>
                <p className="text-sm text-text-secondary">{recognition?.organization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-creative border border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-text-secondary">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-text-secondary">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-text-secondary">Professional Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-text-secondary">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;