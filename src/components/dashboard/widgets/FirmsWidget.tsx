import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Building2, 
  Star, 
  Search, 
  Plus, 
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Firm {
  id: string;
  name: string;
  logo: string;
  location: string;
  specialties: string[];
  rating: number;
  paymentSpeed: number;
  claimVolume: number;
  avgFee: number;
  connectionStatus: 'connected' | 'pending' | 'not-connected';
  acceptingNew: boolean;
  lastContact: string;
  description: string;
}

const mockFirms: Firm[] = [
  {
    id: '1',
    name: 'Elite Insurance Group',
    logo: 'EIG',
    location: 'Texas, Oklahoma, Louisiana',
    specialties: ['CAT', 'Daily Claims', 'Commercial'],
    rating: 4.8,
    paymentSpeed: 21,
    claimVolume: 150,
    avgFee: 1850,
    connectionStatus: 'connected',
    acceptingNew: true,
    lastContact: '2 days ago',
    description: 'Leading catastrophe and daily claims specialist serving the Southwest region.'
  },
  {
    id: '2',
    name: 'Apex Claims Solutions',
    logo: 'ACS',
    location: 'Florida, Georgia, Alabama',
    specialties: ['Hurricane', 'Water Damage', 'Property'],
    rating: 4.6,
    paymentSpeed: 35,
    claimVolume: 200,
    avgFee: 1650,
    connectionStatus: 'connected',
    acceptingNew: true,
    lastContact: '1 week ago',
    description: 'Specialized in hurricane and storm damage claims throughout the Southeast.'
  },
  {
    id: '3',
    name: 'National CAT Services',
    logo: 'NCS',
    location: 'Nationwide',
    specialties: ['CAT', 'Hail', 'Wind'],
    rating: 4.9,
    paymentSpeed: 18,
    claimVolume: 300,
    avgFee: 2100,
    connectionStatus: 'pending',
    acceptingNew: false,
    lastContact: 'Never',
    description: 'Premier nationwide catastrophe response team with rapid deployment capabilities.'
  },
  {
    id: '4',
    name: 'Professional Adjusters Inc',
    logo: 'PAI',
    location: 'California, Nevada, Arizona',
    specialties: ['Daily Claims', 'Auto', 'Liability'],
    rating: 4.4,
    paymentSpeed: 28,
    claimVolume: 120,
    avgFee: 1400,
    connectionStatus: 'not-connected',
    acceptingNew: true,
    lastContact: 'Never',
    description: 'Full-service independent adjusting firm specializing in daily claims.'
  }
];

export function FirmsWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);
  const [filter, setFilter] = useState<'all' | 'connected' | 'pending' | 'available'>('all');

  const getConnectionStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-success/10 text-success border-success/20';
      case 'pending': return 'bg-warning/10 text-warning border-warning/20';
      case 'not-connected': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  const getConnectionStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="w-3 h-3" />;
      case 'pending': return <Clock className="w-3 h-3" />;
      case 'not-connected': return <AlertCircle className="w-3 h-3" />;
      default: return <AlertCircle className="w-3 h-3" />;
    }
  };

  const getPaymentSpeedColor = (days: number) => {
    if (days <= 20) return 'text-success';
    if (days <= 35) return 'text-warning';
    return 'text-destructive';
  };

  const filteredFirms = mockFirms.filter(firm => {
    const matchesSearch = searchTerm === '' || 
      firm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      firm.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filter === 'all' ||
      (filter === 'connected' && firm.connectionStatus === 'connected') ||
      (filter === 'pending' && firm.connectionStatus === 'pending') ||
      (filter === 'available' && firm.acceptingNew);
    
    return matchesSearch && matchesFilter;
  });

  const connectedFirms = mockFirms.filter(f => f.connectionStatus === 'connected').length;
  const pendingApplications = mockFirms.filter(f => f.connectionStatus === 'pending').length;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Firm Network
            <Badge variant="secondary" className="text-xs">
              {connectedFirms} connected
            </Badge>
          </CardTitle>
          
          <Button size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            Add Firm
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search firms or specialties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            {[
              { key: 'all', label: 'All', count: mockFirms.length },
              { key: 'connected', label: 'Connected', count: connectedFirms },
              { key: 'pending', label: 'Pending', count: pendingApplications },
              { key: 'available', label: 'Accepting', count: mockFirms.filter(f => f.acceptingNew).length }
            ].map(({ key, label, count }) => (
              <Button
                key={key}
                variant={filter === key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(key as any)}
                className="text-xs"
              >
                {label} ({count})
              </Button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-success">{connectedFirms}</div>
            <div className="text-xs text-muted-foreground">Connected</div>
          </div>
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-warning">{pendingApplications}</div>
            <div className="text-xs text-muted-foreground">Pending</div>
          </div>
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-primary">
              {mockFirms.filter(f => f.acceptingNew).length}
            </div>
            <div className="text-xs text-muted-foreground">Accepting</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-0">
        <div className="space-y-2 p-4">
          {filteredFirms.map(firm => (
            <Dialog key={firm.id}>
              <DialogTrigger asChild>
                <Card className="p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="space-y-2">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {firm.logo}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-sm">{firm.name}</h4>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {firm.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{firm.rating}</span>
                        </div>
                        <Badge className={getConnectionStatusColor(firm.connectionStatus)}>
                          {getConnectionStatusIcon(firm.connectionStatus)}
                          <span className="ml-1 text-xs">
                            {firm.connectionStatus.replace('-', ' ')}
                          </span>
                        </Badge>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1">
                      {firm.specialties.map(specialty => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {firm.acceptingNew && (
                        <Badge className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                          Accepting New
                        </Badge>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-muted-foreground" />
                        <span className="font-medium">${firm.avgFee}</span>
                        <span className="text-muted-foreground">avg</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className={cn("w-3 h-3", getPaymentSpeedColor(firm.paymentSpeed))} />
                        <span className={cn("font-medium", getPaymentSpeedColor(firm.paymentSpeed))}>
                          {firm.paymentSpeed}d
                        </span>
                        <span className="text-muted-foreground">pay</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-muted-foreground" />
                        <span className="font-medium">{firm.claimVolume}</span>
                        <span className="text-muted-foreground">vol</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {firm.logo}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div>{firm.name}</div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground font-normal">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {firm.rating} rating • {firm.location}
                      </div>
                    </div>
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{firm.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Specialties</label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {firm.specialties.map(specialty => (
                            <Badge key={specialty} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Status</label>
                        <div className="mt-1">
                          <Badge className={getConnectionStatusColor(firm.connectionStatus)}>
                            {getConnectionStatusIcon(firm.connectionStatus)}
                            <span className="ml-1 text-xs">
                              {firm.connectionStatus.replace('-', ' ')}
                            </span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">Performance</label>
                        <div className="space-y-1 mt-1">
                          <div className="flex justify-between text-sm">
                            <span>Avg Fee:</span>
                            <span className="font-medium">${firm.avgFee}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Payment:</span>
                            <span className={cn("font-medium", getPaymentSpeedColor(firm.paymentSpeed))}>
                              {firm.paymentSpeed} days
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Volume:</span>
                            <span className="font-medium">{firm.claimVolume}/month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    {firm.connectionStatus === 'not-connected' && (
                      <Button className="flex-1">Apply to Network</Button>
                    )}
                    {firm.connectionStatus === 'connected' && (
                      <Button variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Portal
                      </Button>
                    )}
                    <Button variant="outline">Contact</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}