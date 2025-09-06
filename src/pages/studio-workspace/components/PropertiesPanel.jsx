import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PropertiesPanel = ({ 
  activeStudio, 
  selectedTool, 
  onPropertyChange,
  isCollapsed = false,
  onToggleCollapse 
}) => {
  const [activeTab, setActiveTab] = useState('properties');

  // Mock properties based on selected tool and studio
  const getToolProperties = () => {
    const baseProperties = {
      photo: {
        brush: {
          size: 25,
          hardness: 80,
          opacity: 100,
          flow: 100,
          blendMode: 'normal'
        },
        clone: {
          size: 30,
          hardness: 100,
          opacity: 100,
          aligned: true
        },
        heal: {
          size: 20,
          hardness: 50,
          opacity: 100,
          mode: 'content-aware'
        }
      },
      design: {
        pen: {
          strokeWidth: 2,
          strokeColor: '#000000',
          fillColor: '#ffffff',
          opacity: 100
        },
        text: {
          fontSize: 24,
          fontFamily: 'Inter',
          fontWeight: 'normal',
          color: '#000000',
          alignment: 'left'
        }
      },
      video: {
        cut: {
          snapToGrid: true,
          rippleEdit: false,
          magneticTimeline: true
        },
        transition: {
          duration: 1.0,
          type: 'crossfade',
          easing: 'ease-in-out'
        }
      }
    };

    return baseProperties?.[activeStudio]?.[selectedTool] || {};
  };

  const properties = getToolProperties();

  const blendModeOptions = [
    { value: 'normal', label: 'Normal' },
    { value: 'multiply', label: 'Multiply' },
    { value: 'screen', label: 'Screen' },
    { value: 'overlay', label: 'Overlay' },
    { value: 'soft-light', label: 'Soft Light' },
    { value: 'hard-light', label: 'Hard Light' }
  ];

  const fontFamilyOptions = [
    { value: 'Inter', label: 'Inter' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Arial', label: 'Arial' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Georgia', label: 'Georgia' }
  ];

  const transitionOptions = [
    { value: 'crossfade', label: 'Crossfade' },
    { value: 'wipe', label: 'Wipe' },
    { value: 'slide', label: 'Slide' },
    { value: 'zoom', label: 'Zoom' }
  ];

  const tabs = [
    { id: 'properties', name: 'Properties', icon: 'Settings' },
    { id: 'layers', name: 'Layers', icon: 'Layers' },
    { id: 'history', name: 'History', icon: 'History' },
    { id: 'assets', name: 'Assets', icon: 'FolderOpen' }
  ];

  const renderProperties = () => {
    if (!selectedTool || Object.keys(properties)?.length === 0) {
      return (
        <div className="p-4 text-center text-text-secondary">
          <Icon name="Settings" size={32} className="mx-auto mb-2 opacity-40" />
          <p className="text-sm">Select a tool to view properties</p>
        </div>
      );
    }

    return (
      <div className="p-4 space-y-4">
        <h4 className="text-sm font-semibold text-card-foreground capitalize">
          {selectedTool} Properties
        </h4>
        {/* Brush/Clone/Heal Properties */}
        {(selectedTool === 'brush' || selectedTool === 'clone' || selectedTool === 'heal') && (
          <>
            <Input
              label="Size"
              type="number"
              value={properties?.size}
              min={1}
              max={100}
              className="mb-3"
            />
            <Input
              label="Hardness"
              type="number"
              value={properties?.hardness}
              min={0}
              max={100}
              className="mb-3"
            />
            <Input
              label="Opacity"
              type="number"
              value={properties?.opacity}
              min={0}
              max={100}
              className="mb-3"
            />
            {selectedTool === 'brush' && (
              <>
                <Input
                  label="Flow"
                  type="number"
                  value={properties?.flow}
                  min={0}
                  max={100}
                  className="mb-3"
                />
                <Select
                  label="Blend Mode"
                  options={blendModeOptions}
                  value={properties?.blendMode}
                  className="mb-3"
                />
              </>
            )}
          </>
        )}
        {/* Text Properties */}
        {selectedTool === 'text' && (
          <>
            <Input
              label="Font Size"
              type="number"
              value={properties?.fontSize}
              min={8}
              max={72}
              className="mb-3"
            />
            <Select
              label="Font Family"
              options={fontFamilyOptions}
              value={properties?.fontFamily}
              className="mb-3"
            />
            <Input
              label="Color"
              type="color"
              value={properties?.color}
              className="mb-3"
            />
          </>
        )}
        {/* Video Transition Properties */}
        {selectedTool === 'transition' && (
          <>
            <Input
              label="Duration (seconds)"
              type="number"
              value={properties?.duration}
              min={0.1}
              max={5.0}
              step={0.1}
              className="mb-3"
            />
            <Select
              label="Transition Type"
              options={transitionOptions}
              value={properties?.type}
              className="mb-3"
            />
          </>
        )}
      </div>
    );
  };

  const renderLayers = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-card-foreground">Layers</h4>
        <Button
          variant="ghost"
          size="sm"
          iconName="Plus"
          className="text-text-secondary hover:text-primary"
        />
      </div>
      
      <div className="space-y-2">
        {[
          { name: 'Background', visible: true, locked: false },
          { name: 'Layer 1', visible: true, locked: false },
          { name: 'Adjustment Layer', visible: false, locked: true }
        ]?.map((layer, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-creative"
          >
            <Button
              variant="ghost"
              size="sm"
              iconName={layer?.visible ? "Eye" : "EyeOff"}
              className="text-text-secondary hover:text-primary"
            />
            <div className="flex-1 text-sm text-card-foreground">{layer?.name}</div>
            <Button
              variant="ghost"
              size="sm"
              iconName={layer?.locked ? "Lock" : "Unlock"}
              className="text-text-secondary hover:text-primary"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="p-4">
      <h4 className="text-sm font-semibold text-card-foreground mb-4">History</h4>
      
      <div className="space-y-2">
        {[
          'Open Document',
          'Crop Image',
          'Adjust Brightness',
          'Apply Blur Filter',
          'Add Text Layer'
        ]?.map((action, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 p-2 rounded-lg transition-creative ${
              index === 4 ? 'bg-accent text-accent-foreground' : 'hover:bg-muted'
            }`}
          >
            <Icon name="History" size={14} />
            <span className="text-sm">{action}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAssets = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold text-card-foreground">Assets</h4>
        <Button
          variant="ghost"
          size="sm"
          iconName="Upload"
          className="text-text-secondary hover:text-primary"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {[
          'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?w=100&h=100&fit=crop',
          'https://images.pixabay.com/photo/2018/01/14/23/12/nature-3082832_150.jpg',
          'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop',
          'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=100&h=100&fit=crop'
        ]?.map((src, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden bg-muted hover:ring-2 hover:ring-accent transition-creative cursor-pointer"
          >
            <img
              src={src}
              alt={`Asset ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'properties':
        return renderProperties();
      case 'layers':
        return renderLayers();
      case 'history':
        return renderHistory();
      case 'assets':
        return renderAssets();
      default:
        return renderProperties();
    }
  };

  return (
    <div className={`bg-card border-l border-border transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-80'
    }`}>
      {/* Header */}
      <div className="h-12 border-b border-border flex items-center justify-between px-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-1">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-creative ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={14} />
                <span>{tab?.name}</span>
              </button>
            ))}
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          iconName={isCollapsed ? "ChevronLeft" : "ChevronRight"}
          className="text-text-secondary hover:text-primary"
        />
      </div>
      {/* Content */}
      <div className="h-full overflow-y-auto">
        {isCollapsed ? (
          <div className="p-2 space-y-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => {
                  setActiveTab(tab?.id);
                  onToggleCollapse();
                }}
                className={`w-full p-2 rounded-lg transition-creative ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
                title={tab?.name}
              >
                <Icon name={tab?.icon} size={16} />
              </button>
            ))}
          </div>
        ) : (
          renderTabContent()
        )}
      </div>
    </div>
  );
};

export default PropertiesPanel;