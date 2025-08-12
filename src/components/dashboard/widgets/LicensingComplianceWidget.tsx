import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Award, 
  Calendar,
  Clock,
  CheckCircle,
  Target,
  TrendingUp,
  Star,
  Plus,
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface License {
  id: string;
  state: string;
  type: string;
  number: string;
  status: 'active' | 'expiring' | 'expired';
  expirationDate: string;
  daysUntilExpiry: number;
}

interface CECredit {
  id: string;
  state: string;
  totalRequired: number;
  completed: number;
  ethicsRequired: number;
  ethicsCompleted: number;
  renewalDate: string;
}

const mockLicenses: License[] = [
  {
    id: '1',
    state: 'Texas',
    type: 'All-Lines',
    number: 'TX-123456',
    status: 'active',
    expirationDate: '2024-08-15',
    daysUntilExpiry: 185
  },
  {
    id: '2',
    state: 'Louisiana',
    type: 'P&C',
    number: 'LA-789012',
    status: 'expiring',
    expirationDate: '2024-03-20',
    daysUntilExpiry: 25
  },
  {
    id: '3',
    state: 'Oklahoma',
    type: 'CAT',
    number: 'OK-345678',
    status: 'active',
    expirationDate: '2024-12-10',
    daysUntilExpiry: 298
  }
];

const mockCECredits: CECredit[] = [
  {
    id: '1',
    state: 'Texas',
    totalRequired: 24,
    completed: 18,
    ethicsRequired: 3,
    ethicsCompleted: 3,
    renewalDate: '2024-08-15'
  },
  {
    id: '2',
    state: 'Louisiana',
    totalRequired: 20,
    completed: 8,
    ethicsRequired: 2,
    ethicsCompleted: 0,
    renewalDate: '2024-03-20'
  }
];

export function LicensingComplianceWidget() {
  const [selectedTab, setSelectedTab] = useState<'licenses' | 'ce-credits' | 'certifications'>('licenses');
  const [addLicenseOpen, setAddLicenseOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/10 text-success border-success/20';
      case 'expiring': return 'bg-warning/10 text-warning border-warning/20';
      case 'expired': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-3 h-3" />;
      case 'expiring': return <Clock className="w-3 h-3" />;
      case 'expired': return <AlertTriangle className="w-3 h-3" />;
      default: return <CheckCircle className="w-3 h-3" />;
    }
  };

  const expiringLicenses = mockLicenses.filter(l => l.status === 'expiring' || l.daysUntilExpiry <= 60).length;
  const activeLicenses = mockLicenses.filter(l => l.status === 'active').length;
  const ceProgress = mockCECredits.reduce((acc, ce) => acc + (ce.completed / ce.totalRequired * 100), 0) / mockCECredits.length;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="w-5 h-5" />
            Licensing & Compliance
            {expiringLicenses > 0 && (
              <Badge variant="destructive" className="text-xs">
                {expiringLicenses} expiring
              </Badge>
            )}
          </CardTitle>
          
          <Dialog open={addLicenseOpen} onOpenChange={setAddLicenseOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-1" />
                Add License
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New License</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">State</label>
                    <Input placeholder="Texas" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Type</label>
                    <Input placeholder="All-Lines" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">License Number</label>
                  <Input placeholder="TX-123456" />
                </div>
                <div>
                  <label className="text-sm font-medium">Expiration Date</label>
                  <Input type="date" />
                </div>
                <Button onClick={() => setAddLicenseOpen(false)} className="w-full">
                  Add License
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-success">{activeLicenses}</div>
            <div className="text-xs text-muted-foreground">Active</div>
          </div>
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-warning">{expiringLicenses}</div>
            <div className="text-xs text-muted-foreground">Expiring</div>
          </div>
          <div className="p-2 border rounded">
            <div className="text-lg font-bold text-primary">{ceProgress.toFixed(0)}%</div>
            <div className="text-xs text-muted-foreground">CE Progress</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 p-1 bg-muted rounded-lg">
          {[
            { key: 'licenses', label: 'Licenses', icon: Award },
            { key: 'ce-credits', label: 'CE Credits', icon: BookOpen },
            { key: 'certifications', label: 'Certs', icon: Star }
          ].map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              variant={selectedTab === key ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedTab(key as any)}
              className="flex-1 text-xs"
            >
              <Icon className="w-3 h-3 mr-1" />
              {label}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto space-y-3">
        {selectedTab === 'licenses' && (
          <div className="space-y-2">
            {mockLicenses.map(license => (
              <Card key={license.id} className="p-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{license.state}</span>
                      <Badge variant="outline" className="text-xs">
                        {license.type}
                      </Badge>
                    </div>
                    <Badge className={getStatusColor(license.status)}>
                      {getStatusIcon(license.status)}
                      <span className="ml-1 text-xs">{license.status}</span>
                    </Badge>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <div>License: {license.number}</div>
                    <div>Expires: {new Date(license.expirationDate).toLocaleDateString()}</div>
                    <div className={cn(
                      "font-medium",
                      license.daysUntilExpiry <= 30 ? "text-destructive" :
                      license.daysUntilExpiry <= 60 ? "text-warning" : "text-success"
                    )}>
                      {license.daysUntilExpiry} days remaining
                    </div>
                  </div>

                  {license.status === 'expiring' && (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        Renew
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Remind
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {selectedTab === 'ce-credits' && (
          <div className="space-y-3">
            {mockCECredits.map(ce => {
              const overallProgress = (ce.completed / ce.totalRequired) * 100;
              const ethicsProgress = (ce.ethicsCompleted / ce.ethicsRequired) * 100;
              
              return (
                <Card key={ce.id} className="p-3">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{ce.state}</span>
                      <span className="text-xs text-muted-foreground">
                        Due: {new Date(ce.renewalDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {/* Overall Progress */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Total Credits</span>
                        <span>{ce.completed}/{ce.totalRequired}</span>
                      </div>
                      <Progress value={overallProgress} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {overallProgress.toFixed(0)}% complete
                      </div>
                    </div>

                    {/* Ethics Progress */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Ethics Credits</span>
                        <span>{ce.ethicsCompleted}/{ce.ethicsRequired}</span>
                      </div>
                      <Progress value={ethicsProgress} className="h-2" />
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" variant="outline" className="text-xs">
                        <BookOpen className="w-3 h-3 mr-1" />
                        Find Courses
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs">
                        <Plus className="w-3 h-3 mr-1" />
                        Log Credits
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {selectedTab === 'certifications' && (
          <div className="space-y-2">
            {[
              { name: 'HAAG Residential Roofing', status: 'active', expires: '2024-06-15' },
              { name: 'IICRC Water Damage', status: 'active', expires: '2024-09-20' },
              { name: 'NRCA ProCertification', status: 'expired', expires: '2023-12-01' }
            ].map((cert, index) => (
              <Card key={index} className="p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{cert.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Expires: {new Date(cert.expires).toLocaleDateString()}
                    </div>
                  </div>
                  <Badge className={getStatusColor(cert.status)}>
                    {getStatusIcon(cert.status)}
                    <span className="ml-1 text-xs">{cert.status}</span>
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Compliance Sharing */}
        <Card className="p-3 bg-primary/5 border-primary/20">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Share Compliance Status</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Grant firms view-only access to your verified license and certification status.
            </p>
            <Button size="sm" variant="outline" className="w-full text-xs">
              <Star className="w-3 h-3 mr-1" />
              Share with Selected Firms
            </Button>
          </div>
        </Card>
      </CardContent>
    </Card>
  );
}