import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const footerSections = [
    {
      title: 'Studio',
      links: [
        { name: 'Photo Editor Suite', path: '/studio-workspace' },
        { name: 'Image Design Studio', path: '/studio-workspace' },
        { name: 'Video Workshop', path: '/studio-workspace' },
        { name: 'AI Creative Assistant', path: '/studio-workspace' }
      ]
    },
    {
      title: 'Learn',
      links: [
        { name: 'Learning Academy', path: '/learning-academy' },
        { name: 'Tutorials', path: '/learning-academy' },
        { name: 'Masterclasses', path: '/learning-academy' },
        { name: 'Community Forum', path: '/learning-academy' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Asset Marketplace', path: '/asset-marketplace' },
        { name: 'Templates', path: '/asset-marketplace' },
        { name: 'Stock Photos', path: '/asset-marketplace' },
        { name: 'Brushes & Effects', path: '/asset-marketplace' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About PixelForge', path: '/about-pixel-forge' },
        { name: 'Pricing Plans', path: '/pricing-plans' },
        { name: 'Enterprise', path: '/pricing-plans' },
        { name: 'Careers', path: '/about-pixel-forge' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'Discord', icon: 'MessageCircle', url: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR', path: '/gdpr' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-creative">
                    <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-warning rounded-full animate-pulse-soft"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary tracking-tight">
                    PixelForge
                  </h3>
                  <p className="text-sm text-text-secondary font-medium -mt-1">
                    Studio
                  </p>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed max-w-md">
                Professional creativity, unleashed. Transform your visual ideas into reality 
                with our browser-native creative suite powered by AI and built for collaboration.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Stay Updated</h4>
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <Button
                    variant="default"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    iconName="Send"
                    iconPosition="right"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-text-secondary">
                  Get the latest features, tutorials, and creative inspiration.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks?.map((social) => (
                    <a
                      key={social?.name}
                      href={social?.url}
                      className="w-10 h-10 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-creative"
                      aria-label={social?.name}
                    >
                      <Icon name={social?.icon} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections?.map((section) => (
              <div key={section?.title} className="space-y-4">
                <h4 className="font-semibold text-primary">{section?.title}</h4>
                <ul className="space-y-3">
                  {section?.links?.map((link) => (
                    <li key={link?.name}>
                      <button
                        onClick={() => handleNavigation(link?.path)}
                        className="text-text-secondary hover:text-primary transition-creative text-sm"
                      >
                        {link?.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <span>© {currentYear} PixelForge Studio. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={14} className="text-error fill-current" />
                <span>Made for creators</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legalLinks?.map((link, index) => (
                <React.Fragment key={link?.name}>
                  <button
                    onClick={() => handleNavigation(link?.path)}
                    className="text-sm text-text-secondary hover:text-primary transition-creative"
                  >
                    {link?.name}
                  </button>
                  {index < legalLinks?.length - 1 && (
                    <span className="text-text-secondary">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Lock" size={16} className="text-success" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={16} className="text-success" />
                  <span>GDPR Compliant</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span>All Systems Operational</span>
                </div>
                <button
                  onClick={() => handleNavigation('/status')}
                  className="hover:text-primary transition-creative"
                >
                  Status Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;