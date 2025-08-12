import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Upload, Eye, Bell, User, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const portalActivity = [
  { 
    id: 1, 
    client: 'John Smith', 
    action: 'Uploaded document', 
    item: 'Insurance Policy Copy', 
    time: '15 minutes ago',
    type: 'upload',
    avatar: '/placeholder.svg'
  },
  { 
    id: 2, 
    client: 'Sarah Wilson', 
    action: 'Sent message', 
    item: 'Question about timeline', 
    time: '1 hour ago',
    type: 'message',
    avatar: '/placeholder.svg'
  },
  { 
    id: 3, 
    client: 'Mike Johnson', 
    action: 'Viewed report', 
    item: 'Preliminary Assessment', 
    time: '2 hours ago',
    type: 'view',
    avatar: '/placeholder.svg'
  },
  { 
    id: 4, 
    client: 'Lisa Brown', 
    action: 'Submitted form', 
    item: 'Additional Information Form', 
    time: '3 hours ago',
    type: 'form',
    avatar: '/placeholder.svg'
  }
];

const pendingActions = [
  { id: 1, action: 'Review uploaded documents', count: 3, priority: 'high' },
  { id: 2, action: 'Respond to client messages', count: 5, priority: 'medium' },
  { id: 3, action: 'Update claim status', count: 2, priority: 'high' }
];

export function ClientPortalWidget() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'upload': return Upload;
      case 'message': return MessageSquare;
      case 'view': return Eye;
      case 'form': return User;
      default: return Bell;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Client Portal</CardTitle>
            <CardDescription>Monitor client interactions and activity</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Bell className="w-4 h-4 mr-1" />
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-4">
          {/* Pending Actions */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Pending Actions</h4>
            <div className="space-y-2">
              {pendingActions.map((action) => (
                <div key={action.id} className="flex items-center justify-between p-2 border rounded hover:bg-accent/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{action.action}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{action.count}</Badge>
                    <Badge variant={getPriorityColor(action.priority)} className="text-xs">
                      {action.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Recent Activity</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {portalActivity.map((activity) => {
                const ActivityIcon = getActivityIcon(activity.type);
                return (
                  <div key={activity.id} className="flex items-center gap-3 p-2 border rounded hover:bg-accent/50 transition-colors">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.avatar} alt={activity.client} />
                      <AvatarFallback className="text-xs">{activity.client.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.client}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{activity.item}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <ActivityIcon className="w-4 h-4 text-primary" />
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {activity.time.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}