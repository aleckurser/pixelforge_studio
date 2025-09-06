import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WorkspaceHeader = ({ 
  currentProject, 
  onSave, 
  onExport, 
  onShare, 
  isCollaborating = false,
  collaborators = [],
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await onSave();
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="h-16 bg-workspace border-b border-border flex items-center justify-between px-6">
      {/* Left Section - Project Info */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
            <Icon name="Zap" size={16} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-workspace-foreground">
              {currentProject?.name || "Untitled Project"}
            </h1>
            <div className="flex items-center space-x-2 text-xs text-workspace-muted">
              <span>Last saved: 2 minutes ago</span>
              <div className="w-1 h-1 bg-success rounded-full animate-pulse-soft"></div>
              <span>Auto-sync enabled</span>
            </div>
          </div>
        </div>
      </div>
      {/* Center Section - Actions */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center bg-muted rounded-lg p-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={onUndo}
            disabled={!canUndo}
            iconName="Undo2"
            className="text-text-secondary hover:text-primary disabled:opacity-50"
          >
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onRedo}
            disabled={!canRedo}
            iconName="Redo2"
            className="text-text-secondary hover:text-primary disabled:opacity-50"
          >
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleSave}
          loading={isSaving}
          iconName="Save"
          className="text-text-secondary hover:text-primary"
        >
          Save
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
          iconName="Download"
        >
          Export
        </Button>

        <Button
          variant="default"
          size="sm"
          onClick={onShare}
          iconName="Share2"
          className="bg-accent hover:bg-accent/90"
        >
          Share
        </Button>
      </div>
      {/* Right Section - Collaboration */}
      <div className="flex items-center space-x-3">
        {isCollaborating && (
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {collaborators?.slice(0, 3)?.map((collaborator, index) => (
                <div
                  key={collaborator?.id}
                  className="w-8 h-8 rounded-full border-2 border-workspace bg-cover bg-center"
                  style={{ backgroundImage: `url(${collaborator?.avatar})` }}
                  title={collaborator?.name}
                />
              ))}
              {collaborators?.length > 3 && (
                <div className="w-8 h-8 rounded-full border-2 border-workspace bg-muted flex items-center justify-center">
                  <span className="text-xs font-medium text-text-secondary">
                    +{collaborators?.length - 3}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-1 text-xs text-workspace-muted">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
              <span>{collaborators?.length} online</span>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2 text-xs text-workspace-muted">
          <Icon name="Wifi" size={14} />
          <span>Connected</span>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHeader;