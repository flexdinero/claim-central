import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, MapPin, Clock, Users, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const catEvents = [
  { 
    id: 1, 
    name: 'Hurricane Milton', 
    type: 'Hurricane', 
    location: 'Florida Gulf Coast', 
    severity: 'High', 
    claimsCount: 247, 
    estimatedLoss: 15400000,
    status: 'Active',
    progress: 65
  },
  { 
    id: 2, 
    name: 'Wildfire Complex', 
    type: 'Wildfire', 
    location: 'Northern California', 
    severity: 'Medium', 
    claimsCount: 89, 
    estimatedLoss: 7800000,
    status: 'Monitoring',
    progress: 25
  }
];

const alerts = [
  { id: 1, message: 'New CAT claims require immediate assignment', priority: 'High', time: '10 min ago' },
  { id: 2, message: 'Weather forecast updated for affected areas', priority: 'Medium', time: '1 hour ago' },
  { id: 3, message: 'Additional adjusters requested for deployment', priority: 'High', time: '2 hours ago' }
];

export function CATEventWidget() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'outline';
      default: return 'outline';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(amount);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">CAT Event Management</CardTitle>
            <CardDescription>Monitor catastrophic events and response</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <AlertTriangle className="w-4 h-4 mr-1" />
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-4">
          {/* Active Events */}
          <div className="space-y-3">
            {catEvents.map((event) => (
              <div key={event.id} className="p-3 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-sm">{event.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{event.location}</span>
                      <Badge variant={getSeverityColor(event.severity)} className="text-xs">
                        {event.severity}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant={event.status === 'Active' ? 'destructive' : 'secondary'} className="text-xs">
                    {event.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{event.claimsCount} Claims</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{formatCurrency(event.estimatedLoss)}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Response Progress</span>
                    <span>{event.progress}%</span>
                  </div>
                  <Progress value={event.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>

          {/* Alert Feed */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Recent Alerts
            </h4>
            <div className="space-y-2 max-h-24 overflow-y-auto">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-2 bg-accent/50 rounded text-xs">
                  <div className="flex items-start justify-between">
                    <p className="flex-1 pr-2">{alert.message}</p>
                    <Badge variant={alert.priority === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                      {alert.priority}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {alert.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}