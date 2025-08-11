import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building2, 
  Activity, 
  CheckCircle, 
  AlertTriangle,
  Plus,
  Eye,
  Settings,
  RefreshCw,
  Edit,
  ExternalLink,
  Wifi,
  WifiOff,
  Clock,
  TrendingUp
} from "lucide-react";

export default function Firms() {
  const [selectedFirm, setSelectedFirm] = useState<any>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { title: "Total Firms", value: "12", icon: Building2, change: "+2" },
    { title: "Active Claims", value: "47", icon: Activity, change: "+8" },
    { title: "Average Success Rate", value: "94%", icon: CheckCircle, change: "+3%" },
    { title: "Sync Errors", value: "2", icon: AlertTriangle, change: "-1" }
  ];

  const firms = [
    {
      id: 1,
      name: "ABC Insurance Group",
      url: "https://portal.abcinsurance.com",
      status: "connected",
      connectionType: "API",
      lastSync: "2 minutes ago",
      activeClaims: 15,
      successRate: 96,
      autoSync: true,
      syncError: null,
      stats: {
        totalClaims: 156,
        activeClaims: 15,
        completedClaims: 141,
        avgResponseTime: "2.3 hours"
      }
    },
    {
      id: 2,
      name: "XYZ Adjusters LLC",
      url: "https://claims.xyzadjusters.com",
      status: "syncing",
      connectionType: "Portal",
      lastSync: "Syncing now...",
      activeClaims: 8,
      successRate: 92,
      autoSync: true,
      syncError: null,
      stats: {
        totalClaims: 89,
        activeClaims: 8,
        completedClaims: 81,
        avgResponseTime: "3.1 hours"
      }
    },
    {
      id: 3,
      name: "DEF Claims Services",
      url: "https://portal.defclaims.net",
      status: "error",
      connectionType: "API",
      lastSync: "2 hours ago",
      activeClaims: 0,
      successRate: 88,
      autoSync: false,
      syncError: "Authentication failed - credentials may be expired",
      stats: {
        totalClaims: 45,
        activeClaims: 0,
        completedClaims: 45,
        avgResponseTime: "4.2 hours"
      }
    },
    {
      id: 4,
      name: "GHI Property Adjusters",
      url: "https://admin.ghipropertycom",
      status: "disabled",
      connectionType: "Portal",
      lastSync: "1 week ago",
      activeClaims: 0,
      successRate: 85,
      autoSync: false,
      syncError: null,
      stats: {
        totalClaims: 23,
        activeClaims: 0,
        completedClaims: 23,
        avgResponseTime: "5.1 hours"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected": return "bg-green-500";
      case "syncing": return "bg-blue-500";
      case "error": return "bg-red-500";
      case "disabled": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected": return <Wifi className="w-4 h-4 text-green-600" />;
      case "syncing": return <Activity className="w-4 h-4 text-blue-600 animate-pulse" />;
      case "error": return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case "disabled": return <WifiOff className="w-4 h-4 text-gray-600" />;
      default: return <WifiOff className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      connected: "default",
      syncing: "secondary", 
      error: "destructive",
      disabled: "outline"
    } as const;
    
    return variants[status as keyof typeof variants] || "outline";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Firms Management</h1>
          <p className="text-muted-foreground">Manage connections with 150+ partnered IA firms</p>
        </div>
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Firm
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Firm Connection</DialogTitle>
              <DialogDescription>
                Connect to a new IA firm to start receiving claims
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firmName">Firm Name</Label>
                  <Input id="firmName" placeholder="Enter firm name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portalUrl">Portal URL</Label>
                  <Input id="portalUrl" placeholder="https://portal.firm.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username/Email</Label>
                  <Input id="username" placeholder="your.email@firm.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key (Optional)</Label>
                <Input id="apiKey" placeholder="Enter API key if available" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="autoSync" defaultChecked />
                <Label htmlFor="autoSync">Enable automatic sync</Label>
              </div>
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Your credentials will be encrypted and stored securely. We recommend using API connections when available for better reliability.
                </AlertDescription>
              </Alert>
              <div className="flex gap-2">
                <Button className="flex-1">Test Connection</Button>
                <Button variant="outline" className="flex-1">Save & Connect</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Search firms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="connected">Connected</SelectItem>
                <SelectItem value="syncing">Syncing</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Firms Grid */}
      <div className="grid gap-6">
        {firms.map((firm) => (
          <Card key={firm.id} className="relative">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex flex-col items-center gap-2">
                    {getStatusIcon(firm.status)}
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(firm.status)}`} />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-lg">{firm.name}</h3>
                        <Badge variant={getStatusBadge(firm.status)}>
                          {firm.status}
                        </Badge>
                        <Badge variant="outline">{firm.connectionType}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{firm.url}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Last Sync:</span>
                        <p className="font-medium">{firm.lastSync}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Active Claims:</span>
                        <p className="font-medium">{firm.activeClaims}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Success Rate:</span>
                        <div className="flex items-center gap-2">
                          <Progress value={firm.successRate} className="h-1 flex-1" />
                          <span className="font-medium text-xs">{firm.successRate}%</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Auto Sync:</span>
                        <p className="font-medium">{firm.autoSync ? "Enabled" : "Disabled"}</p>
                      </div>
                    </div>

                    {firm.syncError && (
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription className="text-sm">
                          {firm.syncError}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" onClick={() => setSelectedFirm(firm)}>
                        <Eye className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Firm Details - {firm.name}</DialogTitle>
                        <DialogDescription>
                          Connection details and performance statistics
                        </DialogDescription>
                      </DialogHeader>
                      {selectedFirm && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-6">
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Connection Details</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Status:</span>
                                  <Badge variant={getStatusBadge(selectedFirm.status)}>
                                    {selectedFirm.status}
                                  </Badge>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Type:</span>
                                  <span>{selectedFirm.connectionType}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Last Sync:</span>
                                  <span>{selectedFirm.lastSync}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Auto Sync:</span>
                                  <span>{selectedFirm.autoSync ? "Enabled" : "Disabled"}</span>
                                </div>
                              </CardContent>
                            </Card>

                            <Card>
                              <CardHeader>
                                <CardTitle className="text-sm">Statistics</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Total Claims:</span>
                                  <span className="font-medium">{selectedFirm.stats.totalClaims}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Active Claims:</span>
                                  <span className="font-medium">{selectedFirm.stats.activeClaims}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Completed:</span>
                                  <span className="font-medium">{selectedFirm.stats.completedClaims}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-muted-foreground">Avg Response:</span>
                                  <span className="font-medium">{selectedFirm.stats.avgResponseTime}</span>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Test Connection
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <RefreshCw className="w-4 h-4 mr-2" />
                              Sync Now
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Settings className="w-4 h-4 mr-2" />
                              Settings
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" variant="outline">
                    <RefreshCw className="w-4 h-4 mr-1" />
                    Sync
                  </Button>
                  
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}