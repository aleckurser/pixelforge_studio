import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FeatureComparison = ({ plans }) => {
  const [activeCategory, setActiveCategory] = useState('core');

  const featureCategories = {
    core: {
      name: 'Core Features',
      icon: 'Zap',
      features: [
        { name: 'Photo Editing Tools', free: true, pro: true, team: true, enterprise: true },
        { name: 'Image Design Studio', free: true, pro: true, team: true, enterprise: true },
        { name: 'Video Workshop', free: 'Basic', pro: true, team: true, enterprise: true },
        { name: 'Cloud Storage', free: '1GB', pro: '100GB', team: '1TB', enterprise: 'Unlimited' },
        { name: 'Export Quality', free: 'HD', pro: '4K', team: '4K', enterprise: '8K' },
        { name: 'Project History', free: '7 days', pro: '90 days', team: 'Unlimited', enterprise: 'Unlimited' }
      ]
    },
    ai: {
      name: 'AI Features',
      icon: 'Brain',
      features: [
        { name: 'AI Background Removal', free: '5/month', pro: 'Unlimited', team: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'Smart Object Selection', free: false, pro: true, team: true, enterprise: true },
        { name: 'Style Transfer', free: false, pro: true, team: true, enterprise: true },
        { name: 'Auto Color Correction', free: false, pro: true, team: true, enterprise: true },
        { name: 'Content-Aware Fill', free: false, pro: true, team: true, enterprise: true },
        { name: 'AI Upscaling', free: false, pro: '4x', team: '8x', enterprise: '16x' }
      ]
    },
    collaboration: {
      name: 'Collaboration',
      icon: 'Users',
      features: [
        { name: 'Real-time Collaboration', free: false, pro: '2 users', team: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'Comment & Review', free: false, pro: true, team: true, enterprise: true },
        { name: 'Version Control', free: false, pro: 'Basic', team: 'Advanced', enterprise: 'Enterprise' },
        { name: 'Team Workspaces', free: false, pro: false, team: true, enterprise: true },
        { name: 'Brand Asset Library', free: false, pro: false, team: true, enterprise: true },
        { name: 'Admin Controls', free: false, pro: false, team: 'Basic', enterprise: 'Advanced' }
      ]
    },
    support: {
      name: 'Support & Services',
      icon: 'Headphones',
      features: [
        { name: 'Community Support', free: true, pro: true, team: true, enterprise: true },
        { name: 'Email Support', free: false, pro: true, team: true, enterprise: true },
        { name: 'Priority Support', free: false, pro: false, team: true, enterprise: true },
        { name: 'Phone Support', free: false, pro: false, team: false, enterprise: true },
        { name: 'Dedicated Account Manager', free: false, pro: false, team: false, enterprise: true },
        { name: 'Custom Training', free: false, pro: false, team: false, enterprise: true }
      ]
    }
  };

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <Icon name="Check" size={18} className="text-success" />;
    }
    if (value === false) {
      return <Icon name="X" size={18} className="text-text-secondary" />;
    }
    return <span className="text-sm font-medium text-card-foreground">{value}</span>;
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Category Tabs */}
      <div className="border-b border-border bg-muted/30">
        <div className="flex overflow-x-auto">
          {Object.entries(featureCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === key
                  ? 'text-accent border-b-2 border-accent bg-background' :'text-text-secondary hover:text-card-foreground'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/20">
              <th className="text-left p-6 font-semibold text-card-foreground">Features</th>
              <th className="text-center p-6 font-semibold text-card-foreground min-w-[120px]">Free</th>
              <th className="text-center p-6 font-semibold text-card-foreground min-w-[120px]">Pro</th>
              <th className="text-center p-6 font-semibold text-card-foreground min-w-[120px]">Team</th>
              <th className="text-center p-6 font-semibold text-card-foreground min-w-[120px]">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {featureCategories?.[activeCategory]?.features?.map((feature, index) => (
              <tr key={index} className="border-b border-border last:border-b-0 hover:bg-muted/10">
                <td className="p-6 font-medium text-card-foreground">{feature?.name}</td>
                <td className="p-6 text-center">{renderFeatureValue(feature?.free)}</td>
                <td className="p-6 text-center">{renderFeatureValue(feature?.pro)}</td>
                <td className="p-6 text-center">{renderFeatureValue(feature?.team)}</td>
                <td className="p-6 text-center">{renderFeatureValue(feature?.enterprise)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureComparison;