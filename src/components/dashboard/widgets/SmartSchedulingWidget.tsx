import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  Navigation,
  Route,
  Car,
  Plus,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    'en-US': enUS,
  },
});

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'inspection' | 'meeting' | 'deadline' | 'personal';
  location?: string;
  claimId?: string;
  description?: string;
}

interface RouteStop {
  id: string;
  address: string;
  claimId: string;
  estimatedTime: string;
  actualTime?: string;
  status: 'pending' | 'completed' | 'current';
}

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Property Inspection - Hail Damage',
    start: new Date(2024, 0, 15, 9, 0),
    end: new Date(2024, 0, 15, 11, 0),
    type: 'inspection',
    location: '123 Main St, Austin, TX',
    claimId: 'CLM-2024-001'
  },
  {
    id: '2',
    title: 'Client Meeting - Smith Property',
    start: new Date(2024, 0, 15, 14, 0),
    end: new Date(2024, 0, 15, 15, 0),
    type: 'meeting',
    location: '456 Oak Ave, Austin, TX',
    claimId: 'CLM-2024-002'
  },
  {
    id: '3',
    title: 'Report Submission Deadline',
    start: new Date(2024, 0, 16, 17, 0),
    end: new Date(2024, 0, 16, 17, 0),
    type: 'deadline',
    claimId: 'CLM-2024-003'
  }
];

const mockRoute: RouteStop[] = [
  {
    id: '1',
    address: '123 Main St, Austin, TX',
    claimId: 'CLM-2024-001',
    estimatedTime: '9:00 AM',
    status: 'completed'
  },
  {
    id: '2',
    address: '456 Oak Ave, Austin, TX', 
    claimId: 'CLM-2024-002',
    estimatedTime: '11:30 AM',
    status: 'current'
  },
  {
    id: '3',
    address: '789 Pine St, Austin, TX',
    claimId: 'CLM-2024-005',
    estimatedTime: '2:00 PM',
    status: 'pending'
  }
];

export function SmartSchedulingWidget() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [view, setView] = useState<'calendar' | 'route'>('calendar');
  const [currentDate, setCurrentDate] = useState(new Date());

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'inspection': return 'bg-primary text-primary-foreground';
      case 'meeting': return 'bg-blue-500 text-white';
      case 'deadline': return 'bg-destructive text-destructive-foreground';
      case 'personal': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted';
    }
  };

  const getRouteStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'current': return 'text-primary';
      case 'pending': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getRouteStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'current': return '→';
      case 'pending': return '○';
      default: return '○';
    }
  };

  const todaysEvents = mockEvents.filter(event => {
    const today = new Date();
    return event.start.toDateString() === today.toDateString();
  });

  const totalMileage = 47.2;
  const estimatedTime = '3h 45m';

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Schedule & Routing
          </CardTitle>
          
          <div className="flex gap-2">
            <Button
              variant={view === 'calendar' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setView('calendar')}
            >
              <CalendarIcon className="w-4 h-4 mr-1" />
              Calendar
            </Button>
            <Button
              variant={view === 'route' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setView('route')}
            >
              <Route className="w-4 h-4 mr-1" />
              Route
            </Button>
          </div>
        </div>

        {/* Today's Summary */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-primary">{todaysEvents.length}</div>
            <div className="text-xs text-muted-foreground">Today's Events</div>
          </div>
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-success">{totalMileage}mi</div>
            <div className="text-xs text-muted-foreground">Route Distance</div>
          </div>
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-warning">{estimatedTime}</div>
            <div className="text-xs text-muted-foreground">Est. Time</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        {view === 'calendar' ? (
          <div className="h-full p-4">
            {/* Mini Calendar View */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Today's Schedule</h3>
                <Button size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Event
                </Button>
              </div>
              
              <div className="space-y-2">
                {todaysEvents.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CalendarIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No events scheduled for today</p>
                  </div>
                ) : (
                  todaysEvents.map(event => (
                    <Card 
                      key={event.id}
                      className="p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-sm font-medium min-w-[60px] text-muted-foreground">
                          {format(event.start, 'h:mm a')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <Badge className={getEventTypeColor(event.type)}>
                              {event.type}
                            </Badge>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              {event.location}
                            </div>
                          )}
                          {event.claimId && (
                            <Badge variant="outline" className="text-xs mt-1">
                              {event.claimId}
                            </Badge>
                          )}
                        </div>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Navigation className="w-3 h-3" />
                        </Button>
                      </div>
                    </Card>
                  ))
                )}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button variant="outline" size="sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Reschedule
                </Button>
                <Button variant="outline" size="sm">
                  <Route className="w-4 h-4 mr-2" />
                  Optimize Route
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full p-4">
            {/* Route Planning View */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Today's Route</h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Route className="w-4 h-4 mr-1" />
                    Optimize
                  </Button>
                  <Button size="sm">
                    <Navigation className="w-4 h-4 mr-1" />
                    Start Navigation
                  </Button>
                </div>
              </div>

              {/* Route Summary */}
              <Card className="p-3">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Car className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Distance</span>
                    </div>
                    <span className="text-lg font-bold">{totalMileage} mi</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-4 h-4 text-warning" />
                      <span className="text-sm font-medium">Duration</span>
                    </div>
                    <span className="text-lg font-bold">{estimatedTime}</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <MapPin className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Stops</span>
                    </div>
                    <span className="text-lg font-bold">{mockRoute.length}</span>
                  </div>
                </div>
              </Card>

              {/* Route Stops */}
              <div className="space-y-2">
                {mockRoute.map((stop, index) => (
                  <Card key={stop.id} className="p-3">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                        stop.status === 'completed' && "bg-success text-success-foreground",
                        stop.status === 'current' && "bg-primary text-primary-foreground",
                        stop.status === 'pending' && "bg-muted text-muted-foreground"
                      )}>
                        {index + 1}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium">{stop.estimatedTime}</span>
                          <Badge variant="outline" className="text-xs">
                            {stop.claimId}
                          </Badge>
                          <span className={cn(
                            "text-xs font-medium",
                            getRouteStatusColor(stop.status)
                          )}>
                            {getRouteStatusIcon(stop.status)} {stop.status}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stop.address}
                        </div>
                      </div>
                      
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Navigation className="w-3 h-3" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Mileage Tracking */}
              <Card className="p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Billable Mileage</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{totalMileage} miles</span>
                    <Button size="sm" variant="outline">
                      Log to Expenses
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}