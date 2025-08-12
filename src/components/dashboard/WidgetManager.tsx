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
  onAddWidget: (widgetId: string) => void;
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
  },
  {
    name: 'Knowledge Base & Training',
    description: 'Built-in learning hub with tutorials, best practices, and platform updates',
    component: () => <div>Knowledge Base Widget</div>,
    defaultSize: 'medium',
    category: 'Training'
  },
  {
    name: 'Performance Goals',
    description: 'Set, track, and visualize progress toward personal business goals',
    component: () => <div>Performance Goals Widget</div>,
    defaultSize: 'medium',
    category: 'Analytics'
  },
  {
    name: 'Legal & Contract Repository',
    description: 'Secure management of legal agreements and contracts with partnered firms',
    component: () => <div>Legal Repository Widget</div>,
    defaultSize: 'medium',
    category: 'Legal'
  },
  {
    name: 'Note & Voice Memo Hub',
    description: 'Capture information in text, audio, or annotated photos linked to claims',
    component: () => <div>Note Hub Widget</div>,
    defaultSize: 'medium',
    category: 'Documentation'
  },
  {
    name: 'Task Checklist & Workflow',
    description: 'Dynamic task management with automated workflows and SLA tracking',
    component: () => <div>Task Checklist Widget</div>,
    defaultSize: 'medium',
    category: 'Workflow'
  },
  {
    name: 'Notification Center',
    description: 'Centralized hub for all system alerts, reminders, and updates',
    component: () => <div>Notification Center Widget</div>,
    defaultSize: 'small',
    category: 'Communication'
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

  const activeWidgetIds = new Set(widgets.filter(w => w.isActive).map(w => w.id));

  const handleAddWidget = (widgetTemplate: typeof AVAILABLE_WIDGETS[0]) => {
    const widgetId = `${widgetTemplate.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
    onAddWidget(widgetId);
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
                const widgetId = `${widget.name.toLowerCase().replace(/\s+/g, '-')}-template`;
                const isAdded = activeWidgetIds.has(widgetId);
                
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

// Widget Wrapper Component for Edit Mode
interface WidgetWrapperProps {
  widget: Widget;
  editMode: boolean;
  onRemove: (id: string) => void;
  onResize: (id: string, size: Widget['size']) => void;
  children: React.ReactNode;
}

export function WidgetWrapper({ widget, editMode, onRemove, onResize, children }: WidgetWrapperProps) {
  if (!editMode) {
    return <div className="h-full">{children}</div>;
  }

  return (
    <div className="relative group h-full border-2 border-dashed border-primary/20 rounded-lg p-2">
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
      <div className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 group-hover:opacity-100 transition-opacity">
        <MoreHorizontal className="w-3 h-3 text-muted-foreground" />
      </div>
    </div>
  );
}