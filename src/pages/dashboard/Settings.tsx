import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User, Bell, Shield, Eye, Link, CreditCard, MessageSquare, HeadphonesIcon, Users, Upload, Download, Trash2, Smartphone, Laptop, Globe, Calendar, DollarSign, Zap, AlertTriangle, CheckCircle, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState("firms");
  const [dataSharing, setDataSharing] = useState(true);
  const [analyticsTracking, setAnalyticsTracking] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const connectedDevices = [
    {
      id: 1,
      device: "iPhone 15 Pro",
      location: "Austin, TX",
      lastActive: "Currently active",
      type: "mobile",
      icon: Smartphone
    },
    {
      id: 2,
      device: "MacBook Pro",
      location: "Austin, TX",
      lastActive: "2 hours ago",
      type: "desktop",
      icon: Laptop
    },
    {
      id: 3,
      device: "Chrome Browser",
      location: "Dallas, TX",
      lastActive: "1 week ago",
      type: "browser",
      icon: Globe
    }
  ];

  const loginHistory = [
    { date: "2024-12-21 09:15", location: "Austin, TX", device: "iPhone 15 Pro", status: "Success" },
    { date: "2024-12-20 14:30", location: "Austin, TX", device: "MacBook Pro", status: "Success" },
    { date: "2024-12-19 11:45", location: "Dallas, TX", device: "Chrome Browser", status: "Success" },
    { date: "2024-12-18 16:20", location: "Austin, TX", device: "iPhone 15 Pro", status: "Success" },
    { date: "2024-12-17 08:10", location: "Unknown", device: "Unknown", status: "Failed" }
  ];

  const integrations = [
    {
      name: "Google Calendar",
      description: "Sync your inspection schedule",
      connected: true,
      icon: Calendar,
      status: "Active"
    },
    {
      name: "QuickBooks",
      description: "Export financial data",
      connected: false,
      icon: DollarSign,
      status: "Available"
    },
    {
      name: "Zapier",
      description: "Automate workflows",
      connected: true,
      icon: Zap,
      status: "Active"
    },
    {
      name: "Dropbox",
      description: "Cloud file storage",
      connected: false,
      icon: Upload,
      status: "Available"
    }
  ];

  const supportTickets = [
    {
      id: "TICK-001",
      subject: "Issue with claim sync",
      category: "Technical",
      priority: "High",
      status: "Open",
      created: "2024-12-20"
    },
    {
      id: "TICK-002",
      subject: "Billing inquiry",
      category: "Billing",
      priority: "Medium",
      status: "Resolved",
      created: "2024-12-18"
    },
    {
      id: "TICK-003",
      subject: "Feature request",
      category: "General",
      priority: "Low",
      status: "In Progress",
      created: "2024-12-15"
    }
  ];

  const billingHistory = [
    { date: "2024-12-01", description: "Pro Plan - Monthly", amount: "$49.99", status: "Paid" },
    { date: "2024-11-01", description: "Pro Plan - Monthly", amount: "$49.99", status: "Paid" },
    { date: "2024-10-01", description: "Pro Plan - Monthly", amount: "$49.99", status: "Paid" },
    { date: "2024-09-01", description: "Pro Plan - Monthly", amount: "$49.99", status: "Paid" }
  ];

  const getPriorityColor = (priority: string): "default" | "destructive" | "secondary" | "outline" => {
    switch (priority.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string): "default" | "destructive" | "secondary" | "outline" => {
    switch (status.toLowerCase()) {
      case 'open': return 'destructive';
      case 'in progress': return 'default';
      case 'resolved': return 'secondary';
      case 'paid': return 'secondary';
      case 'success': return 'secondary';
      case 'failed': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and configuration</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      {/* Main Settings Tabs */}
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid w-full grid-cols-9">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
          <TabsTrigger value="affiliate">Affiliate</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal and professional details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo
                    </Button>
                    <Button size="sm" variant="outline">Remove</Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <Input id="licenseNumber" defaultValue="TX-ADJ-123456" />
                  </div>
                  <div>
                    <Label htmlFor="state">Primary State</Label>
                    <Select defaultValue="texas">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="texas">Texas</SelectItem>
                        <SelectItem value="florida">Florida</SelectItem>
                        <SelectItem value="california">California</SelectItem>
                        <SelectItem value="new-york">New York</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
                <CardDescription>Your professional profile and bio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" />
                </div>
                <div>
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us about your experience and expertise..." 
                    className="min-h-32"
                    defaultValue="Experienced independent adjuster with over 10 years in property and casualty claims. Specialized in catastrophe response and complex commercial claims."
                  />
                </div>
                <div>
                  <Label>Specialties</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">Property Claims</Badge>
                    <Badge variant="outline">Auto Claims</Badge>
                    <Badge variant="outline">CAT Response</Badge>
                    <Badge variant="outline">Commercial</Badge>
                    <Button size="sm" variant="ghost">+ Add Specialty</Button>
                  </div>
                </div>
                <Button>Update Profile</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Channels</CardTitle>
                <CardDescription>Choose how you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch 
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                  </div>
                  <Switch 
                    id="sms-notifications"
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive browser and mobile push notifications</p>
                  </div>
                  <Switch 
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Types</CardTitle>
                <CardDescription>Control what notifications you receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>New Claims</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Payment Alerts</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Deadline Reminders</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Firm Updates</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Weekly Reports</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>System Maintenance</Label>
                  <Switch defaultChecked />
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Password & Authentication</CardTitle>
                <CardDescription>Manage your password and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Change Password</Button>
                
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Switch 
                      checked={twoFactorEnabled}
                      onCheckedChange={setTwoFactorEnabled}
                    />
                  </div>
                  {twoFactorEnabled && (
                    <Alert className="mt-2">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        Two-factor authentication is enabled. Use your authenticator app to complete login.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connected Devices</CardTitle>
                <CardDescription>Manage devices that have access to your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {connectedDevices.map((device) => {
                    const Icon = device.icon;
                    return (
                      <div key={device.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{device.device}</div>
                            <div className="text-sm text-muted-foreground">
                              {device.location} • {device.lastActive}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Revoke</Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Login History</CardTitle>
              <CardDescription>Recent login activity on your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {loginHistory.map((login, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <div className="text-sm font-medium">{login.date}</div>
                      <div className="text-xs text-muted-foreground">
                        {login.location} • {login.device}
                      </div>
                    </div>
                    <Badge variant={getStatusColor(login.status)}>
                      {login.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Visibility</CardTitle>
                <CardDescription>Control who can see your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Profile Visibility</Label>
                  <Select value={profileVisibility} onValueChange={setProfileVisibility}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public - Anyone can see your profile</SelectItem>
                      <SelectItem value="firms">Firms Only - Only connected firms can see your profile</SelectItem>
                      <SelectItem value="private">Private - Your profile is hidden</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data & Analytics</CardTitle>
                <CardDescription>Control how your data is used for analytics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Data Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share anonymized data to improve platform</p>
                  </div>
                  <Switch 
                    checked={dataSharing}
                    onCheckedChange={setDataSharing}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Analytics Tracking</Label>
                    <p className="text-sm text-muted-foreground">Allow analytics tracking for platform improvements</p>
                  </div>
                  <Switch 
                    checked={analyticsTracking}
                    onCheckedChange={setAnalyticsTracking}
                  />
                </div>
                <Button>Update Preferences</Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
              <CardDescription>Export or delete your personal data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Export Your Data</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download a copy of all your personal data in JSON format.
                  </p>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                </div>
                <div className="p-4 border rounded-lg border-destructive/20">
                  <h4 className="font-medium mb-2 text-destructive">Delete Account</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all associated data.
                  </p>
                  <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                    <DialogTrigger asChild>
                      <Button variant="destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Account
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Account</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your account and all associated data.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <Label htmlFor="confirm-delete">Type "DELETE" to confirm:</Label>
                        <Input id="confirm-delete" placeholder="DELETE" className="mt-1" />
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                          Cancel
                        </Button>
                        <Button variant="destructive">
                          Delete Account
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Integrations</CardTitle>
              <CardDescription>Connect external services to enhance your workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration, index) => {
                  const Icon = integration.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{integration.name}</div>
                          <div className="text-sm text-muted-foreground">{integration.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={integration.connected ? "default" : "outline"}>
                          {integration.status}
                        </Badge>
                        <Button 
                          variant={integration.connected ? "outline" : "default"}
                          size="sm"
                        >
                          {integration.connected ? "Disconnect" : "Connect"}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Subscription</CardTitle>
                <CardDescription>Manage your subscription plan and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">Pro Plan</h4>
                      <p className="text-sm text-muted-foreground">Monthly billing</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">$49.99</div>
                      <div className="text-sm text-muted-foreground">/month</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Next billing date:</span>
                      <span>January 1, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment method:</span>
                      <span>•••• 4242</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button>Change Plan</Button>
                  <Button variant="outline">Cancel Subscription</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage & Limits</CardTitle>
                <CardDescription>Track your usage against plan limits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Claims this month</span>
                    <span>127 / 500</span>
                  </div>
                  <Progress value={25.4} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Document storage</span>
                    <span>2.1 GB / 10 GB</span>
                  </div>
                  <Progress value={21} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Firm connections</span>
                    <span>8 / 25</span>
                  </div>
                  <Progress value={32} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>API calls</span>
                    <span>15,420 / 50,000</span>
                  </div>
                  <Progress value={30.84} />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5" />
                    <div>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 12/2027</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                </div>
                <Button variant="outline">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {billingHistory.map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">{invoice.description}</div>
                      <div className="text-sm text-muted-foreground">{invoice.date}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">{invoice.amount}</div>
                        <Badge variant={getStatusColor(invoice.status)}>
                          {invoice.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submit Feedback</CardTitle>
              <CardDescription>Help us improve by sharing your thoughts and suggestions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="feedback-type">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feature-request">Feature Request</SelectItem>
                      <SelectItem value="bug-report">Bug Report</SelectItem>
                      <SelectItem value="general-feedback">General Feedback</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="feedback-priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="feedback-subject">Subject</Label>
                <Input id="feedback-subject" placeholder="Brief description of your feedback" />
              </div>
              <div>
                <Label htmlFor="feedback-description">Description</Label>
                <Textarea 
                  id="feedback-description" 
                  placeholder="Please provide detailed feedback..." 
                  className="min-h-32"
                />
              </div>
              <div>
                <Label>Attachments</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center mt-1">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Drag and drop files here, or click to browse</p>
                </div>
              </div>
              <Button onClick={() => toast({ title: "Feedback submitted successfully!" })}>
                Submit Feedback
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get help from our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="support-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="account">Account Issues</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="support-priority">Priority</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="support-subject">Subject</Label>
                  <Input id="support-subject" placeholder="Brief description of your issue" />
                </div>
                <div>
                  <Label htmlFor="support-description">Description</Label>
                  <Textarea 
                    id="support-description" 
                    placeholder="Please describe your issue in detail..." 
                    className="min-h-32"
                  />
                </div>
                <Button onClick={() => toast({ title: "Support ticket created successfully!" })}>
                  Create Ticket
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Resources</CardTitle>
                <CardDescription>Quick access to help resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Knowledge Base
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Video Tutorials
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Community Forum
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    API Documentation
                  </Button>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm">
                    <div>Email: support@flexia.com</div>
                    <div>Phone: 1-800-FLEX-IA</div>
                    <div>Hours: Mon-Fri 8AM-8PM CST</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>My Support Tickets</CardTitle>
              <CardDescription>View and manage your support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{ticket.subject}</div>
                      <div className="text-sm text-muted-foreground">
                        {ticket.id} • {ticket.category} • Created {ticket.created}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                      <Badge variant={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="affiliate" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Program</CardTitle>
              <CardDescription>Earn commissions by referring new users to Flex.IA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Total Referrals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">23</div>
                    <p className="text-sm text-muted-foreground">Active referrals</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">$1,150</div>
                    <p className="text-sm text-muted-foreground">Total earned</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pending</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600">$450</div>
                    <p className="text-sm text-muted-foreground">Pending payout</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Your Referral Link</CardTitle>
                  <CardDescription>Share this link to earn commissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex gap-2">
                    <Input 
                      value="https://flexia.com/ref/johndoe" 
                      readOnly 
                      className="font-mono"
                    />
                    <Button 
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText("https://flexia.com/ref/johndoe");
                        toast({ title: "Link copied to clipboard!" });
                      }}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Earn $50 for each new user who signs up and subscribes to a paid plan.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;