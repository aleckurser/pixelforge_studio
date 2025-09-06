import React from 'react';
import Icon from '../../../components/AppIcon';

const StudioTabs = ({ activeStudio, onStudioChange }) => {
  const studios = [
    {
      id: 'photo',
      name: 'Photo Editor',
      icon: 'Camera',
      description: 'Advanced photo retouching and enhancement',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'design',
      name: 'Design Studio',
      icon: 'Palette',
      description: 'Graphics, illustrations, and digital art',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'video',
      name: 'Video Workshop',
      icon: 'Video',
      description: 'Video editing and motion graphics',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="h-14 bg-card border-b border-border flex items-center px-6">
      <div className="flex items-center space-x-1">
        {studios?.map((studio) => (
          <button
            key={studio?.id}
            onClick={() => onStudioChange(studio?.id)}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition-creative ${
              activeStudio === studio?.id
                ? 'bg-accent text-accent-foreground shadow-creative-sm'
                : 'text-text-primary hover:bg-muted hover:text-primary'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center ${
              activeStudio === studio?.id 
                ? 'bg-accent-foreground/20' 
                : `bg-gradient-to-r ${studio?.color}`
            }`}>
              <Icon 
                name={studio?.icon} 
                size={14} 
                color={activeStudio === studio?.id ? 'currentColor' : 'white'} 
              />
            </div>
            <span>{studio?.name}</span>
          </button>
        ))}
      </div>
      <div className="ml-auto flex items-center space-x-2">
        <div className="flex items-center space-x-1 text-xs text-text-secondary">
          <Icon name="Zap" size={12} />
          <span>WebGL Accelerated</span>
        </div>
        <div className="w-1 h-4 bg-border"></div>
        <div className="flex items-center space-x-1 text-xs text-text-secondary">
          <Icon name="Cpu" size={12} />
          <span>60 FPS</span>
        </div>
      </div>
    </div>
  );
};

export default StudioTabs;