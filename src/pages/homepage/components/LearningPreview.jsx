import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LearningPreview = () => {
  const [activeTrack, setActiveTrack] = useState(0);

  const learningTracks = [
    {
      id: 'beginner',
      title: 'Creative Foundations',
      level: 'Beginner',
      duration: '4 weeks',
      lessons: 24,
      students: 45000,
      rating: 4.9,
      description: 'Master the fundamentals of digital creativity with hands-on projects and expert guidance.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: {
        name: 'Sarah Martinez',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150',
        title: 'Senior Creative Director'
      },
      skills: ['Color Theory', 'Composition', 'Basic Editing', 'Design Principles'],
      progress: 0,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'intermediate',
      title: 'Professional Workflows',
      level: 'Intermediate',
      duration: '6 weeks',
      lessons: 36,
      students: 28000,
      rating: 4.8,
      description: 'Develop advanced techniques and professional workflows used by industry experts.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: {
        name: 'Marcus Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150',
        title: 'Lead Visual Designer'
      },
      skills: ['Advanced Retouching', 'Color Grading', 'Compositing', 'Brand Design'],
      progress: 65,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'advanced',
      title: 'Creative Mastery',
      level: 'Advanced',
      duration: '8 weeks',
      lessons: 48,
      students: 15000,
      rating: 4.9,
      description: 'Push creative boundaries with cutting-edge techniques and experimental approaches.',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: {
        name: 'Elena Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
        title: 'Creative Innovation Lead'
      },
      skills: ['Motion Graphics', 'AI Integration', '3D Compositing', 'Creative Direction'],
      progress: 23,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const recentLessons = [
    {
      title: 'Color Theory Fundamentals',
      duration: '12 min',
      type: 'Video',
      completed: true,
      icon: 'Play'
    },
    {
      title: 'Advanced Masking Techniques',
      duration: '18 min',
      type: 'Interactive',
      completed: true,
      icon: 'MousePointer'
    },
    {
      title: 'Portfolio Review Session',
      duration: '45 min',
      type: 'Live',
      completed: false,
      icon: 'Users'
    },
    {
      title: 'Creative Challenge: Neon Effects',
      duration: '2 hours',
      type: 'Project',
      completed: false,
      icon: 'Target'
    }
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-green-500 bg-green-500/10';
      case 'Intermediate': return 'text-blue-500 bg-blue-500/10';
      case 'Advanced': return 'text-purple-500 bg-purple-500/10';
      default: return 'text-accent bg-accent/10';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="GraduationCap" size={16} />
            <span>Learning Academy</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Master your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
              craft
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Learn from industry experts with interactive lessons, hands-on projects, 
            and personalized feedback. Build skills that advance your creative career.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Learning Tracks */}
          <div className="space-y-8">
            <div className="space-y-6">
              {learningTracks?.map((track, index) => (
                <div
                  key={track?.id}
                  className={`relative bg-card rounded-2xl p-6 shadow-creative border border-border cursor-pointer transition-all duration-300 ${
                    activeTrack === index ? 'ring-2 ring-accent shadow-creative-lg' : 'hover:shadow-creative-lg'
                  }`}
                  onClick={() => setActiveTrack(index)}
                >
                  <div className="flex items-start space-x-4">
                    {/* Track Image */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl overflow-hidden">
                        <Image
                          src={track?.image}
                          alt={track?.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br ${track?.color} rounded-full flex items-center justify-center`}>
                        <Icon name="BookOpen" size={12} color="white" />
                      </div>
                    </div>

                    {/* Track Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-primary">{track?.title}</h3>
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getLevelColor(track?.level)}`}>
                          {track?.level}
                        </span>
                      </div>
                      
                      <p className="text-text-secondary text-sm mb-3">{track?.description}</p>
                      
                      <div className="flex items-center space-x-4 text-xs text-text-secondary mb-3">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} />
                          <span>{track?.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="BookOpen" size={12} />
                          <span>{track?.lessons} lessons</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={12} />
                          <span>{track?.students?.toLocaleString()} students</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={12} className="text-warning fill-current" />
                          <span>{track?.rating}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {track?.progress > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-text-secondary">Progress</span>
                            <span className="text-primary font-medium">{track?.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${track?.color} h-2 rounded-full transition-all duration-500`}
                              style={{ width: `${track?.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeTrack === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNavigation('/learning-academy')}
              className="w-full text-primary border-border hover:bg-muted"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore All Learning Paths
            </Button>
          </div>

          {/* Active Track Details */}
          <div className="space-y-8">
            {/* Instructor */}
            <div className="bg-card rounded-2xl p-6 shadow-creative border border-border">
              <h4 className="text-lg font-semibold text-primary mb-4">Meet Your Instructor</h4>
              
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={learningTracks?.[activeTrack]?.instructor?.avatar}
                  alt={learningTracks?.[activeTrack]?.instructor?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-primary">
                    {learningTracks?.[activeTrack]?.instructor?.name}
                  </h5>
                  <p className="text-sm text-text-secondary">
                    {learningTracks?.[activeTrack]?.instructor?.title}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h6 className="font-medium text-primary">Skills You'll Learn</h6>
                <div className="flex flex-wrap gap-2">
                  {learningTracks?.[activeTrack]?.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-muted text-text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Lessons */}
            <div className="bg-card rounded-2xl p-6 shadow-creative border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-primary">Recent Lessons</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavigation('/learning-academy')}
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View All
                </Button>
              </div>

              <div className="space-y-3">
                {recentLessons?.map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-creative cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      lesson?.completed ? 'bg-success/10 text-success' : 'bg-muted text-text-secondary'
                    }`}>
                      <Icon name={lesson?.completed ? 'Check' : lesson?.icon} size={16} />
                    </div>
                    
                    <div className="flex-1">
                      <h6 className="font-medium text-primary text-sm">{lesson?.title}</h6>
                      <div className="flex items-center space-x-2 text-xs text-text-secondary">
                        <span>{lesson?.duration}</span>
                        <span>•</span>
                        <span>{lesson?.type}</span>
                      </div>
                    </div>

                    {lesson?.completed && (
                      <Icon name="CheckCircle" size={16} className="text-success" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="default"
              size="lg"
              onClick={() => handleNavigation('/learning-academy')}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              iconName="Play"
              iconPosition="left"
            >
              Start Learning Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPreview;