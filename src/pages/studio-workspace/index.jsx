import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WorkspaceHeader from './components/WorkspaceHeader';
import StudioTabs from './components/StudioTabs';
import ToolPanel from './components/ToolPanel';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import AIAssistantPanel from './components/AIAssistantPanel';
import ProjectTemplates from './components/ProjectTemplates';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const StudioWorkspace = () => {
  const [activeStudio, setActiveStudio] = useState('photo');
  const [selectedTool, setSelectedTool] = useState('select');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [isPropertiesPanelCollapsed, setIsPropertiesPanelCollapsed] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [isCollaborating, setIsCollaborating] = useState(true);

  // Mock project data
  const mockProject = {
    id: 1,
    name: "Mountain Landscape Edit",
    type: "photo",
    lastModified: new Date(),
    dimensions: { width: 4000, height: 2667 },
    fileSize: "12.5 MB"
  };

  // Mock collaborators
  const mockCollaborators = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      color: "#3B82F6",
      cursorX: 250,
      cursorY: 180,
      isOnline: true
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      color: "#10B981",
      cursorX: 400,
      cursorY: 220,
      isOnline: true
    },
    {
      id: 3,
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      color: "#F59E0B",
      cursorX: 320,
      cursorY: 300,
      isOnline: true
    }
  ];

  // Initialize project on mount
  useEffect(() => {
    setCurrentProject(mockProject);
  }, []);

  // Handle studio change
  const handleStudioChange = (studioId) => {
    setActiveStudio(studioId);
    // Reset tool selection when changing studios
    setSelectedTool('select');
  };

  // Handle tool selection
  const handleToolSelect = (toolId) => {
    setSelectedTool(toolId);
  };

  // Handle canvas interaction
  const handleCanvasInteraction = (interaction) => {
    console.log('Canvas interaction:', interaction);
  };

  // Handle property change
  const handlePropertyChange = (property, value) => {
    console.log('Property changed:', property, value);
  };

  // Handle project save
  const handleSave = async () => {
    // Simulate save operation
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Project saved');
        resolve();
      }, 1000);
    });
  };

  // Handle project export
  const handleExport = () => {
    console.log('Exporting project...');
    // In a real app, this would open export dialog
  };

  // Handle project share
  const handleShare = () => {
    console.log('Sharing project...');
    setIsCollaborating(true);
  };

  // Handle template selection
  const handleTemplateSelect = (template) => {
    if (template?.type === 'blank') {
      setCurrentProject({
        ...mockProject,
        name: "Untitled Project",
        type: activeStudio
      });
    } else {
      setCurrentProject({
        ...mockProject,
        name: template?.name,
        type: activeStudio,
        template: template
      });
    }
    setShowTemplates(false);
  };

  // Handle undo/redo
  const handleUndo = () => {
    console.log('Undo action');
  };

  const handleRedo = () => {
    console.log('Redo action');
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e?.ctrlKey || e?.metaKey) {
        switch (e?.key) {
          case 's':
            e?.preventDefault();
            handleSave();
            break;
          case 'z':
            e?.preventDefault();
            if (e?.shiftKey) {
              handleRedo();
            } else {
              handleUndo();
            }
            break;
          case 'e':
            e?.preventDefault();
            handleExport();
            break;
          default:
            break;
        }
      }

      // Tool shortcuts
      switch (e?.key?.toLowerCase()) {
        case 'v':
          if (!e?.ctrlKey && !e?.metaKey) {
            setSelectedTool('select');
          }
          break;
        case 'b':
          if (!e?.ctrlKey && !e?.metaKey) {
            setSelectedTool('brush');
          }
          break;
        case 'c':
          if (!e?.ctrlKey && !e?.metaKey) {
            setSelectedTool('crop');
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 h-screen flex flex-col">
        {/* Workspace Header */}
        <WorkspaceHeader
          currentProject={currentProject}
          onSave={handleSave}
          onExport={handleExport}
          onShare={handleShare}
          isCollaborating={isCollaborating}
          collaborators={mockCollaborators}
          onUndo={handleUndo}
          onRedo={handleRedo}
          canUndo={true}
          canRedo={false}
        />

        {/* Studio Tabs */}
        <StudioTabs
          activeStudio={activeStudio}
          onStudioChange={handleStudioChange}
        />

        {/* Main Workspace */}
        <div className="flex-1 flex overflow-hidden">
          {/* Tool Panel */}
          <ToolPanel
            activeStudio={activeStudio}
            selectedTool={selectedTool}
            onToolSelect={handleToolSelect}
          />

          {/* Canvas Area */}
          <Canvas
            activeStudio={activeStudio}
            selectedTool={selectedTool}
            currentProject={currentProject}
            collaborators={mockCollaborators}
            onCanvasInteraction={handleCanvasInteraction}
          />

          {/* Properties Panel */}
          <PropertiesPanel
            activeStudio={activeStudio}
            selectedTool={selectedTool}
            isCollapsed={isPropertiesPanelCollapsed}
            onToggleCollapse={() => setIsPropertiesPanelCollapsed(!isPropertiesPanelCollapsed)}
            onPropertyChange={handlePropertyChange}
          />
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
          <Button
            variant="default"
            size="icon"
            onClick={() => setShowTemplates(true)}
            className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 shadow-creative-lg"
            title="New Project"
          >
            <Icon name="Plus" size={20} />
          </Button>
          
          <Button
            variant="default"
            size="icon"
            onClick={() => setShowAIAssistant(true)}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-creative-lg"
            title="AI Assistant"
          >
            <Icon name="Bot" size={20} color="white" />
          </Button>
        </div>

        {/* Performance Indicator */}
        <div className="fixed bottom-6 left-6 z-40">
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-creative-sm">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
              <span className="text-card-foreground font-medium">Real-time Sync</span>
            </div>
            <div className="text-xs text-text-secondary mt-1">
              {mockCollaborators?.length} collaborators online
            </div>
          </div>
        </div>
      </div>
      {/* AI Assistant Panel */}
      <AIAssistantPanel
        isVisible={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
        activeStudio={activeStudio}
      />
      {/* Project Templates Modal */}
      <ProjectTemplates
        isVisible={showTemplates}
        onClose={() => setShowTemplates(false)}
        onTemplateSelect={handleTemplateSelect}
        activeStudio={activeStudio}
      />
      {/* Loading Overlay for Mobile */}
      <div className="lg:hidden fixed inset-0 bg-background z-50 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Icon name="Monitor" size={32} color="white" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Desktop Experience Required
          </h2>
          <p className="text-text-secondary mb-6 max-w-sm">
            PixelForge Studio is optimized for desktop and tablet devices. 
            Please use a larger screen for the full creative experience.
          </p>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/homepage'}
            iconName="ArrowLeft"
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudioWorkspace;