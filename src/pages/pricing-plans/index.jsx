import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import PricingCard from './components/PricingCard';
import FeatureComparison from './components/FeatureComparison';
import ROICalculator from './components/ROICalculator';
import TestimonialCard from './components/TestimonialCard';
import FAQ from './components/FAQ';
import UsageBasedPricing from './components/UsageBasedPricing';

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [currentPlan, setCurrentPlan] = useState(null);

  const pricingPlans = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for exploring creative possibilities',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Basic photo editing tools',
        'Image design studio access',
        'HD export quality',
        '1GB cloud storage',
        '5 AI background removals/month',
        'Community support',
        '7-day project history',
        'Web-based access'
      ],
      limitations: [
        'Watermark on exports',
        'Limited to 10 projects',
        'No collaboration features',
        'Standard processing speed'
      ],
      cta: 'Start Free',
      color: 'success'
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For serious creators and professionals',
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        'All Free features',
        'Advanced editing tools',
        '4K export quality',
        '100GB cloud storage',
        'Unlimited AI features',
        'Real-time collaboration (2 users)',
        'Priority email support',
        '90-day project history',
        'Premium templates & assets',
        'Advanced color grading',
        'RAW file support',
        'Custom export presets'
      ],
      cta: 'Start Pro Trial',
      badge: 'Most Popular',
      color: 'accent'
    },
    {
      id: 'team',
      name: 'Team',
      description: 'Built for creative teams and agencies',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'All Pro features',
        'Unlimited team collaboration',
        '1TB shared storage',
        'Team workspace management',
        'Brand asset library',
        'Advanced version control',
        'Admin controls & permissions',
        'Priority support (4hr response)',
        'Team analytics & insights',
        'Custom branding options',
        'Bulk export tools',
        'Integration APIs'
      ],
      cta: 'Start Team Trial',
      color: 'warning'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      features: [
        'All Team features',
        'Unlimited storage',
        '8K export quality',
        'Dedicated account manager',
        'Custom integrations',
        'SSO & advanced security',
        'Phone support',
        'Custom training sessions',
        'SLA guarantees',
        'White-label options',
        'Advanced analytics',
        'Custom workflow automation'
      ],
      cta: 'Contact Sales',
      badge: 'Custom',
      color: 'primary'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      company: 'Bloom Digital Agency',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      content: `PixelForge Studio transformed our workflow completely. We went from spending hours on software installations and updates to having our entire team collaborating in real-time within minutes. The cloud-based approach eliminated our hardware bottlenecks.`,
      metrics: [
        { value: '60%', label: 'Faster Delivery' },
        { value: '$15K', label: 'Annual Savings' }
      ],
      plan: 'Team',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Freelance Photographer',
      company: 'Rodriguez Studios',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      content: `As a freelancer, I needed professional tools without the massive upfront costs. PixelForge Pro gives me everything I need - RAW processing, advanced color grading, and client collaboration - all for less than what I used to spend on software licenses alone.`,
      metrics: [
        { value: '40%', label: 'Cost Reduction' },
        { value: '25%', label: 'More Projects' }
      ],
      plan: 'Pro',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Social Media Manager',
      company: 'TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      content: `The AI features are incredible. Background removal, smart cropping, and style transfers that used to take me hours now happen in seconds. I can focus on creative strategy instead of technical execution.`,
      metrics: [
        { value: '80%', label: 'Time Saved' },
        { value: '3x', label: 'Content Output' }
      ],
      plan: 'Pro',
      rating: 5
    }
  ];

  const handlePlanSelection = (plan) => {
    if (plan?.id === 'enterprise') {
      // Handle enterprise contact
      console.log('Contact enterprise sales');
    } else {
      // Handle plan selection
      setCurrentPlan(plan?.id);
      console.log('Selected plan:', plan?.name);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Professional creativity,{' '}
              <span className="text-accent">unleashed</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Choose the perfect plan for your creative journey. From individual creators to enterprise teams, 
              we have flexible pricing that scales with your ambitions.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm font-medium ${
                billingCycle === 'monthly' ? 'text-foreground' : 'text-text-secondary'
              }`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-accent' : 'bg-muted'
                }`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`} />
              </button>
              <span className={`text-sm font-medium ${
                billingCycle === 'yearly' ? 'text-foreground' : 'text-text-secondary'
              }`}>
                Yearly
              </span>
              <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                Save up to 20%
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Cards */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {pricingPlans?.map((plan, index) => (
              <PricingCard
                key={plan?.id}
                plan={plan}
                isPopular={plan?.badge === 'Most Popular'}
                isCurrentPlan={currentPlan === plan?.id}
                onSelectPlan={handlePlanSelection}
                billingCycle={billingCycle}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Feature Comparison */}
      <section className="py-16 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See exactly what's included in each plan and find the perfect fit for your creative needs
            </p>
          </div>
          
          <FeatureComparison plans={pricingPlans} />
        </div>
      </section>
      {/* Usage-Based Pricing */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <UsageBasedPricing />
        </div>
      </section>
      {/* ROI Calculator */}
      <section className="py-16 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Calculate Your Savings
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See how much you can save by switching from traditional desktop software to our cloud-based solution
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Creators Worldwide
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See how professionals are transforming their workflows and achieving better results with PixelForge Studio
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-16 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <FAQ />
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-3xl p-12 border border-accent/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Creative Workflow?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have already made the switch to professional browser-based editing. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                size="lg"
                iconName="Sparkles"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-success" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">PixelForge</h3>
                  <p className="text-sm text-text-secondary -mt-1">Studio</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4 max-w-md">
                Professional creativity unleashed through browser-native tools. 
                Create, collaborate, and deliver exceptional visual content from anywhere.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">SOC 2 Compliant</span>
                <Icon name="Lock" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">GDPR Ready</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="/studio-workspace" className="hover:text-card-foreground transition-colors">Studio</a></li>
                <li><a href="/learning-academy" className="hover:text-card-foreground transition-colors">Academy</a></li>
                <li><a href="/asset-marketplace" className="hover:text-card-foreground transition-colors">Marketplace</a></li>
                <li><a href="/pricing-plans" className="hover:text-card-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-card-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-card-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-card-foreground transition-colors">System Status</a></li>
                <li><a href="/about-pixel-forge" className="hover:text-card-foreground transition-colors">About</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-text-secondary">
              © {new Date()?.getFullYear()} PixelForge Studio. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-text-secondary hover:text-card-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-card-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-card-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPlans;