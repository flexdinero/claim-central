import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  Trophy, 
  DollarSign,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Building,
  AlertTriangle,
  Star,
  Eye,
  ExternalLink
} from "lucide-react";

export default function Claims() {
  const [selectedClaim, setSelectedClaim] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { title: "Total Claims", value: "156", icon: FileText, change: "+12%" },
    { title: "Available Claims", value: "23", icon: Clock, change: "+5%" },
    { title: "In Progress", value: "8", icon: AlertTriangle, change: "-2%" },
    { title: "Completed", value: "125", icon: CheckCircle, change: "+15%" },
    { title: "Total Earned", value: "$45,200", icon: DollarSign, change: "+22%" }
  ];

  const availableClaims = [
    {
      id: "CLM-2024-001",
      insured: "Johnson Residence",
      firm: "ABC Insurance",
      type: "Hail Damage",
      location: "Austin, TX",
      amount: "$2,500",
      deadline: "3 days",
      priority: "high",
      description: "Residential property damage from recent hailstorm",
      address: "123 Oak Street, Austin, TX 78701",
      contact: { name: "Sarah Johnson", phone: "(512) 555-0123", email: "sarah.j@email.com" }
    },
    {
      id: "CLM-2024-002", 
      insured: "Miller Auto Shop",
      firm: "XYZ Adjusters",
      type: "Commercial Fire",
      location: "Dallas, TX",
      amount: "$8,750",
      deadline: "5 days",
      priority: "medium",
      description: "Fire damage to commercial auto repair facility",
      address: "456 Industrial Blvd, Dallas, TX 75201",
      contact: { name: "Mike Miller", phone: "(214) 555-0456", email: "mike@millerauto.com" }
    }
  ];

  const myClaims = [
    {
      id: "CLM-2024-003",
      insured: "Thompson Home",
      firm: "DEF Claims",
      type: "Water Damage",
      status: "In Progress",
      priority: "medium",
      assignedDate: "2024-01-15",
      lastUpdate: "2024-01-18"
    }
  ];

  const completedClaims = [
    {
      id: "CLM-2024-004",
      insured: "Wilson Property",
      firm: "ABC Insurance", 
      type: "Wind Damage",
      status: "Completed",
      completedDate: "2024-01-10",
      efficiency: 92,
      accuracy: 98,
      bonus: "$150",
      rating: 4.8
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-amber-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-500";
      case "In Progress": return "bg-amber-500";
      case "Completed": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Claims Management</h1>
          <p className="text-muted-foreground">Manage all your claims from 150+ partnered firms</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                placeholder="Search claims..."
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
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hail">Hail Damage</SelectItem>
                <SelectItem value="fire">Fire Damage</SelectItem>
                <SelectItem value="water">Water Damage</SelectItem>
                <SelectItem value="wind">Wind Damage</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Main Claims Tabs */}
      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="available">Available Claims</TabsTrigger>
          <TabsTrigger value="my-claims">My Claims</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        {/* Available Claims Tab */}
        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4">
            {availableClaims.map((claim) => (
              <Card key={claim.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(claim.priority)}`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{claim.id}</span>
                          <Badge variant="outline">{claim.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{claim.insured}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building className="w-3 h-3" />
                            {claim.firm}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {claim.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary">{claim.amount}</div>
                      <div className="text-sm text-muted-foreground">Due in {claim.deadline}</div>
                      <div className="flex gap-2 mt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setSelectedClaim(claim)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Claim Details - {claim.id}</DialogTitle>
                              <DialogDescription>
                                Complete information about this claim
                              </DialogDescription>
                            </DialogHeader>
                            {selectedClaim && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="text-sm">Claim Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">Claim ID:</span>
                                        <span>{selectedClaim.id}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">Type:</span>
                                        <Badge>{selectedClaim.type}</Badge>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">Amount:</span>
                                        <span className="font-semibold">{selectedClaim.amount}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">Deadline:</span>
                                        <span>{selectedClaim.deadline}</span>
                                      </div>
                                    </CardContent>
                                  </Card>

                                  <Card>
                                    <CardHeader>
                                      <CardTitle className="text-sm">Contact Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">Name:</span>
                                        <span>{selectedClaim.contact.name}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">Phone:</span>
                                        <span>{selectedClaim.contact.phone}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">Email:</span>
                                        <span>{selectedClaim.contact.email}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">Address:</span>
                                        <span className="text-right text-sm">{selectedClaim.address}</span>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>

                                <Card>
                                  <CardHeader>
                                    <CardTitle className="text-sm">Description</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <p className="text-sm">{selectedClaim.description}</p>
                                  </CardContent>
                                </Card>

                                <div className="flex gap-2">
                                  <Button className="flex-1">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Claim Now
                                  </Button>
                                  <Button variant="outline">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Schedule
                                  </Button>
                                  <Button variant="outline">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Portal
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button size="sm">Claim Now</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* My Claims Tab */}
        <TabsContent value="my-claims" className="space-y-4">
          <div className="grid gap-4">
            {myClaims.map((claim) => (
              <Card key={claim.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(claim.status)}`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{claim.id}</span>
                          <Badge variant="secondary">{claim.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{claim.insured}</p>
                        <p className="text-xs text-muted-foreground">{claim.firm} • {claim.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Assigned: {claim.assignedDate}</p>
                      <p className="text-sm text-muted-foreground">Last update: {claim.lastUpdate}</p>
                      <Button size="sm" className="mt-2">Update Progress</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* In Progress Tab */}
        <TabsContent value="in-progress" className="space-y-4">
          <div className="text-center py-12">
            <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No claims in progress</h3>
            <p className="text-muted-foreground">Claims you're actively working on will appear here.</p>
          </div>
        </TabsContent>

        {/* Completed Tab */}
        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4">
            {completedClaims.map((claim) => (
              <Card key={claim.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{claim.id}</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {claim.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{claim.insured}</p>
                        <p className="text-xs text-muted-foreground">{claim.firm} • {claim.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm mb-2">Completed: {claim.completedDate}</p>
                      <div className="flex gap-4 text-xs">
                        <span>Efficiency: {claim.efficiency}%</span>
                        <span>Accuracy: {claim.accuracy}%</span>
                        <span>Bonus: {claim.bonus}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs">{claim.rating}</span>
                      </div>
                      <Button size="sm" variant="outline" className="mt-2">View Report</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}