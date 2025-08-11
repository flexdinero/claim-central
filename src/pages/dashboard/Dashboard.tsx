import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  FileText, 
  DollarSign, 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  Calendar,
  MessageSquare,
  Star,
  ArrowUpRight,
  Plus
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your claims today.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Widget
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MTD Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-600">3 urgent</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2%</span> this week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Claims Feed Widget */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Recent Claims
                </CardTitle>
                <CardDescription>Latest assignments from your network</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                id: "CLM-001",
                insured: "Smith Property",
                firm: "ABC Adjusters",
                type: "Hail Damage",
                deadline: "2 days",
                status: "New",
                urgency: "high"
              },
              {
                id: "CLM-002", 
                insured: "Johnson Auto",
                firm: "XYZ Insurance",
                type: "Auto Collision",
                deadline: "5 days",
                status: "Scheduled",
                urgency: "medium"
              },
              {
                id: "CLM-003",
                insured: "Miller Residence", 
                firm: "DEF Claims",
                type: "Water Damage",
                deadline: "1 week",
                status: "In Progress",
                urgency: "low"
              }
            ].map((claim) => (
              <div key={claim.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    claim.urgency === 'high' ? 'bg-red-500' :
                    claim.urgency === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{claim.id}</span>
                      <Badge variant="secondary" className="text-xs">{claim.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{claim.insured} • {claim.type}</p>
                    <p className="text-xs text-muted-foreground">{claim.firm}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{claim.deadline}</p>
                  <Button size="sm" variant="outline" className="mt-2">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your appointments and tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                time: "9:00 AM",
                title: "Property Inspection",
                location: "123 Main St",
                type: "inspection"
              },
              {
                time: "2:00 PM", 
                title: "Submit Report",
                location: "CLM-001",
                type: "task"
              },
              {
                time: "4:30 PM",
                title: "Client Call", 
                location: "Johnson Auto",
                type: "call"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-sm font-medium min-w-[70px]">{item.time}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.location}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {item.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Recent Messages
            </CardTitle>
            <CardDescription>Latest communications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                from: "Sarah Johnson",
                message: "Can we reschedule tomorrow's inspection?",
                time: "10 min ago",
                unread: true
              },
              {
                from: "ABC Adjusters", 
                message: "New claim assignment CLM-004",
                time: "1 hour ago",
                unread: true
              },
              {
                from: "Mike Wilson",
                message: "Photos uploaded for review",
                time: "2 hours ago",
                unread: false
              }
            ].map((message, index) => (
              <div key={index} className="flex items-start gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>{message.from.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium truncate">{message.from}</p>
                    {message.unread && <div className="w-2 h-2 bg-primary rounded-full" />}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{message.message}</p>
                  <p className="text-xs text-muted-foreground">{message.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Firms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Top Performing Firms
            </CardTitle>
            <CardDescription>Your most valuable partnerships</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "ABC Adjusters", earnings: "$8,250", claims: 12, rating: 4.8 },
              { name: "XYZ Insurance", earnings: "$6,400", claims: 9, rating: 4.6 },
              { name: "DEF Claims", earnings: "$4,200", claims: 7, rating: 4.9 }
            ].map((firm, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{firm.name}</p>
                  <p className="text-xs text-muted-foreground">{firm.claims} claims</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{firm.earnings}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs">{firm.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-2" variant="outline">
              <Plus className="w-4 h-4" />
              Create New Claim
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <Calendar className="w-4 h-4" />
              Schedule Inspection
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <DollarSign className="w-4 h-4" />
              Generate Invoice
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <FileText className="w-4 h-4" />
              Upload Documents
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}