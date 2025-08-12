import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState, useCallback } from "react";
import { WidgetManager, WidgetWrapper, type Widget } from "@/components/dashboard/WidgetManager";
import { ClaimsFeedWidget } from "@/components/dashboard/widgets/ClaimsFeedWidget";
import { NotificationCenterWidget } from "@/components/dashboard/widgets/NotificationCenterWidget";
import { MessagesWidget } from "@/components/dashboard/widgets/MessagesWidget";
import { EarningsWidget } from "@/components/dashboard/widgets/EarningsWidget";
import { FirmsWidget } from "@/components/dashboard/widgets/FirmsWidget";
import { SmartSchedulingWidget } from "@/components/dashboard/widgets/SmartSchedulingWidget";
import { AnalyticsWidget } from "@/components/dashboard/widgets/AnalyticsWidget";
import { LicensingComplianceWidget } from "@/components/dashboard/widgets/LicensingComplianceWidget";
import { cn } from "@/lib/utils";
import { 
  FileText, 
  DollarSign, 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  Calendar,
  MessageSquare,
  Star,
  ArrowUpRight,
  Plus
} from "lucide-react";

// Widget registry
const WIDGET_COMPONENTS: Record<string, React.ComponentType<any>> = {
  'claims-feed': ClaimsFeedWidget,
  'notification-center': NotificationCenterWidget,
  'messages': MessagesWidget,
  'earnings': EarningsWidget,
  'firms': FirmsWidget,
  'smart-scheduling-routing': SmartSchedulingWidget,
  'analytics': AnalyticsWidget,
  'licensing-compliance-tracker': LicensingComplianceWidget,
};

