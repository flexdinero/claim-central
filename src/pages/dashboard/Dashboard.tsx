import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState, useCallback, useEffect } from "react";
import { WidgetManager, type Widget } from "@/components/dashboard/WidgetManager";
import { GridLayoutWidget } from "@/components/dashboard/GridLayoutWidget";
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
import { checkAndResetWidgets } from "@/utils/resetWidgets";

// Import all widgets
import { DocumentManagementWidget } from "@/components/dashboard/widgets/DocumentManagementWidget";
import { TaskManagerWidget } from "@/components/dashboard/widgets/TaskManagerWidget";
import { WeatherWidget } from "@/components/dashboard/widgets/WeatherWidget";
import { TimeTrackingWidget } from "@/components/dashboard/widgets/TimeTrackingWidget";
import { ExpenseTrackerWidget } from "@/components/dashboard/widgets/ExpenseTrackerWidget";
import { ContactsWidget } from "@/components/dashboard/widgets/ContactsWidget";
import { ReportBuilderWidget } from "@/components/dashboard/widgets/ReportBuilderWidget";
import { CATEventWidget } from "@/components/dashboard/widgets/CATEventWidget";
import { MapWidget } from "@/components/dashboard/widgets/MapWidget";
import { ClientPortalWidget } from "@/components/dashboard/widgets/ClientPortalWidget";

// Widget registry - matches WidgetManager component names exactly
const WIDGET_COMPONENTS: Record<string, React.ComponentType<any>> = {
  ClaimsFeedWidget,
  MessagesWidget,
  EarningsWidget,
  FirmsWidget,
  SmartSchedulingWidget,
  AnalyticsWidget,
  NotificationCenterWidget,
  LicensingComplianceWidget,
  DocumentManagementWidget,
  TaskManagerWidget,
  WeatherWidget,
  TimeTrackingWidget,
  ExpenseTrackerWidget,
  ContactsWidget,
  ReportBuilderWidget,
  CATEventWidget,
  MapWidget,
  ClientPortalWidget
};

export default function Dashboard() {
  const [editMode, setEditMode] = useState(false);
  
  // Check and reset widgets on component mount
  useEffect(() => {
    // Force reset localStorage to ensure clean widget state
    localStorage.removeItem('dashboard-widgets');
  }, []);
  
  // Load widgets from localStorage or use defaults
  const [widgets, setWidgets] = useState<Widget[]>(() => {
    const saved = localStorage.getItem('dashboard-widgets');
    if (saved) {
      try {
        const parsedWidgets = JSON.parse(saved);
        // Fix component references for loaded widgets
        return parsedWidgets.map((widget: Widget) => ({
          ...widget,
          component: WIDGET_COMPONENTS[widget.component?.name] || WIDGET_COMPONENTS.ClaimsFeedWidget
        }));
      } catch (error) {
        console.error('Failed to parse saved widgets:', error);
      }
    }
    return [
    {
      id: 'claims-feed-default',
      name: 'Claims Feed',
      description: 'Unified real-time stream of new claim assignments',
      component: WIDGET_COMPONENTS.ClaimsFeedWidget,
      defaultSize: 'large',
      category: 'Claims Management',
      isActive: true,
      position: { x: 0, y: 0 },
      size: { width: 8, height: 6 }
    },
    {
      id: 'notification-center-default',
      name: 'Notification Center',
      description: 'Centralized hub for all system alerts',
      component: WIDGET_COMPONENTS.NotificationCenterWidget,
      defaultSize: 'small',
      category: 'Communication',
      isActive: true,
      position: { x: 8, y: 0 },
      size: { width: 4, height: 4 }
    }
    ];
  });

  // Save widgets to localStorage whenever they change
  const saveWidgets = (newWidgets: Widget[]) => {
    setWidgets(newWidgets);
    localStorage.setItem('dashboard-widgets', JSON.stringify(newWidgets));
  };

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
    saveWidgets([...widgets, newWidget]);
  }, [widgets]);

  const handleRemoveWidget = useCallback((widgetId: string) => {
    const newWidgets = widgets.map(w => 
      w.id === widgetId ? { ...w, isActive: false } : w
    );
    saveWidgets(newWidgets);
  }, [widgets]);

  const handleUpdateWidget = useCallback((widgetId: string, updates: Partial<Widget>) => {
    const newWidgets = widgets.map(w => 
      w.id === widgetId ? { ...w, ...updates } : w
    );
    saveWidgets(newWidgets);
  }, [widgets]);

  const toggleEditMode = useCallback(() => {
    setEditMode(prev => !prev);
  }, []);

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Welcome back, John</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Here's what's happening with your claims today.</p>
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

      {/* Key Metrics - Mobile First */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        <Card className="min-h-[80px] sm:min-h-[100px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 p-2 sm:p-4">
            <CardTitle className="text-xs sm:text-sm font-medium">Active Claims</CardTitle>
            <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-2 pt-0 sm:p-4 sm:pt-0">
            <div className="text-lg sm:text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="min-h-[80px] sm:min-h-[100px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 p-2 sm:p-4">
            <CardTitle className="text-xs sm:text-sm font-medium">MTD Earnings</CardTitle>
            <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-2 pt-0 sm:p-4 sm:pt-0">
            <div className="text-lg sm:text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="min-h-[80px] sm:min-h-[100px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 p-2 sm:p-4">
            <CardTitle className="text-xs sm:text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-2 pt-0 sm:p-4 sm:pt-0">
            <div className="text-lg sm:text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-600">3 urgent</span>
            </p>
          </CardContent>
        </Card>

        <Card className="min-h-[80px] sm:min-h-[100px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2 p-2 sm:p-4">
            <CardTitle className="text-xs sm:text-sm font-medium">Response Rate</CardTitle>
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-2 pt-0 sm:p-4 sm:pt-0">
            <div className="text-lg sm:text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2%</span> this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Dynamic Widgets */}
      <div className="relative min-h-[600px]">
        <GridLayoutWidget
          widgets={widgets}
          editMode={editMode}
          onRemoveWidget={handleRemoveWidget}
          onUpdateWidget={handleUpdateWidget}
        />

        {/* Default Quick Actions when no widgets */}
        {widgets.filter(w => w.isActive).length === 0 && !editMode && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="w-96">
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