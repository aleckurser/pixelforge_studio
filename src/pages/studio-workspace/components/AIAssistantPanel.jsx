import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AIAssistantPanel = ({ isVisible, onClose, activeStudio }) => {
  const [activeFeature, setActiveFeature] = useState('suggestions');
  const [isProcessing, setIsProcessing] = useState(false);
  const [prompt, setPrompt] = useState('');

  const aiFeatures = {
    photo: [
      {
        id: 'background-removal',
        name: 'Background Removal',
        icon: 'Scissors',
        description: 'Automatically remove or replace backgrounds',
        color: 'from-blue-500 to-blue-600'
      },
      {
        id: 'color-enhancement',
        name: 'Color Enhancement',
        icon: 'Palette',
        description: 'AI-powered color correction and grading',
        color: 'from-purple-500 to-purple-600'
      },
      {
        id: 'object-removal',
        name: 'Object Removal',
        icon: 'Eraser',
        description: 'Remove unwanted objects seamlessly',
        color: 'from-red-500 to-red-600'
      },
      {
        id: 'upscaling',
        name: 'AI Upscaling',
        icon: 'Maximize2',
        description: 'Enhance image resolution intelligently',
        color: 'from-green-500 to-green-600'
      }
    ],
    design: [
      {
        id: 'style-transfer',
        name: 'Style Transfer',
        icon: 'Brush',
        description: 'Apply artistic styles to your designs',
        color: 'from-pink-500 to-pink-600'
      },
      {
        id: 'layout-suggestions',
        name: 'Layout Suggestions',
        icon: 'Layout',
        description: 'Get AI-powered layout recommendations',
        color: 'from-indigo-500 to-indigo-600'
      },
      {
        id: 'color-palette',
        name: 'Color Palette',
        icon: 'Droplets',
        description: 'Generate harmonious color schemes',
        color: 'from-teal-500 to-teal-600'
      }
    ],
    video: [
      {
        id: 'auto-edit',
        name: 'Auto Edit',
        icon: 'Scissors',
        description: 'Automatically edit videos based on content',
        color: 'from-orange-500 to-orange-600'
      },
      {
        id: 'scene-detection',
        name: 'Scene Detection',
        icon: 'Eye',
        description: 'Automatically detect and split scenes',
        color: 'from-cyan-500 to-cyan-600'
      },
      {
        id: 'audio-sync',
        name: 'Audio Sync',
        icon: 'Volume2',
        description: 'Sync video with audio beats',
        color: 'from-yellow-500 to-yellow-600'
      }
    ]
  };

  const currentFeatures = aiFeatures?.[activeStudio] || [];

  const suggestions = [
    {
      id: 1,
      type: 'enhancement',
      title: 'Improve Image Brightness',
      description: 'The image appears underexposed. Would you like me to enhance the brightness and contrast?',
      confidence: 92,
      action: 'Apply Enhancement'
    },
    {
      id: 2,
      type: 'composition',
      title: 'Crop for Better Composition',
      description: 'Consider cropping to follow the rule of thirds for better visual impact.',
      confidence: 87,
      action: 'Auto Crop'
    },
    {
      id: 3,
      type: 'color',
      title: 'Color Temperature Adjustment',
      description: 'The image has a cool tone. Warming it up might create a more inviting feel.',
      confidence: 78,
      action: 'Adjust Temperature'
    }
  ];

  const handleFeatureClick = async (featureId) => {
    setIsProcessing(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
  };

  const handlePromptSubmit = async (e) => {
    e?.preventDefault();
    if (!prompt?.trim()) return;
    
    setIsProcessing(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsProcessing(false);
    setPrompt('');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-card border-l border-border shadow-creative-lg z-50 flex flex-col">
      {/* Header */}
      <div className="h-16 border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Icon name="Bot" size={16} color="white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-card-foreground">AI Assistant</h2>
            <p className="text-xs text-text-secondary">Powered by PixelForge AI</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          iconName="X"
          className="text-text-secondary hover:text-primary"
        />
      </div>
      {/* Navigation */}
      <div className="border-b border-border p-4">
        <div className="flex space-x-1">
          {[
            { id: 'suggestions', name: 'Suggestions', icon: 'Lightbulb' },
            { id: 'features', name: 'AI Tools', icon: 'Wand2' },
            { id: 'chat', name: 'Chat', icon: 'MessageCircle' }
          ]?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveFeature(tab?.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-creative ${
                activeFeature === tab?.id
                  ? 'bg-accent text-accent-foreground'
                  : 'text-text-secondary hover:text-primary hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={14} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeFeature === 'suggestions' && (
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" size={16} className="text-accent" />
              <h3 className="text-sm font-semibold text-card-foreground">Smart Suggestions</h3>
            </div>

            {suggestions?.map((suggestion) => (
              <div
                key={suggestion?.id}
                className="p-4 rounded-lg border border-border hover:border-accent/50 transition-creative"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-medium text-card-foreground">
                    {suggestion?.title}
                  </h4>
                  <div className="flex items-center space-x-1 text-xs text-text-secondary">
                    <Icon name="Target" size={12} />
                    <span>{suggestion?.confidence}%</span>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mb-3">
                  {suggestion?.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFeatureClick(suggestion?.id)}
                  loading={isProcessing}
                  className="w-full"
                >
                  {suggestion?.action}
                </Button>
              </div>
            ))}
          </div>
        )}

        {activeFeature === 'features' && (
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Wand2" size={16} className="text-accent" />
              <h3 className="text-sm font-semibold text-card-foreground">AI Tools</h3>
            </div>

            <div className="grid gap-3">
              {currentFeatures?.map((feature) => (
                <button
                  key={feature?.id}
                  onClick={() => handleFeatureClick(feature?.id)}
                  disabled={isProcessing}
                  className="p-4 rounded-lg border border-border hover:border-accent/50 transition-creative text-left disabled:opacity-50"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature?.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon name={feature?.icon} size={16} color="white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-card-foreground mb-1">
                        {feature?.name}
                      </h4>
                      <p className="text-xs text-text-secondary">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeFeature === 'chat' && (
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4 space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="MessageCircle" size={16} className="text-accent" />
                <h3 className="text-sm font-semibold text-card-foreground">AI Chat</h3>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Bot" size={12} color="white" />
                  </div>
                  <div className="flex-1 bg-muted rounded-lg p-3">
                    <p className="text-sm text-card-foreground">
                      Hello! I'm your AI creative assistant. I can help you with editing suggestions, 
                      automated enhancements, and creative ideas. What would you like to work on?
                    </p>
                  </div>
                </div>

                {isProcessing && (
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Icon name="Bot" size={12} color="white" />
                    </div>
                    <div className="flex-1 bg-muted rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse-soft"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" style={{ animationDelay: '0.4s' }}></div>
                        <span className="text-sm text-text-secondary ml-2">AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-border p-4">
              <form onSubmit={handlePromptSubmit} className="space-y-3">
                <Input
                  type="text"
                  placeholder="Ask AI for help with your creative work..."
                  value={prompt}
                  onChange={(e) => setPrompt(e?.target?.value)}
                  disabled={isProcessing}
                />
                <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  loading={isProcessing}
                  disabled={!prompt?.trim()}
                  iconName="Send"
                  iconPosition="right"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
      {/* Processing Indicator */}
      {isProcessing && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-card rounded-lg p-6 shadow-creative-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-pulse-soft">
                <Icon name="Bot" size={16} color="white" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">AI Processing</p>
                <p className="text-xs text-text-secondary">This may take a few moments...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistantPanel;