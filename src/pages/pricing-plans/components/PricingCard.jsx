import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingCard = ({ 
  plan, 
  isPopular = false, 
  isCurrentPlan = false, 
  onSelectPlan,
  billingCycle = 'monthly'
}) => {
  const {
    id,
    name,
    description,
    monthlyPrice,
    yearlyPrice,
    features,
    limitations,
    cta,
    badge,
    color = 'accent'
  } = plan;

  const currentPrice = billingCycle === 'yearly' ? yearlyPrice : monthlyPrice;
  const savings = billingCycle === 'yearly' && monthlyPrice > 0 
    ? Math.round(((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12)) * 100)
    : 0;

  const getColorClasses = (color) => {
    const colorMap = {
      accent: 'border-accent bg-accent/5 text-accent',
      success: 'border-success bg-success/5 text-success',
      warning: 'border-warning bg-warning/5 text-warning',
      primary: 'border-primary bg-primary/5 text-primary'
    };
    return colorMap?.[color] || colorMap?.accent;
  };

  return (
    <div className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 hover:shadow-creative-lg ${
      isPopular ? 'border-accent shadow-creative scale-105' : 'border-border hover:border-accent/50'
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-creative">
            Most Popular
          </div>
        </div>
      )}
      {/* Custom Badge */}
      {badge && !isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className={`px-6 py-2 rounded-full text-sm font-semibold shadow-creative ${getColorClasses(color)}`}>
            {badge}
          </div>
        </div>
      )}
      {/* Plan Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-card-foreground mb-2">{name}</h3>
        <p className="text-text-secondary text-sm mb-6">{description}</p>
        
        {/* Pricing */}
        <div className="mb-4">
          {currentPrice === 0 ? (
            <div className="text-4xl font-bold text-card-foreground">Free</div>
          ) : (
            <div className="flex items-baseline justify-center space-x-1">
              <span className="text-4xl font-bold text-card-foreground">${currentPrice}</span>
              <span className="text-text-secondary">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
            </div>
          )}
          
          {savings > 0 && (
            <div className="text-success text-sm font-medium mt-2">
              Save {savings}% with annual billing
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Button
          variant={isPopular ? 'default' : 'outline'}
          size="lg"
          fullWidth
          onClick={() => onSelectPlan(plan)}
          disabled={isCurrentPlan}
          className={isPopular ? 'bg-accent hover:bg-accent/90' : ''}
        >
          {isCurrentPlan ? 'Current Plan' : cta}
        </Button>
      </div>
      {/* Features */}
      <div className="space-y-4">
        <h4 className="font-semibold text-card-foreground text-sm uppercase tracking-wide">
          What's Included
        </h4>
        
        <ul className="space-y-3">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Icon 
                name="Check" 
                size={16} 
                className="text-success mt-0.5 flex-shrink-0" 
              />
              <span className="text-sm text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Limitations */}
        {limitations && limitations?.length > 0 && (
          <ul className="space-y-3 pt-4 border-t border-border">
            {limitations?.map((limitation, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon 
                  name="X" 
                  size={16} 
                  className="text-text-secondary mt-0.5 flex-shrink-0" 
                />
                <span className="text-sm text-text-secondary">{limitation}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PricingCard;