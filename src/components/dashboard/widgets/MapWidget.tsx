import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Route, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mapPoints = [
  { id: 1, name: 'Claim Site A', type: 'inspection', lat: 40.7128, lng: -74.0060, status: 'pending' },
  { id: 2, name: 'Claim Site B', type: 'meeting', lat: 40.7614, lng: -73.9776, status: 'completed' },
  { id: 3, name: 'Office Location', type: 'office', lat: 40.7505, lng: -73.9934, status: 'base' },
  { id: 4, name: 'Contractor Site', type: 'contractor', lat: 40.7282, lng: -73.7949, status: 'scheduled' }
];

const routeStats = {
  totalDistance: '47.2 miles',
  estimatedTime: '1h 35m',
  fuelCost: '$12.50',
  stops: 4
};

export function MapWidget() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'inspection': return 'destructive';
      case 'meeting': return 'secondary';
      case 'office': return 'default';
      case 'contractor': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'pending': return '⏳';
      case 'scheduled': return '📅';
      case 'base': return '🏢';
      default: return '📍';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Map & Routing</CardTitle>
            <CardDescription>View locations and plan routes</CardDescription>
          </div>
          <div className="flex gap-1">
            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
              <Navigation className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
              <Layers className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-4">
          {/* Map Placeholder */}
          <div className="h-32 bg-accent/30 rounded-lg border-2 border-dashed border-accent flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Interactive Map View</p>
              <p className="text-xs text-muted-foreground">Showing {mapPoints.length} locations</p>
            </div>
          </div>

          {/* Route Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-accent/50 rounded text-center">
              <div className="text-sm font-medium">{routeStats.totalDistance}</div>
              <div className="text-xs text-muted-foreground">Total Distance</div>
            </div>
            <div className="p-2 bg-accent/50 rounded text-center">
              <div className="text-sm font-medium">{routeStats.estimatedTime}</div>
              <div className="text-xs text-muted-foreground">Est. Time</div>
            </div>
          </div>

          {/* Location List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm">Today's Locations</h4>
              <Button size="sm" variant="outline">
                <Route className="w-4 h-4 mr-1" />
                Optimize
              </Button>
            </div>
            <div className="space-y-2 max-h-24 overflow-y-auto">
              {mapPoints.map((point, index) => (
                <div key={point.id} className="flex items-center gap-3 p-2 border rounded hover:bg-accent/50 transition-colors">
                  <div className="text-lg">{getStatusIcon(point.status)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{point.name}</p>
                    <p className="text-xs text-muted-foreground">Stop #{index + 1}</p>
                  </div>
                  <Badge variant={getTypeColor(point.type)} className="text-xs">
                    {point.type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}