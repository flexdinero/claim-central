import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState, useCallback } from "react";
import { WidgetManager, WidgetWrapper, type Widget } from "@/components/dashboard/WidgetManager";
import { ClaimsFeedWidget } from "@/components/dashboard/widgets/ClaimsFeedWidget";
import { NotificationCenterWidget } from "@/components/dashboard/widgets/NotificationCenterWidget";
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
  // Add more widgets here as they're implemented
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
      position: { x: 8, y: 0 },
      size: { width: 4, height: 6 }
    }
  ]);

  const handleAddWidget = useCallback((widgetId: string) => {
    // Implementation will be added when widget templates are created
    console.log('Adding widget:', widgetId);
  }, []);

  const handleRemoveWidget = useCallback((widgetId: string) => {
    setWidgets(prev => prev.map(w => 
      w.id === widgetId ? { ...w, isActive: false } : w
    ));
  }, []);

  const handleUpdateWidget = useCallback((widgetId: string, updates: Partial<Widget>) => {
    setWidgets(prev => prev.map(w => 
      w.id === widgetId ? { ...w, ...updates } : w
    ));
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

      {/* Dynamic Widgets Grid */}
      <div className="grid grid-cols-12 gap-6">
        {widgets.filter(w => w.isActive).map(widget => {
          const WidgetComponent = WIDGET_COMPONENTS[widget.name.toLowerCase().replace(/\s+/g, '-')] || 
                                   widget.component;
          
          const getSizeClass = (size: Widget['defaultSize']) => {
            switch (size) {
              case 'small': return 'col-span-4';
              case 'medium': return 'col-span-6';  
              case 'large': return 'col-span-8';
              default: return 'col-span-6';
            }
          };

          return (
            <div key={widget.id} className={getSizeClass(widget.defaultSize)}>
              <WidgetWrapper
                widget={widget}
                editMode={editMode}
                onRemove={handleRemoveWidget}
                onResize={(id, size) => handleUpdateWidget(id, { size })}
              >
                <WidgetComponent />
              </WidgetWrapper>
            </div>
          );
        })}

        {/* Quick Actions - Always show when space available */}
        {widgets.filter(w => w.isActive).length < 3 && (
          <Card className="col-span-4">
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
        )}
      </div>
    </div>
  );
}