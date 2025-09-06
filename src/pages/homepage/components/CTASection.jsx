import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const features = [
    'Full access to all three studios',
    'AI-powered creative assistant',
    'Real-time collaboration tools',
    'Unlimited cloud storage',
    'Professional export options',
    '24/7 expert support'
  ];

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: ['Basic editing tools', '5 projects', '1GB storage', 'Community support'],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'For professional creators',
      features: ['All studio tools', 'Unlimited projects', '100GB storage', 'Priority support', 'AI assistant', 'Collaboration'],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Team',
      price: '$49',
      period: 'per month',
      description: 'For creative teams',
      features: ['Everything in Pro', 'Team management', '1TB shared storage', 'Advanced collaboration', 'Brand assets', 'Analytics'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Ready to Create?</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Start creating{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
              today
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Join millions of creators who trust PixelForge Studio for their professional 
            creative work. No downloads, no installations—just pure creative power in your browser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="default"
              size="xl"
              onClick={() => handleNavigation('/studio-workspace')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-creative text-lg px-8 py-4"
              iconName="Zap"
              iconPosition="left"
            >
              Start Creating Free
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              onClick={() => handleNavigation('/pricing-plans')}
              className="text-primary border-border hover:bg-muted text-lg px-8 py-4"
              iconName="CreditCard"
              iconPosition="left"
            >
              View Pricing
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Choose Your Plan</h3>
            <p className="text-text-secondary">Start free, upgrade when you're ready</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 shadow-creative border transition-all duration-300 hover:shadow-creative-lg ${
                  plan?.popular 
                    ? 'border-accent ring-2 ring-accent/20 scale-105' :'border-border hover:border-accent/50'
                }`}
              >
                {plan?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-primary mb-2">{plan?.name}</h4>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">{plan?.price}</span>
                    <span className="text-text-secondary">/{plan?.period}</span>
                  </div>
                  <p className="text-text-secondary text-sm">{plan?.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan?.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan?.popular ? "default" : "outline"}
                  fullWidth
                  onClick={() => handleNavigation(plan?.name === 'Team' ? '/pricing-plans' : '/studio-workspace')}
                  className={plan?.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
                >
                  {plan?.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="bg-card rounded-2xl p-8 shadow-creative border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Trusted by Industry Leaders</h3>
            <p className="text-text-secondary">Join the creative revolution</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Shield" size={28} className="text-blue-500" />
              </div>
              <h4 className="font-semibold text-primary">Enterprise Security</h4>
              <p className="text-sm text-text-secondary">SOC 2 compliant with end-to-end encryption</p>
            </div>

            <div className="space-y-2">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Clock" size={28} className="text-green-500" />
              </div>
              <h4 className="font-semibold text-primary">99.9% Uptime</h4>
              <p className="text-sm text-text-secondary">Reliable platform you can count on</p>
            </div>

            <div className="space-y-2">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Users" size={28} className="text-purple-500" />
              </div>
              <h4 className="font-semibold text-primary">2M+ Creators</h4>
              <p className="text-sm text-text-secondary">Join our thriving creative community</p>
            </div>

            <div className="space-y-2">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Headphones" size={28} className="text-orange-500" />
              </div>
              <h4 className="font-semibold text-primary">24/7 Support</h4>
              <p className="text-sm text-text-secondary">Expert help whenever you need it</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Check" size={14} className="text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Check" size={14} className="text-success" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Check" size={14} className="text-success" />
                <span>30-day money back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;