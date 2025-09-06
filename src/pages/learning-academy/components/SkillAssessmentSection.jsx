import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillAssessmentSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const assessmentQuestions = [
    {
      id: 1,
      question: "What\'s your primary creative focus?",
      type: "single",
      options: [
        { id: 'photo', label: 'Photo Editing & Retouching', icon: 'Camera' },
        { id: 'design', label: 'Graphic Design & Branding', icon: 'Palette' },
        { id: 'video', label: 'Video Editing & Motion', icon: 'Video' },
        { id: 'mixed', label: 'Mixed Media & Experimental', icon: 'Sparkles' }
      ]
    },
    {
      id: 2,
      question: "How would you rate your current skill level?",
      type: "single",
      options: [
        { id: 'beginner', label: 'Beginner - Just getting started', icon: 'Seedling' },
        { id: 'intermediate', label: 'Intermediate - Some experience', icon: 'TrendingUp' },
        { id: 'advanced', label: 'Advanced - Professional level', icon: 'Crown' },
        { id: 'expert', label: 'Expert - Industry veteran', icon: 'Award' }
      ]
    },
    {
      id: 3,
      question: "Which tools do you currently use? (Select all that apply)",
      type: "multiple",
      options: [
        { id: 'photoshop', label: 'Adobe Photoshop', icon: 'Image' },
        { id: 'illustrator', label: 'Adobe Illustrator', icon: 'PenTool' },
        { id: 'premiere', label: 'Adobe Premiere Pro', icon: 'Film' },
        { id: 'figma', label: 'Figma', icon: 'Figma' },
        { id: 'canva', label: 'Canva', icon: 'Layout' },
        { id: 'none', label: 'None - I\'m new to this', icon: 'HelpCircle' }
      ]
    }
  ];

  const handleAnswerSelect = (questionId, optionId, isMultiple = false) => {
    if (isMultiple) {
      const currentAnswers = selectedAnswers?.[questionId] || [];
      const newAnswers = currentAnswers?.includes(optionId)
        ? currentAnswers?.filter(id => id !== optionId)
        : [...currentAnswers, optionId];
      
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: newAnswers
      }));
    } else {
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: optionId
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < assessmentQuestions?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendations = () => {
    const focus = selectedAnswers?.[1];
    const level = selectedAnswers?.[2];
    
    const recommendations = {
      'photo-beginner': {
        title: 'Photo Editing Foundations',
        description: 'Start with basic photo editing techniques and color correction.',
        courses: ['Creative Foundations', 'Basic Photo Editing', 'Color Theory Essentials'],
        estimatedTime: '4-6 weeks'
      },
      'design-intermediate': {
        title: 'Advanced Graphic Design',
        description: 'Enhance your design skills with professional workflows and branding.',
        courses: ['Professional Techniques', 'Brand Identity Design', 'Advanced Typography'],
        estimatedTime: '6-8 weeks'
      },
      'video-advanced': {
        title: 'Cinematic Video Production',
        description: 'Master advanced video editing and motion graphics techniques.',
        courses: ['Creative Mastery', 'Cinematic Color Grading', 'Motion Graphics Pro'],
        estimatedTime: '8-12 weeks'
      }
    };

    const key = `${focus}-${level}`;
    return recommendations?.[key] || recommendations?.['photo-beginner'];
  };

  const currentQuestion = assessmentQuestions?.[currentStep];
  const isAnswered = selectedAnswers?.[currentQuestion?.id];
  const progress = ((currentStep + 1) / assessmentQuestions?.length) * 100;

  if (showResults) {
    const recommendation = getRecommendations();
    
    return (
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} color="white" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Assessment Complete!
            </h2>
            <p className="text-lg text-text-secondary">
              Based on your responses, here's your personalized learning path.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-creative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Recommended Learning Path
              </h3>
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Icon name="Target" size={16} />
                <span>{recommendation?.title}</span>
              </div>
              <p className="text-text-secondary max-w-2xl mx-auto">
                {recommendation?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">Recommended Courses</h4>
                <div className="space-y-3">
                  {recommendation?.courses?.map((course, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-text-primary">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-4">Learning Timeline</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-accent" />
                    <div>
                      <p className="font-medium text-primary">Estimated Duration</p>
                      <p className="text-sm text-text-secondary">{recommendation?.estimatedTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Target" size={20} className="text-accent" />
                    <div>
                      <p className="font-medium text-primary">Skill Level Goal</p>
                      <p className="text-sm text-text-secondary">Professional Proficiency</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Award" size={20} className="text-accent" />
                    <div>
                      <p className="font-medium text-primary">Certification</p>
                      <p className="text-sm text-text-secondary">PixelForge Certified Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Start Learning Path
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="RotateCcw"
                iconPosition="left"
                onClick={() => {
                  setShowResults(false);
                  setCurrentStep(0);
                  setSelectedAnswers({});
                }}
              >
                Retake Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-muted/20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Skill Assessment
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Take our quick assessment to get personalized learning recommendations tailored to your current skills and goals.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
            <span>Question {currentStep + 1} of {assessmentQuestions?.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-creative mb-8">
          <h3 className="text-xl font-semibold text-primary mb-6 text-center">
            {currentQuestion?.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion?.options?.map((option) => {
              const isSelected = currentQuestion?.type === 'multiple' 
                ? (selectedAnswers?.[currentQuestion?.id] || [])?.includes(option?.id)
                : selectedAnswers?.[currentQuestion?.id] === option?.id;

              return (
                <button
                  key={option?.id}
                  onClick={() => handleAnswerSelect(currentQuestion?.id, option?.id, currentQuestion?.type === 'multiple')}
                  className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? 'border-accent bg-accent/5 shadow-creative-sm'
                      : 'border-border bg-background hover:border-accent/50 hover:bg-accent/5'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-accent text-accent-foreground' : 'bg-muted text-text-secondary'
                  }`}>
                    <Icon name={option?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-primary">{option?.label}</p>
                  </div>
                  {isSelected && (
                    <Icon name="Check" size={20} className="text-accent" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Previous
          </Button>

          <div className="flex space-x-2">
            {assessmentQuestions?.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentStep 
                    ? 'bg-accent' 
                    : index < currentStep 
                      ? 'bg-emerald-500' :'bg-muted'
                }`}
              ></div>
            ))}
          </div>

          <Button 
            variant="default" 
            onClick={handleNext}
            disabled={!isAnswered}
            iconName={currentStep === assessmentQuestions?.length - 1 ? "Check" : "ChevronRight"}
            iconPosition="right"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {currentStep === assessmentQuestions?.length - 1 ? 'Get Results' : 'Next'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillAssessmentSection;