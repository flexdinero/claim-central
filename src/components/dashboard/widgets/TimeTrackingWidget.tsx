import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Square, Clock, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const timeEntries = [
  { id: 1, project: 'Claim #12345', task: 'Property Inspection', duration: '2:30:15', date: '2024-01-15' },
  { id: 2, project: 'Claim #12346', task: 'Report Writing', duration: '1:45:30', date: '2024-01-15' },
  { id: 3, project: 'Claim #12347', task: 'Client Meeting', duration: '0:45:00', date: '2024-01-14' }
];

export function TimeTrackingWidget() {
  const [isTracking, setIsTracking] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking && startTime) {
      interval = setInterval(() => {
        const now = new Date();
        const diff = now.getTime() - startTime.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setCurrentTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking, startTime]);

  const handleStart = () => {
    setIsTracking(true);
    setStartTime(new Date());
  };

  const handlePause = () => {
    setIsTracking(false);
  };

  const handleStop = () => {
    setIsTracking(false);
    setCurrentTime('00:00:00');
    setStartTime(null);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Time Tracking</CardTitle>
        <CardDescription>Track time spent on claims and projects</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-4">
          {/* Timer Display */}
          <div className="text-center p-4 bg-accent/50 rounded-lg">
            <div className="text-2xl font-mono font-bold mb-2">{currentTime}</div>
            <div className="flex justify-center gap-2">
              {!isTracking ? (
                <Button size="sm" onClick={handleStart}>
                  <Play className="w-4 h-4 mr-1" />
                  Start
                </Button>
              ) : (
                <Button size="sm" variant="secondary" onClick={handlePause}>
                  <Pause className="w-4 h-4 mr-1" />
                  Pause
                </Button>
              )}
              <Button size="sm" variant="outline" onClick={handleStop}>
                <Square className="w-4 h-4 mr-1" />
                Stop
              </Button>
            </div>
          </div>

          {/* Recent Entries */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recent Entries
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {timeEntries.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between p-2 border rounded text-sm">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{entry.project}</p>
                    <p className="text-xs text-muted-foreground">{entry.task}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">{entry.duration}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{entry.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}