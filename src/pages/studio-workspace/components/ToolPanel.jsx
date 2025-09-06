import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ToolPanel = ({ activeStudio, selectedTool, onToolSelect }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toolCategories = {
    photo: [
      {
        category: 'Selection',
        tools: [
          { id: 'select', name: 'Select', icon: 'MousePointer2', shortcut: 'V' },
          { id: 'lasso', name: 'Lasso', icon: 'Lasso', shortcut: 'L' },
          { id: 'magic-wand', name: 'Magic Wand', icon: 'Wand2', shortcut: 'W' }
        ]
      },
      {
        category: 'Retouching',
        tools: [
          { id: 'brush', name: 'Brush', icon: 'Brush', shortcut: 'B' },
          { id: 'clone', name: 'Clone', icon: 'Copy', shortcut: 'S' },
          { id: 'heal', name: 'Healing', icon: 'Sparkles', shortcut: 'J' },
          { id: 'blur', name: 'Blur', icon: 'Droplets', shortcut: 'R' }
        ]
      },
      {
        category: 'Adjustment',
        tools: [
          { id: 'crop', name: 'Crop', icon: 'Crop', shortcut: 'C' },
          { id: 'transform', name: 'Transform', icon: 'Move', shortcut: 'T' },
          { id: 'color', name: 'Color', icon: 'Palette', shortcut: 'U' }
        ]
      }
    ],
    design: [
      {
        category: 'Drawing',
        tools: [
          { id: 'pen', name: 'Pen', icon: 'Pen', shortcut: 'P' },
          { id: 'pencil', name: 'Pencil', icon: 'Pencil', shortcut: 'N' },
          { id: 'brush', name: 'Brush', icon: 'Brush', shortcut: 'B' }
        ]
      },
      {
        category: 'Shapes',
        tools: [
          { id: 'rectangle', name: 'Rectangle', icon: 'Square', shortcut: 'R' },
          { id: 'ellipse', name: 'Ellipse', icon: 'Circle', shortcut: 'E' },
          { id: 'polygon', name: 'Polygon', icon: 'Hexagon', shortcut: 'G' }
        ]
      },
      {
        category: 'Text',
        tools: [
          { id: 'text', name: 'Text', icon: 'Type', shortcut: 'T' },
          { id: 'text-path', name: 'Text on Path', icon: 'Spline', shortcut: 'Shift+T' }
        ]
      }
    ],
    video: [
      {
        category: 'Timeline',
        tools: [
          { id: 'select', name: 'Select', icon: 'MousePointer2', shortcut: 'V' },
          { id: 'cut', name: 'Cut', icon: 'Scissors', shortcut: 'C' },
          { id: 'trim', name: 'Trim', icon: 'Slice', shortcut: 'T' }
        ]
      },
      {
        category: 'Effects',
        tools: [
          { id: 'transition', name: 'Transition', icon: 'ArrowRightLeft', shortcut: 'X' },
          { id: 'filter', name: 'Filter', icon: 'Filter', shortcut: 'F' },
          { id: 'text-overlay', name: 'Text', icon: 'Type', shortcut: 'T' }
        ]
      }
    ]
  };

  const currentTools = toolCategories?.[activeStudio] || [];

  return (
    <div className={`bg-card border-r border-border transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="h-12 border-b border-border flex items-center justify-between px-4">
        {!isCollapsed && (
          <h3 className="text-sm font-semibold text-card-foreground">Tools</h3>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          iconName={isCollapsed ? "ChevronRight" : "ChevronLeft"}
          className="text-text-secondary hover:text-primary"
        />
      </div>
      {/* Tool Categories */}
      <div className="p-2 space-y-4 overflow-y-auto h-full">
        {currentTools?.map((category) => (
          <div key={category?.category}>
            {!isCollapsed && (
              <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-2 px-2">
                {category?.category}
              </h4>
            )}
            <div className="space-y-1">
              {category?.tools?.map((tool) => (
                <button
                  key={tool?.id}
                  onClick={() => onToolSelect(tool?.id)}
                  className={`w-full flex items-center space-x-3 px-2 py-2 rounded-lg text-sm transition-creative ${
                    selectedTool === tool?.id
                      ? 'bg-accent text-accent-foreground shadow-creative-sm'
                      : 'text-card-foreground hover:bg-muted hover:text-primary'
                  }`}
                  title={isCollapsed ? `${tool?.name} (${tool?.shortcut})` : undefined}
                >
                  <div className={`w-8 h-8 rounded flex items-center justify-center ${
                    selectedTool === tool?.id 
                      ? 'bg-accent-foreground/20' 
                      : 'bg-muted'
                  }`}>
                    <Icon name={tool?.icon} size={16} />
                  </div>
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 text-left">{tool?.name}</span>
                      <span className="text-xs text-text-secondary font-mono">
                        {tool?.shortcut}
                      </span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* AI Assistant */}
        <div className="pt-4 border-t border-border">
          {!isCollapsed && (
            <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-2 px-2">
              AI Assistant
            </h4>
          )}
          <button
            className="w-full flex items-center space-x-3 px-2 py-2 rounded-lg text-sm text-card-foreground hover:bg-muted hover:text-primary transition-creative"
            title={isCollapsed ? "AI Creative Assistant" : undefined}
          >
            <div className="w-8 h-8 rounded flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
              <Icon name="Bot" size={16} color="white" />
            </div>
            {!isCollapsed && (
              <span className="flex-1 text-left">AI Assistant</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolPanel;