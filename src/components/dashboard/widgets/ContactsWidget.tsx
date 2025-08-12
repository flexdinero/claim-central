import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Search, UserPlus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const contacts = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    role: 'Insurance Agent', 
    company: 'ABC Insurance', 
    phone: '(555) 123-4567', 
    email: 'sarah.j@abcins.com',
    status: 'online',
    avatar: '/placeholder.svg'
  },
  { 
    id: 2, 
    name: 'Mike Rodriguez', 
    role: 'Claims Manager', 
    company: 'XYZ Corp', 
    phone: '(555) 234-5678', 
    email: 'mike.r@xyzcorp.com',
    status: 'busy',
    avatar: '/placeholder.svg'
  },
  { 
    id: 3, 
    name: 'Emily Chen', 
    role: 'Contractor', 
    company: 'BuildRight LLC', 
    phone: '(555) 345-6789', 
    email: 'emily@buildright.com',
    status: 'offline',
    avatar: '/placeholder.svg'
  },
  { 
    id: 4, 
    name: 'David Wilson', 
    role: 'Legal Counsel', 
    company: 'Wilson & Associates', 
    phone: '(555) 456-7890', 
    email: 'dwilson@wilsonlaw.com',
    status: 'online',
    avatar: '/placeholder.svg'
  }
];

export function ContactsWidget() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Contacts</CardTitle>
            <CardDescription>Quick access to important contacts</CardDescription>
          </div>
          <div className="flex gap-1">
            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
              <Search className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
              <UserPlus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-3 max-h-full overflow-y-auto">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center gap-3 p-2 border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={contact.avatar} alt={contact.name} />
                  <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(contact.status)}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{contact.name}</p>
                <p className="text-xs text-muted-foreground truncate">{contact.role} • {contact.company}</p>
              </div>

              <div className="flex gap-1">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}