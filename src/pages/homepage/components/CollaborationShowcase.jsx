import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CollaborationShowcase = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [currentAction, setCurrentAction] = useState(0);

  const collaborators = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150',
      role: 'Lead Designer',
      status: 'online',
      cursor: { x: 45, y: 30 },
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
      role: 'Art Director',
      status: 'online',
      cursor: { x: 65, y: 45 },
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Elena Vasquez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
      role: 'Motion Designer',
      status: 'online',
      cursor: { x: 25, y: 60 },
      color: 'bg-purple-500'
    }
  ];

  const actions = [
    {
      user: 'Sarah Chen',
      action: 'adjusted color balance',
      timestamp: 'now',
      icon: 'Palette'
    },
    {
      user: 'Marcus Rodriguez',
      action: 'added new layer',
      timestamp: '2s ago',
      icon: 'Layers'
    },
    {
      user: 'Elena Vasquez',
      action: 'applied motion blur',
      timestamp: '5s ago',
      icon: 'Zap'
    },
    {
      user: 'Sarah Chen',
      action: 'left a comment',
      timestamp: '12s ago',
      icon: 'MessageCircle'
    }
  ];

  const features = [
    {
      icon: 'Users',
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with live cursors, instant updates, and synchronized editing.'
    },
    {
      icon: 'MessageSquare',
      title: 'Contextual Comments',
      description: 'Leave feedback directly on specific elements with threaded discussions and mentions.'
    },
    {
      icon: 'History',
      title: 'Version Control',
      description: 'Track changes, compare versions, and restore previous states with complete edit history.'
    },
    {
      icon: 'Share',
      title: 'Smart Sharing',
      description: 'Share projects with granular permissions and generate presentation-ready links.'
    }
  ];

  useEffect(() => {
    // Simulate active users joining
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const newUsers = [...prev];
        if (newUsers?.length < collaborators?.length) {
          newUsers?.push(collaborators?.[newUsers?.length]);
        }
        return newUsers;
      });
    }, 1000);

    // Cycle through actions
    const actionInterval = setInterval(() => {
      setCurrentAction(prev => (prev + 1) % actions?.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(actionInterval);
    };
  }, []);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={16} />
            <span>Real-time Collaboration</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Create{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
              together
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience the future of creative collaboration. Work with your team in real-time, 
            share feedback instantly, and bring ideas to life faster than ever before.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Collaboration Demo */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-creative-lg overflow-hidden border border-border">
              {/* Demo Header */}
              <div className="bg-muted px-6 py-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-error rounded-full"></div>
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-text-primary">Brand Campaign.pxf</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {activeUsers?.map((user) => (
                      <div key={user?.id} className="relative">
                        <Image
                          src={user?.avatar}
                          alt={user?.name}
                          className="w-6 h-6 rounded-full border-2 border-background"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${user?.color} rounded-full border-2 border-background`}></div>
                      </div>
                    ))}
                    <div className="text-xs text-text-secondary ml-2">
                      {activeUsers?.length} online
                    </div>
                  </div>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 p-6">
                <div className="relative w-full h-full bg-background rounded-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Collaborative project"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Live Cursors */}
                  {activeUsers?.map((user) => (
                    <div
                      key={user?.id}
                      className="absolute pointer-events-none transition-all duration-500"
                      style={{
                        left: `${user?.cursor?.x}%`,
                        top: `${user?.cursor?.y}%`
                      }}
                    >
                      <div className="relative">
                        <Icon name="MousePointer" size={16} className={user?.color?.replace('bg-', 'text-')} />
                        <div className={`absolute top-4 left-0 ${user?.color} text-white px-2 py-1 rounded text-xs whitespace-nowrap`}>
                          {user?.name}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Selection Box */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 border-2 border-blue-500 border-dashed bg-blue-500/10 rounded">
                    <div className="absolute -top-6 left-0 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                      Selected by Sarah
                    </div>
                  </div>

                  {/* Comment Bubble */}
                  <div className="absolute top-1/2 right-1/4">
                    <div className="bg-green-500 w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                      <Icon name="MessageCircle" size={10} color="white" />
                    </div>
                    <div className="absolute top-6 right-0 bg-background border border-border rounded-lg p-2 shadow-creative min-w-48">
                      <div className="text-xs text-text-secondary mb-1">Marcus Rodriguez</div>
                      <div className="text-sm text-primary">Let's increase the contrast here</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-muted/50 px-6 py-4 border-t border-border">
                <div className="flex items-center space-x-3">
                  <Icon name={actions?.[currentAction]?.icon} size={16} className="text-accent" />
                  <div className="text-sm">
                    <span className="font-medium text-primary">{actions?.[currentAction]?.user}</span>
                    <span className="text-text-secondary"> {actions?.[currentAction]?.action}</span>
                    <span className="text-text-secondary ml-2">• {actions?.[currentAction]?.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium shadow-creative">
              Live Sync
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-creative">
              Auto-Save
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Collaboration that feels natural
              </h3>
              <p className="text-lg text-text-secondary">
                Built from the ground up for teams. Every feature is designed to make 
                creative collaboration seamless, intuitive, and productive.
              </p>
            </div>

            <div className="space-y-6">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {feature?.title}
                    </h4>
                    <p className="text-text-secondary">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="bg-card rounded-2xl p-6 shadow-creative border border-border">
              <h4 className="text-lg font-semibold text-primary mb-4">Team Productivity</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3.2x</div>
                  <div className="text-sm text-text-secondary">Faster delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-text-secondary">Less revision cycles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">92%</div>
                  <div className="text-sm text-text-secondary">Team satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-text-secondary">Global collaboration</div>
                </div>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={() => handleNavigation('/studio-workspace')}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              iconName="Users"
              iconPosition="left"
            >
              Start Collaborating
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationShowcase;