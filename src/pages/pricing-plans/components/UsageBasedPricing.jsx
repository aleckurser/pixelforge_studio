import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const UsageBasedPricing = () => {
  const [selectedUsage, setSelectedUsage] = useState('medium');

  const usageTiers = [
    {
      id: 'light',
      name: 'Light Usage',
      description: 'Perfect for occasional creators',
      basePrice: 15,
      included: {
        projects: 50,
        exports: 200,
        storage: '50GB',
        aiCredits: 100
      },
      overages: {
        projects: 0.30,
        exports: 0.15,
        storage: 0.10,
        aiCredits: 0.05
      },
      color: 'success'
    },
    {
      id: 'medium',
      name: 'Medium Usage',
      description: 'Great for regular content creators',
      basePrice: 35,
      included: {
        projects: 200,
        exports: 1000,
        storage: '200GB',
        aiCredits: 500
      },
      overages: {
        projects: 0.25,
        exports: 0.12,
        storage: 0.08,
        aiCredits: 0.04
      },
      color: 'accent',
      popular: true
    },
    {
      id: 'heavy',
      name: 'Heavy Usage',
      description: 'For high-volume professionals',
      basePrice: 75,
      included: {
        projects: 500,
        exports: 3000,
        storage: '500GB',
        aiCredits: 1500
      },
      overages: {
        projects: 0.20,
        exports: 0.10,
        storage: 0.06,
        aiCredits: 0.03
      },
      color: 'warning'
    }
  ];

  const getColorClasses = (color, isSelected = false) => {
    const colorMap = {
      success: isSelected 
        ? 'border-success bg-success/10 text-success' :'border-success/30 hover:border-success/60',
      accent: isSelected 
        ? 'border-accent bg-accent/10 text-accent' :'border-accent/30 hover:border-accent/60',
      warning: isSelected 
        ? 'border-warning bg-warning/10 text-warning' :'border-warning/30 hover:border-warning/60'
    };
    return colorMap?.[color] || colorMap?.accent;
  };

  const selectedTier = usageTiers?.find(tier => tier?.id === selectedUsage);

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Icon name="Activity" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-card-foreground mb-2">Usage-Based Pricing</h3>
        <p className="text-text-secondary">
          Pay for what you use with flexible pricing that scales with your needs
        </p>
      </div>
      {/* Usage Tier Selection */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {usageTiers?.map((tier) => (
          <button
            key={tier?.id}
            onClick={() => setSelectedUsage(tier?.id)}
            className={`relative p-6 rounded-xl border-2 transition-all duration-200 text-left ${
              getColorClasses(tier?.color, selectedUsage === tier?.id)
            }`}
          >
            {tier?.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="text-lg font-bold text-card-foreground mb-1">{tier?.name}</div>
            <div className="text-sm text-text-secondary mb-4">{tier?.description}</div>
            <div className="text-2xl font-bold text-card-foreground">
              ${tier?.basePrice}<span className="text-sm font-normal">/month</span>
            </div>
          </button>
        ))}
      </div>
      {/* Selected Tier Details */}
      {selectedTier && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What's Included */}
            <div className="bg-muted/20 rounded-xl p-6">
              <h4 className="font-semibold text-card-foreground mb-4 flex items-center">
                <Icon name="Package" size={20} className="mr-2 text-accent" />
                Monthly Allowances
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Projects</span>
                  <span className="font-semibold text-card-foreground">
                    {selectedTier?.included?.projects}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">HD/4K Exports</span>
                  <span className="font-semibold text-card-foreground">
                    {selectedTier?.included?.exports}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Cloud Storage</span>
                  <span className="font-semibold text-card-foreground">
                    {selectedTier?.included?.storage}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">AI Credits</span>
                  <span className="font-semibold text-card-foreground">
                    {selectedTier?.included?.aiCredits}
                  </span>
                </div>
              </div>
            </div>

            {/* Overage Pricing */}
            <div className="bg-muted/20 rounded-xl p-6">
              <h4 className="font-semibold text-card-foreground mb-4 flex items-center">
                <Icon name="TrendingUp" size={20} className="mr-2 text-warning" />
                Overage Rates
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Extra Projects</span>
                  <span className="font-semibold text-card-foreground">
                    ${selectedTier?.overages?.projects}/each
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Extra Exports</span>
                  <span className="font-semibold text-card-foreground">
                    ${selectedTier?.overages?.exports}/each
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Extra Storage</span>
                  <span className="font-semibold text-card-foreground">
                    ${selectedTier?.overages?.storage}/GB
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Extra AI Credits</span>
                  <span className="font-semibold text-card-foreground">
                    ${selectedTier?.overages?.aiCredits}/credit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Example Usage */}
          <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
            <h4 className="font-semibold text-accent mb-4 flex items-center">
              <Icon name="Calculator" size={20} className="mr-2" />
              Example Monthly Bill
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-text-secondary mb-2">Base Plan</div>
                <div className="text-xl font-bold text-card-foreground mb-4">
                  ${selectedTier?.basePrice}.00
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Projects used:</span>
                    <span className="text-card-foreground">{selectedTier?.included?.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Exports used:</span>
                    <span className="text-card-foreground">{selectedTier?.included?.exports}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-text-secondary mb-2">Overages</div>
                <div className="text-xl font-bold text-card-foreground mb-4">
                  $8.50
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">+50 projects:</span>
                    <span className="text-card-foreground">$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">+100 exports:</span>
                    <span className="text-card-foreground">$12.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">+10GB storage:</span>
                    <span className="text-card-foreground">$1.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-accent/20 mt-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-card-foreground">Total Monthly Bill</span>
                <span className="text-2xl font-bold text-accent">
                  ${selectedTier?.basePrice + 28}.50
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              iconName="CreditCard"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90"
            >
              Start {selectedTier?.name} Plan
            </Button>
            <p className="text-sm text-text-secondary mt-2">
              No setup fees • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsageBasedPricing;