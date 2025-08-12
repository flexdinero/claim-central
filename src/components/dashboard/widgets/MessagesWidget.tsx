import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Search, 
  Send, 
  Plus, 
  Filter,
  Star,
  Clock,
  AlertCircle,
  User,
  Building2,
  Paperclip
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  type: 'firm' | 'policyholder' | 'vendor' | 'other';
  avatar?: string;
  lastContact: string;
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  subject: string;
  content: string;
  timestamp: string;
  type: 'email' | 'sms' | 'portal';
  isRead: boolean;
  claimId?: string;
  hasAttachment: boolean;
}

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@eliteinsurance.com',
    phone: '(555) 123-4567',
    company: 'Elite Insurance Group',
    type: 'firm',
    lastContact: '2 hours ago'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 987-6543',
    company: 'Policyholder',
    type: 'policyholder',
    lastContact: '1 day ago'
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike@roofingpro.com',
    phone: '(555) 456-7890',
    company: 'Professional Roofing',
    type: 'vendor',
    lastContact: '3 days ago'
  }
];

const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '1',
    receiverId: 'me',
    subject: 'Update Required - Claim CLM-2024-001',
    content: 'Please provide an update on the water damage claim for Sarah Johnson. The carrier is asking for status.',
    timestamp: '2 hours ago',
    type: 'email',
    isRead: false,
    claimId: 'CLM-2024-001',
    hasAttachment: false
  },
  {
    id: '2',
    senderId: '2',
    receiverId: 'me',
    subject: 'Inspection Reschedule',
    content: 'Hi, I need to reschedule tomorrow\'s inspection to Thursday. Is 10 AM available?',
    timestamp: '4 hours ago',
    type: 'sms',
    isRead: false,
    hasAttachment: false
  },
  {
    id: '3',
    senderId: '3',
    receiverId: 'me',
    subject: 'Estimate Completed',
    content: 'The roofing estimate for CLM-2024-003 is completed. Attached is the detailed breakdown.',
    timestamp: '1 day ago',
    type: 'email',
    isRead: true,
    claimId: 'CLM-2024-003',
    hasAttachment: true
  }
];

export function MessagesWidget() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'email' | 'sms'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [addContactOpen, setAddContactOpen] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: 'other' as Contact['type']
  });

  const getMessageIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="w-4 h-4" />;
      case 'sms': return <MessageSquare className="w-4 h-4" />;
      case 'portal': return <Building2 className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getContactTypeColor = (type: string) => {
    switch (type) {
      case 'firm': return 'bg-primary/10 text-primary';
      case 'policyholder': return 'bg-blue-500/10 text-blue-600';
      case 'vendor': return 'bg-green-500/10 text-green-600';
      default: return 'bg-muted';
    }
  };

  const filteredMessages = mockMessages.filter(message => {
    const matchesFilter = filter === 'all' || 
      (filter === 'unread' && !message.isRead) ||
      (filter === 'email' && message.type === 'email') ||
      (filter === 'sms' && message.type === 'sms');
    
    const matchesSearch = searchTerm === '' || 
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const unreadCount = mockMessages.filter(m => !m.isRead).length;

  const handleAddContact = () => {
    // Implementation for adding contact
    setAddContactOpen(false);
    setNewContact({
      name: '',
      email: '',
      phone: '',
      company: '',
      type: 'other'
    });
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Messages
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount}
              </Badge>
            )}
          </CardTitle>
          
          <Dialog open={addContactOpen} onOpenChange={setAddContactOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-1" />
                Add Contact
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Contact</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      value={newContact.name}
                      onChange={(e) => setNewContact(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Contact name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Company</label>
                    <Input
                      value={newContact.company}
                      onChange={(e) => setNewContact(prev => ({ ...prev, company: e.target.value }))}
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    value={newContact.email}
                    onChange={(e) => setNewContact(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="email@example.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <Input
                      value={newContact.phone}
                      onChange={(e) => setNewContact(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Type</label>
                    <Select value={newContact.type} onValueChange={(value: Contact['type']) => 
                      setNewContact(prev => ({ ...prev, type: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="firm">Firm</SelectItem>
                        <SelectItem value="policyholder">Policyholder</SelectItem>
                        <SelectItem value="vendor">Vendor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={handleAddContact} className="w-full">
                  Add Contact
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filters */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            {[
              { key: 'all', label: 'All', count: mockMessages.length },
              { key: 'unread', label: 'Unread', count: unreadCount },
              { key: 'email', label: 'Email', count: mockMessages.filter(m => m.type === 'email').length },
              { key: 'sms', label: 'SMS', count: mockMessages.filter(m => m.type === 'sms').length }
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
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        <Tabs defaultValue="messages" className="h-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="h-full mt-0">
            <div className="h-full overflow-y-auto p-4 space-y-2">
              {filteredMessages.map(message => {
                const sender = mockContacts.find(c => c.id === message.senderId);
                return (
                  <div
                    key={message.id}
                    className={cn(
                      "p-3 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50",
                      !message.isRead && "bg-primary/5 border-primary/20",
                      selectedMessage?.id === message.id && "bg-muted"
                    )}
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>
                          {sender?.name.split(' ').map(n => n[0]).join('') || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn(
                            "text-sm font-medium truncate",
                            !message.isRead && "font-semibold"
                          )}>
                            {sender?.name || 'Unknown'}
                          </span>
                          {!message.isRead && (
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          )}
                          <div className="ml-auto flex items-center gap-1 text-muted-foreground">
                            {getMessageIcon(message.type)}
                            <span className="text-xs">{message.timestamp}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm font-medium truncate mb-1">
                          {message.subject}
                        </p>
                        
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                          {message.content}
                        </p>
                        
                        <div className="flex items-center gap-2">
                          {message.claimId && (
                            <Badge variant="outline" className="text-xs">
                              {message.claimId}
                            </Badge>
                          )}
                          {message.hasAttachment && (
                            <Paperclip className="w-3 h-3 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="h-full mt-0">
            <div className="h-full overflow-y-auto p-4 space-y-2">
              {mockContacts.map(contact => (
                <div
                  key={contact.id}
                  className="p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{contact.name}</span>
                        <Badge className={getContactTypeColor(contact.type)}>
                          {contact.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{contact.company}</p>
                      <p className="text-xs text-muted-foreground">{contact.email}</p>
                    </div>
                    
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}