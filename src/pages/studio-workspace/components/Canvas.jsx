import React, { useRef, useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Canvas = ({ 
  activeStudio, 
  selectedTool, 
  currentProject,
  onCanvasInteraction,
  collaborators = []
}) => {
  const canvasRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isRendering, setIsRendering] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  // Mock canvas content based on studio type
  const getCanvasContent = () => {
    switch (activeStudio) {
      case 'photo':
        return {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
          alt: 'Mountain landscape for photo editing'
        };
      case 'design':
        return {
          type: 'design',
          elements: [
            { type: 'rectangle', x: 100, y: 100, width: 200, height: 150, color: '#3B82F6' },
            { type: 'text', x: 150, y: 200, content: 'Design Studio', fontSize: 24 }
          ]
        };
      case 'video':
        return {
          type: 'video',
          timeline: true,
          duration: '00:02:30'
        };
      default:
        return { type: 'empty' };
    }
  };

  const canvasContent = getCanvasContent();

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 500));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 25));
  };

  const handleFitToScreen = () => {
    setZoomLevel(100);
  };

  // Simulate rendering for performance demonstration
  useEffect(() => {
    if (selectedTool) {
      setIsRendering(true);
      const timer = setTimeout(() => setIsRendering(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedTool]);

  return (
    <div className="flex-1 bg-canvas relative overflow-hidden">
      {/* Canvas Controls */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2 flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            iconName="ZoomOut"
            className="text-text-secondary hover:text-primary"
          />
          <span className="text-sm font-mono text-card-foreground min-w-[4rem] text-center">
            {zoomLevel}%
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            iconName="ZoomIn"
            className="text-text-secondary hover:text-primary"
          />
          <div className="w-px h-4 bg-border"></div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleFitToScreen}
            iconName="Maximize2"
            className="text-text-secondary hover:text-primary"
          />
        </div>

        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2 flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowGrid(!showGrid)}
            iconName="Grid3X3"
            className={`${showGrid ? 'text-accent' : 'text-text-secondary hover:text-primary'}`}
          />
        </div>
      </div>
      {/* Performance Indicator */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
          <div className="flex items-center space-x-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${isRendering ? 'bg-warning animate-pulse-soft' : 'bg-success'}`}></div>
            <span className="text-card-foreground font-medium">
              {isRendering ? 'Rendering...' : '60 FPS'}
            </span>
          </div>
          <div className="text-xs text-text-secondary mt-1">
            WebGL Accelerated
          </div>
        </div>
      </div>
      {/* Collaboration Cursors */}
      {collaborators?.map((collaborator) => (
        <div
          key={collaborator?.id}
          className="absolute pointer-events-none z-20"
          style={{
            left: `${collaborator?.cursorX || 200}px`,
            top: `${collaborator?.cursorY || 150}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full border-2 border-white shadow-creative-sm"
              style={{ backgroundColor: collaborator?.color || '#3B82F6' }}
            ></div>
            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {collaborator?.name}
            </div>
          </div>
        </div>
      ))}
      {/* Main Canvas Area */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <div 
          className="relative bg-surface shadow-creative-lg rounded-lg overflow-hidden"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center'
          }}
        >
          {/* Grid Overlay */}
          {showGrid && (
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #666 1px, transparent 1px),
                  linear-gradient(to bottom, #666 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            ></div>
          )}

          {/* Canvas Content */}
          {canvasContent?.type === 'image' && (
            <div className="w-[800px] h-[600px] relative">
              <img
                ref={canvasRef}
                src={canvasContent?.src}
                alt={canvasContent?.alt}
                className="w-full h-full object-cover"
                onLoad={() => setIsRendering(false)}
              />
              
              {/* Selection Overlay Example */}
              {selectedTool === 'select' && (
                <div className="absolute inset-0 border-2 border-accent border-dashed animate-pulse-soft"></div>
              )}
              
              {/* AI Background Removal Preview */}
              {selectedTool === 'magic-wand' && (
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-creative-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Sparkles" size={14} />
                    <span>AI Background Detection</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {canvasContent?.type === 'design' && (
            <div className="w-[800px] h-[600px] relative bg-white">
              <svg width="800" height="600" className="absolute inset-0">
                {canvasContent?.elements?.map((element, index) => {
                  if (element?.type === 'rectangle') {
                    return (
                      <rect
                        key={index}
                        x={element?.x}
                        y={element?.y}
                        width={element?.width}
                        height={element?.height}
                        fill={element?.color}
                        className="transition-creative"
                      />
                    );
                  }
                  return null;
                })}
              </svg>
              
              {canvasContent?.elements?.map((element, index) => {
                if (element?.type === 'text') {
                  return (
                    <div
                      key={index}
                      className="absolute font-bold text-gray-800"
                      style={{
                        left: `${element?.x}px`,
                        top: `${element?.y}px`,
                        fontSize: `${element?.fontSize}px`
                      }}
                    >
                      {element?.content}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}

          {canvasContent?.type === 'video' && (
            <div className="w-[800px] h-[450px] bg-black relative flex items-center justify-center">
              <div className="text-white text-center">
                <Icon name="Play" size={64} className="mx-auto mb-4 opacity-60" />
                <p className="text-lg font-medium">Video Timeline</p>
                <p className="text-sm opacity-80">Duration: {canvasContent?.duration}</p>
              </div>
              
              {/* Video Timeline at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/80 border-t border-gray-600">
                <div className="h-full flex items-center px-4">
                  <div className="flex-1 h-8 bg-gray-700 rounded relative">
                    <div className="absolute left-0 top-0 h-full w-1/3 bg-accent rounded"></div>
                    <div className="absolute left-1/3 top-0 w-px h-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {canvasContent?.type === 'empty' && (
            <div className="w-[800px] h-[600px] bg-muted flex items-center justify-center">
              <div className="text-center text-text-secondary">
                <Icon name="Image" size={64} className="mx-auto mb-4 opacity-40" />
                <p className="text-lg font-medium">No Project Open</p>
                <p className="text-sm">Create a new project or open an existing one</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Canvas Info */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
          <div className="text-xs text-text-secondary space-y-1">
            <div>Canvas: 800 × 600 px</div>
            <div>Tool: {selectedTool || 'None'}</div>
            <div>Mode: {activeStudio}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;