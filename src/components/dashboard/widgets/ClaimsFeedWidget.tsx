import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, Clock, MapPin, Building2, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Claim {
  id: string;
  firmName: string;
  firmLogo: string;
  insuredName: string;
  policyNumber: string;
  location: string;
  claimType: 'auto' | 'property' | 'catastrophe';
  estimatedFee: number;
  dueDate: string;
  urgency: 'low' | 'medium' | 'high';
  status: 'new' | 'acknowledged' | 'accepted';
  assignedTime: string;
}

const mockClaims: Claim[] = [
  {
    id: 'CLM-2024-001',
    firmName: 'Elite Insurance Group',
    firmLogo: 'EIG',
    insuredName: 'Sarah Johnson',
    policyNumber: 'POL-789456',
    location: 'Austin, TX',
    claimType: 'property',
    estimatedFee: 850,
    dueDate: '2024-01-15',
    urgency: 'high',
    status: 'new',
    assignedTime: '5 min ago'
  },
  {
    id: 'CLM-2024-002',
    firmName: 'Apex Claims Solutions',
    firmLogo: 'ACS',
    insuredName: 'Michael Chen',
    policyNumber: 'POL-123789',
    location: 'Dallas, TX',
    claimType: 'auto',
    estimatedFee: 650,
    dueDate: '2024-01-16',
    urgency: 'medium',
    status: 'new',
    assignedTime: '12 min ago'
  },
  {
    id: 'CLM-2024-003',
    firmName: 'National CAT Services',
    firmLogo: 'NCS',
    insuredName: 'Jennifer Martinez',
    policyNumber: 'POL-456123',
    location: 'Houston, TX',
    claimType: 'catastrophe',
    estimatedFee: 1200,
    dueDate: '2024-01-14',
    urgency: 'high',
    status: 'acknowledged',
    assignedTime: '25 min ago'
  }
];

export function ClaimsFeedWidget() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'auto' | 'property' | 'catastrophe'>('all');
  const [claims, setClaims] = useState(mockClaims);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getClaimTypeColor = (type: string) => {
    switch (type) {
      case 'catastrophe': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'property': return 'bg-primary/10 text-primary border-primary/20';
      case 'auto': return 'bg-secondary/10 text-secondary-foreground border-secondary/20';
      default: return 'bg-muted';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'acknowledged': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'accepted': return 'bg-green-500/10 text-green-600 border-green-500/20';
      default: return 'bg-muted';
    }
  };

  const handleAcceptClaim = (claimId: string) => {
    setClaims(prev => prev.map(claim => 
      claim.id === claimId 
        ? { ...claim, status: 'accepted' as const }
        : claim
    ));
  };

  const handleAcknowledgeClaim = (claimId: string) => {
    setClaims(prev => prev.map(claim => 
      claim.id === claimId 
        ? { ...claim, status: 'acknowledged' as const }
        : claim
    ));
  };

  const filteredClaims = selectedFilter === 'all' 
    ? claims 
    : claims.filter(claim => claim.claimType === selectedFilter);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Claims Feed
          </CardTitle>
          <Badge variant="secondary">{filteredClaims.length} active</Badge>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap">
          {['all', 'property', 'auto', 'catastrophe'].map(filter => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter(filter as any)}
              className="text-xs"
            >
              <Filter className="w-3 h-3 mr-1" />
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-0">
        <div className="space-y-2 p-4">
          {filteredClaims.map(claim => (
            <Card key={claim.id} className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold">
                        {claim.firmLogo}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{claim.firmName}</p>
                        <p className="text-xs text-muted-foreground">{claim.assignedTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <AlertCircle className={cn("w-4 h-4", getUrgencyColor(claim.urgency))} />
                      <Badge className={getStatusColor(claim.status)}>
                        {claim.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Claim Details */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Claim ID:</span>
                      <p className="font-mono">{claim.id}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Insured:</span>
                      <p>{claim.insuredName}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Policy:</span>
                      <p className="font-mono text-xs">{claim.policyNumber}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs">{claim.location}</span>
                    </div>
                  </div>

                  {/* Type and Fee */}
                  <div className="flex items-center justify-between">
                    <Badge className={getClaimTypeColor(claim.claimType)}>
                      {claim.claimType.toUpperCase()}
                    </Badge>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-success">
                        ${claim.estimatedFee.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        Due {new Date(claim.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  {claim.status === 'new' && (
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleAcknowledgeClaim(claim.id)}
                      >
                        Acknowledge
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleAcceptClaim(claim.id)}
                      >
                        Accept Claim
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}