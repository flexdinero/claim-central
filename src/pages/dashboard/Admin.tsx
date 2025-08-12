import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Activity, Shield, Server, DollarSign, AlertTriangle, CheckCircle, Eye, Edit, Trash2, Settings, Database, Upload, Download, RefreshCw, Power, HardDrive } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showUserDetailsDialog, setShowUserDetailsDialog] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [debugLogging, setDebugLogging] = useState(false);
  const [logLevel, setLogLevel] = useState("all");

  const systemOverview = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Total Claims",
      value: "45,632",
      change: "+8.2%",
      icon: Activity,
      color: "text-green-600"
    },
    {
      title: "Connected Firms",
      value: "156",
      change: "+3.1%",
      icon: Shield,
      color: "text-purple-600"
    },
    {
      title: "System Uptime",
      value: "99.9%",
      change: "+0.1%",
      icon: Server,
      color: "text-orange-600"
    }
  ];

  const businessMetrics = [
    {
      title: "Monthly Revenue",
      value: "$142,580",
      change: "+15.2%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "New Signups",
      value: "342",
      change: "+22.8%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.4%",
      icon: Activity,
      color: "text-purple-600"
    },
    {
      title: "Churn Rate",
      value: "2.1%",
      change: "-0.3%",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  ];

  const salesData = [
    { month: "November 2024", revenue: "$128,940", signups: 298, churn: "1.8%", growth: "+18.5%" },
    { month: "October 2024", revenue: "$119,230", signups: 276, churn: "2.1%", growth: "+12.3%" },
    { month: "September 2024", revenue: "$108,540", signups: 245, churn: "2.4%", growth: "+8.7%" },
    { month: "August 2024", revenue: "$98,750", signups: 228, churn: "2.2%", growth: "+15.2%" },
    { month: "July 2024", revenue: "$89,420", signups: 201, churn: "2.6%", growth: "+9.8%" },
    { month: "June 2024", revenue: "$82,180", signups: 189, churn: "2.3%", growth: "+6.4%" }
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Adjuster",
      status: "Active",
      claims: 127,
      earnings: "$24,680",
      lastLogin: "2024-12-21",
      joinDate: "2024-01-15",
      subscription: "Pro Plan"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      role: "Admin",
      status: "Active",
      claims: 0,
      earnings: "$0",
      lastLogin: "2024-12-21",
      joinDate: "2023-11-20",
      subscription: "Admin"
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.w@example.com",
      role: "Adjuster",
      status: "Suspended",
      claims: 89,
      earnings: "$18,420",
      lastLogin: "2024-12-15",
      joinDate: "2024-03-10",
      subscription: "Basic Plan"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      role: "Adjuster",
      status: "Active",
      claims: 203,
      earnings: "$42,150",
      lastLogin: "2024-12-20",
      joinDate: "2023-08-05",
      subscription: "Enterprise"
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert.b@example.com",
      role: "Manager",
      status: "Active",
      claims: 15,
      earnings: "$3,200",
      lastLogin: "2024-12-19",
      joinDate: "2024-02-28",
      subscription: "Pro Plan"
    }
  ];

  const firms = [
    {
      id: 1,
      name: "Premier Claims Solutions",
      status: "Connected",
      users: 145,
      claims: 2847,
      responseTime: "2.4h",
      successRate: "96%",
      lastSync: "5 minutes ago"
    },
    {
      id: 2,
      name: "National Insurance Adjusters",
      status: "Connected",
      users: 89,
      claims: 1632,
      responseTime: "3.1h",
      successRate: "92%",
      lastSync: "12 minutes ago"
    },
    {
      id: 3,
      name: "Rapid Response Claims",
      status: "Error",
      users: 67,
      claims: 1245,
      responseTime: "4.2h",
      successRate: "89%",
      lastSync: "2 hours ago"
    },
    {
      id: 4,
      name: "Elite Adjusting Services",
      status: "Connected",
      users: 156,
      claims: 3421,
      responseTime: "1.8h",
      successRate: "98%",
      lastSync: "8 minutes ago"
    }
  ];

  const systemHealth = [
    { component: "Database", status: "Healthy", icon: CheckCircle, color: "text-green-600" },
    { component: "API Services", status: "Healthy", icon: CheckCircle, color: "text-green-600" },
    { component: "File Storage", status: "Warning", icon: AlertTriangle, color: "text-orange-600" },
    { component: "Email Service", status: "Healthy", icon: CheckCircle, color: "text-green-600" },
    { component: "Background Jobs", status: "Healthy", icon: CheckCircle, color: "text-green-600" },
    { component: "CDN", status: "Healthy", icon: CheckCircle, color: "text-green-600" }
  ];

  const systemLogs = [
    { level: "Error", message: "Database connection timeout", timestamp: "2024-12-21 10:45:23", source: "DB Service" },
    { level: "Warning", message: "High memory usage detected", timestamp: "2024-12-21 10:42:15", source: "System Monitor" },
    { level: "Info", message: "User login successful", timestamp: "2024-12-21 10:40:01", source: "Auth Service" },
    { level: "Info", message: "Scheduled backup completed", timestamp: "2024-12-21 10:35:00", source: "Backup Service" },
    { level: "Error", message: "Failed to sync with external API", timestamp: "2024-12-21 10:30:45", source: "API Gateway" },
    { level: "Info", message: "System health check passed", timestamp: "2024-12-21 10:25:00", source: "Health Monitor" }
  ];

  const getStatusColor = (status: string): "default" | "destructive" | "secondary" | "outline" => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'connected':
      case 'healthy':
      case 'paid':
      case 'success':
        return 'secondary';
      case 'suspended':
      case 'error':
      case 'warning':
      case 'failed':
        return 'destructive';
      case 'pending':
        return 'outline';
      default:
        return 'default';
    }
  };

  const getLogLevelColor = (level: string): "default" | "destructive" | "secondary" | "outline" => {
    switch (level.toLowerCase()) {
      case 'error':
        return 'destructive';
      case 'warning':
        return 'default';
      case 'info':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getPriorityColor = (priority: string): "default" | "destructive" | "secondary" | "outline" => {
    switch (priority.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  const getGrowthColor = (growth: string) => {
    return growth.startsWith('+') ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-muted-foreground">System administration and management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Logs
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            System Settings
          </Button>
        </div>
      </div>

      {/* System Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemOverview.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className={`text-xs ${getGrowthColor(metric.change)}`}>
                  {metric.change} from last month
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Admin Tabs */}
      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="firms">Firms</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          {/* Business Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className={`text-xs ${getGrowthColor(metric.change)}`}>
                      {metric.change} from last month
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Signups</CardTitle>
                <CardDescription>Latest customer acquisitions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {users.slice(0, 5).map((user) => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                      <Badge variant="outline">{user.subscription}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {salesData.slice(0, 5).map((month, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{month.month}</div>
                        <div className="text-sm text-muted-foreground">{month.signups} signups</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{month.revenue}</div>
                        <div className={`text-xs ${getGrowthColor(month.growth)}`}>
                          {month.growth}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
              <CardDescription>Monthly sales data and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Signups</TableHead>
                    <TableHead>Churn</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesData.map((month, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{month.month}</TableCell>
                      <TableCell>{month.revenue}</TableCell>
                      <TableCell>{month.signups}</TableCell>
                      <TableCell>{month.churn}</TableCell>
                      <TableCell className={getGrowthColor(month.growth)}>
                        {month.growth}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ARPU</CardTitle>
                <CardDescription>Average Revenue Per User</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$42.15</div>
                <div className="text-xs text-green-600">+8.2% from last month</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>Trial to paid conversion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <div className="text-xs text-green-600">+0.4% from last month</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Churn Rate</CardTitle>
                <CardDescription>Monthly customer churn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.1%</div>
                <div className="text-xs text-green-600">-0.3% from last month</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">User Management</h3>
            <Dialog open={showAddUserDialog} onOpenChange={setShowAddUserDialog}>
              <DialogTrigger asChild>
                <Button>Add User</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                  <DialogDescription>Create a new user account</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="userName">Name</Label>
                      <Input id="userName" placeholder="Enter full name" />
                    </div>
                    <div>
                      <Label htmlFor="userEmail">Email</Label>
                      <Input id="userEmail" type="email" placeholder="Enter email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="userRole">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adjuster">Adjuster</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="userSubscription">Subscription</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic Plan</SelectItem>
                          <SelectItem value="pro">Pro Plan</SelectItem>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowAddUserDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => {
                    setShowAddUserDialog(false);
                    toast({ title: "User created successfully!" });
                  }}>
                    Create User
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Claims</TableHead>
                    <TableHead>Earnings</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.claims}</TableCell>
                      <TableCell>{user.earnings}</TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => {
                              setSelectedUser(user);
                              setShowUserDetailsDialog(true);
                            }}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => toast({ title: `User ${user.status === 'Active' ? 'suspended' : 'activated'} successfully!` })}
                          >
                            <AlertTriangle className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* User Details Dialog */}
          <Dialog open={showUserDetailsDialog} onOpenChange={setShowUserDetailsDialog}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>User Details</DialogTitle>
                <DialogDescription>Detailed information for {selectedUser?.name}</DialogDescription>
              </DialogHeader>
              {selectedUser && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="font-medium">Name:</Label>
                    <div className="text-sm">{selectedUser.name}</div>
                  </div>
                  <div>
                    <Label className="font-medium">Email:</Label>
                    <div className="text-sm">{selectedUser.email}</div>
                  </div>
                  <div>
                    <Label className="font-medium">Role:</Label>
                    <div className="text-sm">{selectedUser.role}</div>
                  </div>
                  <div>
                    <Label className="font-medium">Status:</Label>
                    <Badge className={getStatusColor(selectedUser.status)}>
                      {selectedUser.status}
                    </Badge>
                  </div>
                  <div>
                    <Label className="font-medium">Claims:</Label>
                    <div className="text-sm">{selectedUser.claims}</div>
                  </div>
                  <div>
                    <Label className="font-medium">Earnings:</Label>
                    <div className="text-sm">{selectedUser.earnings}</div>
                  </div>
                  <div>
                    <Label className="font-medium">Join Date:</Label>
                    <div className="text-sm">{selectedUser.joinDate}</div>
                  </div>
                  <div>
                    <Label className="font-medium">Subscription:</Label>
                    <div className="text-sm">{selectedUser.subscription}</div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value="firms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Firm Management</CardTitle>
              <CardDescription>Monitor and manage connected IA firms</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Firm</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Users</TableHead>
                    <TableHead>Claims</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead>Last Sync</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {firms.map((firm) => (
                    <TableRow key={firm.id}>
                      <TableCell className="font-medium">{firm.name}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(firm.status)}>
                          {firm.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{firm.users}</TableCell>
                      <TableCell>{firm.claims}</TableCell>
                      <TableCell>{firm.responseTime}</TableCell>
                      <TableCell>{firm.successRate}</TableCell>
                      <TableCell>{firm.lastSync}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Settings className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Monitor system component status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemHealth.map((component, index) => {
                    const Icon = component.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${component.color}`} />
                          <span className="font-medium">{component.component}</span>
                        </div>
                        <Badge className={getStatusColor(component.status)}>
                          {component.status}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Actions</CardTitle>
                <CardDescription>Perform maintenance and system operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable maintenance mode</p>
                  </div>
                  <Switch 
                    checked={maintenanceMode}
                    onCheckedChange={setMaintenanceMode}
                  />
                </div>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => toast({ title: "Services restarted successfully!" })}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Restart Services
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => toast({ title: "Cache cleared successfully!" })}
                  >
                    <HardDrive className="mr-2 h-4 w-4" />
                    Clear Cache
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => toast({ title: "Backup created successfully!" })}
                  >
                    <Database className="mr-2 h-4 w-4" />
                    Create Backup
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="w-full justify-start"
                    onClick={() => toast({ title: "System shutdown initiated!" })}
                  >
                    <Power className="mr-2 h-4 w-4" />
                    Shutdown System
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>Configure system-wide settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="maxUsers">Max Users</Label>
                  <Input id="maxUsers" type="number" defaultValue="5000" />
                </div>
                <div>
                  <Label htmlFor="syncInterval">Sync Interval (minutes)</Label>
                  <Input id="syncInterval" type="number" defaultValue="15" />
                </div>
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (hours)</Label>
                  <Input id="sessionTimeout" type="number" defaultValue="24" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Debug Logging</Label>
                    <p className="text-sm text-muted-foreground">Enable debug logging</p>
                  </div>
                  <Switch 
                    checked={debugLogging}
                    onCheckedChange={setDebugLogging}
                  />
                </div>
                <Button onClick={() => toast({ title: "Settings saved successfully!" })}>
                  Save Configuration
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Configure security and access controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="minPasswordLength">Min Password Length</Label>
                  <Input id="minPasswordLength" type="number" defaultValue="8" />
                </div>
                <div>
                  <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                  <Input id="maxLoginAttempts" type="number" defaultValue="5" />
                </div>
                <div>
                  <Label htmlFor="lockoutDuration">Lockout Duration (minutes)</Label>
                  <Input id="lockoutDuration" type="number" defaultValue="30" />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Require 2FA for Admins</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>IP Whitelisting</Label>
                  <Switch />
                </div>
                <Button onClick={() => toast({ title: "Security settings saved!" })}>
                  Save Security Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Backup & Recovery</CardTitle>
              <CardDescription>Manage system backups and recovery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Database className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <div className="font-medium">Last Backup</div>
                  <div className="text-sm text-muted-foreground">2024-12-21 02:00</div>
                  <Button size="sm" className="mt-2">
                    <Download className="mr-1 h-3 w-3" />
                    Download
                  </Button>
                </div>
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <div className="font-medium">Restore Backup</div>
                  <div className="text-sm text-muted-foreground">Upload backup file</div>
                  <Button size="sm" variant="outline" className="mt-2">
                    <Upload className="mr-1 h-3 w-3" />
                    Restore
                  </Button>
                </div>
                <div className="text-center">
                  <RefreshCw className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <div className="font-medium">Auto Backup</div>
                  <div className="text-sm text-muted-foreground">Daily at 2:00 AM</div>
                  <Button size="sm" variant="outline" className="mt-2">
                    Configure
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">System Logs</h3>
            <div className="flex gap-2">
              <Select value={logLevel} onValueChange={setLogLevel}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="info">Info</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => toast({ title: "Logs refreshed!" })}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="space-y-0">
                {systemLogs.map((log, index) => (
                  <div key={index} className={`flex items-center justify-between p-4 ${index !== systemLogs.length - 1 ? 'border-b' : ''}`}>
                    <div className="flex items-center gap-4">
                      <Badge variant={getLogLevelColor(log.level)}>
                        {log.level}
                      </Badge>
                      <div>
                        <div className="font-medium">{log.message}</div>
                        <div className="text-sm text-muted-foreground">{log.source}</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {log.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Backup Management</CardTitle>
              <CardDescription>Create, restore, and manage system backups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Create Backup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Create a full system backup including database, files, and configurations.
                    </p>
                    <Button className="w-full" onClick={() => toast({ title: "Backup creation started!" })}>
                      <Database className="mr-2 h-4 w-4" />
                      Start Backup
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Restore Backup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Restore system from a previous backup file.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Select Backup File
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <RefreshCw className="h-5 w-5" />
                      Schedule Backups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Configure automatic backup scheduling.
                    </p>
                    <Button variant="outline" className="w-full">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Configure Schedule
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Backups</CardTitle>
                  <CardDescription>View and manage recent backup files</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "system-backup-2024-12-21.tar.gz", size: "2.4 GB", date: "2024-12-21 02:00", status: "Complete" },
                      { name: "system-backup-2024-12-20.tar.gz", size: "2.3 GB", date: "2024-12-20 02:00", status: "Complete" },
                      { name: "system-backup-2024-12-19.tar.gz", size: "2.3 GB", date: "2024-12-19 02:00", status: "Complete" },
                      { name: "system-backup-2024-12-18.tar.gz", size: "2.2 GB", date: "2024-12-18 02:00", status: "Complete" }
                    ].map((backup, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <div className="font-medium">{backup.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {backup.size} • {backup.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getStatusColor(backup.status)}>
                            {backup.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;