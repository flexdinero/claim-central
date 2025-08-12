import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Clock, AlertTriangle, CheckCircle, Info, X, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Notification {
  id: string;
  type: 'new_claim' | 'deadline' | 'message' | 'payment' | 'compliance' | 'system';
  title: string;
  message: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
  isRead: boolean;
  actionable: boolean;
  metadata?: {
    claimId?: string;
    firmName?: string;
    amount?: number;
  };
}

const mockNotifications: Notification[] = [
  {
    id: 'notif-001',
    type: 'new_claim',
    title: 'New Claim Assignment',
    message: 'Elite Insurance Group assigned claim CLM-2024-001 for Sarah Johnson',
    timestamp: '2 minutes ago',
    priority: 'high',
    isRead: false,
    actionable: true,
    metadata: { claimId: 'CLM-2024-001', firmName: 'Elite Insurance Group' }
  },
  {
    id: 'notif-002',
    type: 'deadline',
    title: 'Task Due Soon',
    message: 'Submit final report for CLM-2024-003 due in 2 hours',
    timestamp: '5 minutes ago',
    priority: 'high',
    isRead: false,
    actionable: true,
    metadata: { claimId: 'CLM-2024-003' }
  },
  {
    id: 'notif-003',
    type: 'payment',
    title: 'Payment Received',
    message: 'Invoice INV-001 for $2,400 has been paid by Apex Claims Solutions',
    timestamp: '1 hour ago',
    priority: 'medium',
    isRead: false,
    actionable: false,
    metadata: { amount: 2400, firmName: 'Apex Claims Solutions' }
  },
  {
    id: 'notif-004',
    type: 'compliance',
    title: 'License Expiring',
    message: 'Your Texas All-Lines license expires in 30 days',
    timestamp: '2 hours ago',
    priority: 'medium',
    isRead: true,
    actionable: true
  },
  {
    id: 'notif-005',
    type: 'message',
    title: 'New Message',
    message: 'John Smith from National CAT Services sent you a message',
    timestamp: '3 hours ago',
    priority: 'low',
    isRead: true,
    actionable: true,
    metadata: { firmName: 'National CAT Services' }
  }
];

export function NotificationCenterWidget() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread' | 'high'>('all');

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'new_claim': return <Bell className="w-4 h-4" />;
      case 'deadline': return <Clock className="w-4 h-4" />;
      case 'message': return <Info className="w-4 h-4" />;
      case 'payment': return <CheckCircle className="w-4 h-4" />;
      case 'compliance': return <AlertTriangle className="w-4 h-4" />;
      case 'system': return <Info className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const getNotificationColor = (type: string, priority: string) => {
    if (priority === 'high') return 'text-destructive';
    switch (type) {
      case 'new_claim': return 'text-primary';
      case 'deadline': return 'text-warning';
      case 'payment': return 'text-success';
      case 'compliance': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, isRead: true })));
  };

  const filteredNotifications = notifications.filter(notif => {
    switch (filter) {
      case 'unread': return !notif.isRead;
      case 'high': return notif.priority === 'high';
      default: return true;
    }
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount}
              </Badge>
            )}
          </CardTitle>
          <Button
            size="sm"
            variant="ghost"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="text-xs"
          >
            Mark all read
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {[
            { key: 'all', label: 'All', count: notifications.length },
            { key: 'unread', label: 'Unread', count: unreadCount },
            { key: 'high', label: 'High Priority', count: notifications.filter(n => n.priority === 'high').length }
          ].map(({ key, label, count }) => (
            <Button
              key={key}
              variant={filter === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(key as any)}
              className="text-xs"
            >
              <Filter className="w-3 h-3 mr-1" />
              {label} ({count})
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-0">
        <div className="space-y-1 p-4">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No notifications</p>
            </div>
          ) : (
            filteredNotifications.map(notification => (
              <div
                key={notification.id}
                className={cn(
                  "p-3 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50",
                  !notification.isRead && "bg-primary/5 border-primary/20"
                )}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={cn("mt-0.5", getNotificationColor(notification.type, notification.priority))}>
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={cn(
                          "text-sm font-medium truncate",
                          !notification.isRead && "font-semibold"
                        )}>
                          {notification.title}
                        </h4>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        )}
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Badge className={getPriorityBadge(notification.priority)}>
                          {notification.priority}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {notification.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {notification.actionable && (
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <CheckCircle className="w-3 h-3" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        dismissNotification(notification.id);
                      }}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}