import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus, Settings, X, Move, MoreHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface Widget {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<any>;
  defaultSize: 'small' | 'medium' | 'large';
  category: string;
  isActive: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface WidgetManagerProps {
  widgets: Widget[];
  onAddWidget: (widget: Widget) => void;
  onRemoveWidget: (widgetId: string) => void;
  onUpdateWidget: (widgetId: string, updates: Partial<Widget>) => void;
  editMode: boolean;
  onToggleEditMode: () => void;
}

const AVAILABLE_WIDGETS: Omit<Widget, 'id' | 'isActive' | 'position' | 'size'>[] = [
  {
    name: 'Claims Feed',
    description: 'Unified real-time stream of new claim assignments from all partnered firms',
    component: () => <div>Claims Feed Widget</div>,
    defaultSize: 'large',
    category: 'Claims Management'
  },
  {
    name: 'Messages',
    description: 'Integrated communication hub with email, SMS, and portal messages',
    component: () => <div>Messages Widget</div>,
    defaultSize: 'medium',
    category: 'Communication'
  },
  {
    name: 'Earnings',
    description: 'Real-time earnings tracking with projections and firm performance analysis',
    component: () => <div>Earnings Widget</div>,
    defaultSize: 'medium',
    category: 'Financial'
  },
  {
    name: 'Firms',
    description: 'Firm relationship management with scorecards and connection status',
    component: () => <div>Firms Widget</div>,
    defaultSize: 'medium',
    category: 'Network'
  },
  {
    name: 'Smart Scheduling & Routing',
    description: 'Calendar and route planning with mileage tracking and optimization',
    component: () => <div>Smart Scheduling Widget</div>,
    defaultSize: 'large',
    category: 'Scheduling'
  },
  {
    name: 'Analytics',
    description: 'Performance dashboard with KPI tracking and firm comparisons',
    component: () => <div>Analytics Widget</div>,
    defaultSize: 'medium',
    category: 'Analytics'
  },
  {
    name: 'Notification Center',
    description: 'Centralized hub for all system alerts, reminders, and updates',
    component: () => <div>Notification Center Widget</div>,
    defaultSize: 'small',
    category: 'Communication'
  },
  {
    name: 'Licensing & Compliance Tracker',
    description: 'Monitor state licenses, certifications, and continuing education requirements',
    component: () => <div>Licensing Tracker Widget</div>,
    defaultSize: 'medium',
    category: 'Compliance'
  },
  {
    name: 'Report Builder & Exporter',
    description: 'Create and export professional, carrier-ready reports directly from claim data',
    component: () => <div>Report Builder Widget</div>,
    defaultSize: 'large',
    category: 'Documentation'
  },
  {
    name: 'CAT Event Management',
    description: 'Dedicated command center for managing catastrophic event responses',
    component: () => <div>CAT Event Widget</div>,
    defaultSize: 'large',
    category: 'CAT Management'
  }
];

export function WidgetManager({ 
  widgets, 
  onAddWidget, 
  onRemoveWidget, 
  onUpdateWidget, 
  editMode, 
  onToggleEditMode 
}: WidgetManagerProps) {
  const [addWidgetOpen, setAddWidgetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(AVAILABLE_WIDGETS.map(w => w.category))];
  const filteredWidgets = selectedCategory === 'all' 
    ? AVAILABLE_WIDGETS 
    : AVAILABLE_WIDGETS.filter(w => w.category === selectedCategory);

  const activeWidgetNames = new Set(widgets.filter(w => w.isActive).map(w => w.name));

  const handleAddWidget = (widgetTemplate: typeof AVAILABLE_WIDGETS[0]) => {
    const widgetId = `${widgetTemplate.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
    const newWidget: Widget = {
      id: widgetId,
      name: widgetTemplate.name,
      description: widgetTemplate.description,
      component: widgetTemplate.component,
      defaultSize: widgetTemplate.defaultSize,
      category: widgetTemplate.category,
      isActive: true,
      position: { x: 50 + (widgets.length * 50), y: 50 + (widgets.length * 50) },
      size: { 
        width: widgetTemplate.defaultSize === 'large' ? 12 : widgetTemplate.defaultSize === 'medium' ? 6 : 3, 
        height: 6 
      }
    };
    onAddWidget(newWidget);
    setAddWidgetOpen(false);
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'small': return 'col-span-1 row-span-1';
      case 'medium': return 'col-span-2 row-span-2';
      case 'large': return 'col-span-3 row-span-3';
      default: return 'col-span-2 row-span-2';
    }
  };

  return (
    <div className="flex gap-2">
      {/* Add Widgets Button */}
      <Dialog open={addWidgetOpen} onOpenChange={setAddWidgetOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Widgets
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>Add Widgets to Dashboard</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Badge>
              ))}
            </div>

            {/* Available Widgets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto">
              {filteredWidgets.map((widget, index) => {
                const isAdded = activeWidgetNames.has(widget.name);
                
                return (
                  <Card key={index} className={cn("cursor-pointer transition-colors", isAdded && "bg-muted")}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">{widget.name}</CardTitle>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {widget.category}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {widget.defaultSize}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm mb-3">
                        {widget.description}
                      </CardDescription>
                      <Button
                        size="sm"
                        className="w-full"
                        disabled={isAdded}
                        onClick={() => handleAddWidget(widget)}
                      >
                        {isAdded ? 'Already Added' : 'Add Widget'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Widgets Button */}
      <Button
        variant={editMode ? "default" : "outline"}
        size="sm"
        onClick={onToggleEditMode}
      >
        <Settings className="w-4 h-4 mr-2" />
        {editMode ? 'Exit Edit' : 'Edit Widgets'}
      </Button>
    </div>
  );
}

// Widget Wrapper Component for Edit Mode with Drag & Drop
interface WidgetWrapperProps {
  widget: Widget;
  editMode: boolean;
  onRemove: (id: string) => void;
  onResize: (id: string, size: Widget['size']) => void;
  onMove: (id: string, position: Widget['position']) => void;
  children: React.ReactNode;
}

export function WidgetWrapper({ widget, editMode, onRemove, onResize, onMove, children }: WidgetWrapperProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e: React.MouseEvent, action: 'drag' | 'resize') => {
    if (!editMode) return;
    
    e.preventDefault();
    setDragStart({ x: e.clientX, y: e.clientY });
    
    if (action === 'drag') {
      setIsDragging(true);
    } else {
      setIsResizing(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!editMode) return;

    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      onMove(widget.id, { 
        x: Math.max(0, widget.position.x + deltaX), 
        y: Math.max(0, widget.position.y + deltaY) 
      });
      setDragStart({ x: e.clientX, y: e.clientY });
    }

    if (isResizing) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      const newWidth = Math.max(4, widget.size.width + Math.round(deltaX / 80));
      const newHeight = Math.max(3, widget.size.height + Math.round(deltaY / 60));
      onResize(widget.id, { width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  React.useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, widget]);

  if (!editMode) {
    return <div className="h-full">{children}</div>;
  }

  return (
    <div 
      className={cn(
        "relative group h-full border-2 border-dashed border-primary/20 rounded-lg p-2",
        isDragging && "border-primary/60 shadow-lg",
        isResizing && "border-warning/60"
      )}
    >
      {/* Drag Handle */}
      <div 
        className="absolute -top-8 left-0 right-0 h-6 bg-primary/10 rounded-t cursor-move opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        onMouseDown={(e) => handleMouseDown(e, 'drag')}
      >
        <Move className="w-4 h-4 text-primary" />
        <span className="text-xs text-primary ml-2 truncate">{widget.name}</span>
      </div>

      {/* Edit Controls */}
      <div className="absolute -top-2 -right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-1">
          <Button
            size="sm"
            variant="destructive"
            className="h-6 w-6 p-0"
            onClick={() => onRemove(widget.id)}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Widget Content */}
      <div className="h-full bg-background rounded border">
        {children}
      </div>

      {/* Resize Handle */}
      <div 
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 rounded-tl"
        onMouseDown={(e) => handleMouseDown(e, 'resize')}
      >
        <MoreHorizontal className="w-3 h-3 text-primary" />
      </div>
    </div>
  );
}