export default function Dashboard() {
  const [editMode, setEditMode] = useState(false);
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 'claims-feed-default',
      name: 'Claims Feed',
      description: 'Unified real-time stream of new claim assignments',
      component: ClaimsFeedWidget,
      defaultSize: 'large',
      category: 'Claims Management',
      isActive: true,
      position: { x: 0, y: 0 },
      size: { width: 12, height: 8 }
    },
    {
      id: 'notification-center-default',
      name: 'Notification Center',
      description: 'Centralized hub for all system alerts',
      component: NotificationCenterWidget,
      defaultSize: 'small',
      category: 'Communication',
      isActive: true,
      position: { x: 240, y: 0 },
      size: { width: 6, height: 6 }
    }
  ]);

  const checkCollision = (newWidget: Widget, existingWidgets: Widget[]) => {
    const newLeft = newWidget.position.x;
    const newTop = newWidget.position.y;
    const newRight = newLeft + (newWidget.size.width * 20);
    const newBottom = newTop + (newWidget.size.height * 20);

    return existingWidgets.some(existing => {
      if (!existing.isActive || existing.id === newWidget.id) return false;
      
      const existingLeft = existing.position.x;
      const existingTop = existing.position.y;
      const existingRight = existingLeft + (existing.size.width * 20);
      const existingBottom = existingTop + (existing.size.height * 20);

      return !(newRight <= existingLeft || 
               newLeft >= existingRight || 
               newBottom <= existingTop || 
               newTop >= existingBottom);
    });
  };

  const findNonCollidingPosition = (widget: Widget, existingWidgets: Widget[]) => {
    const containerWidth = 1200; // Approximate container width
    const containerHeight = 800; // Approximate container height
    
    let x = 20;
    let y = 20;
    const stepX = 50;
    const stepY = 50;
    
    // Try to find a non-colliding position
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 20; col++) {
        x = col * stepX + 20;
        y = row * stepY + 20;
        
        // Make sure widget fits in container
        if (x + (widget.size.width * 20) > containerWidth) continue;
        if (y + (widget.size.height * 20) > containerHeight) continue;
        
        if (!checkCollision({ ...widget, position: { x, y } }, existingWidgets)) {
          return { x, y };
        }
      }
    }
    
    // If no position found, place at bottom right
    return { x: 20, y: Math.max(20, existingWidgets.length * 100) };
  };

  const handleAddWidget = useCallback((widget: Widget) => {
    const position = findNonCollidingPosition(widget, widgets);
    const newWidget = {
      ...widget,
      position
    };
    setWidgets(prev => [...prev, newWidget]);
  }, [widgets]);

  const handleRemoveWidget = useCallback((widgetId: string) => {
    setWidgets(prev => prev.map(w => 
      w.id === widgetId ? { ...w, isActive: false } : w
    ));
  }, []);

  const handleUpdateWidget = useCallback((widgetId: string, updates: Partial<Widget>) => {
    setWidgets(prev => {
      const newWidgets = prev.map(w => 
        w.id === widgetId ? { ...w, ...updates } : w
      );
      
      // Check for collision if position is being updated
      if (updates.position) {
        const updatedWidget = newWidgets.find(w => w.id === widgetId);
        if (updatedWidget && checkCollision(updatedWidget, newWidgets.filter(w => w.id !== widgetId))) {
          return prev; // Don't update if it would cause collision
        }
      }
      
      return newWidgets;
    });
  }, []);

  const toggleEditMode = useCallback(() => {
    setEditMode(prev => !prev);
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your claims today.</p>
        </div>
        <WidgetManager
          widgets={widgets}
          onAddWidget={handleAddWidget}
          onRemoveWidget={handleRemoveWidget}
          onUpdateWidget={handleUpdateWidget}
          editMode={editMode}
          onToggleEditMode={toggleEditMode}
        />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MTD Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-600">3 urgent</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2%</span> this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Dynamic Widgets */}
      <div className="relative min-h-[600px]">
        {editMode ? (
          // Edit Mode - Absolute positioning with drag/drop
          <div className="relative w-full min-h-[600px] bg-muted/10 rounded-lg p-4">
            {widgets.filter(w => w.isActive).map(widget => {
              const WidgetComponent = WIDGET_COMPONENTS[widget.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')] || 
                                       widget.component;
              
              return (
                <div 
                  key={widget.id} 
                  className="absolute"
                  style={{
                    left: widget.position.x,
                    top: widget.position.y,
                    width: `${widget.size.width * 20}px`,
                    height: `${widget.size.height * 20}px`,
                    minWidth: '200px',
                    minHeight: '150px',
                    zIndex: 1
                  }}
                >
                  <WidgetWrapper
                    widget={widget}
                    editMode={editMode}
                    onRemove={handleRemoveWidget}
                    onResize={(id, size) => handleUpdateWidget(id, { size })}
                    onMove={(id, position) => handleUpdateWidget(id, { position })}
                  >
                    <WidgetComponent />
                  </WidgetWrapper>
                </div>
              );
            })}
            
            {widgets.filter(w => w.isActive).length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Plus className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Click "Add Widgets" to get started</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Normal Mode - Grid layout
          <div className="grid grid-cols-12 gap-6">
            {widgets.filter(w => w.isActive).map(widget => {
              const WidgetComponent = WIDGET_COMPONENTS[widget.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')] || 
                                       widget.component;
              
              const getSizeClass = (size: Widget['defaultSize']) => {
                switch (size) {
                  case 'small': return 'col-span-4 h-80';
                  case 'medium': return 'col-span-6 h-96';  
                  case 'large': return 'col-span-12 h-96';
                  default: return 'col-span-6 h-96';
                }
              };

              return (
                <div key={`grid-${widget.id}`} className={getSizeClass(widget.defaultSize)}>
                  <div className="w-full h-full">
                    <WidgetComponent />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Default Quick Actions when no widgets */}
        {widgets.filter(w => w.isActive).length === 0 && !editMode && (
          <div className="col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-2" variant="outline">
                  <Plus className="w-4 h-4" />
                  Create New Claim
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <Calendar className="w-4 h-4" />
                  Schedule Inspection
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <DollarSign className="w-4 h-4" />
                  Generate Invoice
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <FileText className="w-4 h-4" />
                  Upload Documents
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}