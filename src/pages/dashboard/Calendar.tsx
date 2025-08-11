import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  AlertCircle, 
  CheckCircle,
  Plus,
  MapPin,
  Phone,
  Mail,
  Navigation,
  Edit,
  Eye,
  Cloud,
  Thermometer,
  Wrench,
  AlertTriangle
} from "lucide-react";

export default function Calendar() {
  const [selectedInspection, setSelectedInspection] = useState<any>(null);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [viewMode, setViewMode] = useState("month");

  const stats = [
    { title: "Today's Inspections", value: "3", icon: CalendarIcon, change: "+1" },
    { title: "This Week", value: "12", icon: Clock, change: "+4" },
    { title: "High Priority", value: "2", icon: AlertCircle, change: "0" },
    { title: "Completed", value: "156", icon: CheckCircle, change: "+8" }
  ];

  const todayInspections = [
    {
      id: 1,
      title: "Residential Hail Damage",
      priority: "high",
      time: "9:00 AM",
      duration: "2 hours",
      location: "123 Oak Street, Austin, TX",
      claimId: "CLM-2024-001",
      contact: { name: "Sarah Johnson", phone: "(512) 555-0123" }
    },
    {
      id: 2,
      title: "Commercial Fire Assessment", 
      priority: "medium",
      time: "2:00 PM",
      duration: "3 hours",
      location: "456 Industrial Blvd, Austin, TX",
      claimId: "CLM-2024-002",
      contact: { name: "Mike Wilson", phone: "(512) 555-0456" }
    }
  ];

  const upcomingInspections = [
    {
      id: 3,
      title: "Water Damage Inspection",
      firm: "ABC Insurance",
      status: "scheduled",
      priority: "medium",
      date: "Jan 25, 2024",
      time: "10:00 AM",
      duration: "2 hours",
      location: "789 Maple Ave, Austin, TX",
      type: "Residential",
      claimId: "CLM-2024-003",
      contact: {
        name: "Emma Davis",
        phone: "(512) 555-0789",
        email: "emma.davis@email.com"
      },
      weather: "Partly cloudy, 72°F",
      description: "Kitchen water damage from dishwasher leak",
      specialInstructions: "Customer will be home after 10 AM. Dogs on property."
    },
    {
      id: 4,
      title: "Wind Damage Assessment",
      firm: "XYZ Adjusters",
      status: "confirmed",
      priority: "high",
      date: "Jan 26, 2024", 
      time: "8:30 AM",
      duration: "4 hours",
      location: "321 Pine St, Round Rock, TX",
      type: "Commercial",
      claimId: "CLM-2024-004",
      contact: {
        name: "Robert Martinez",
        phone: "(512) 555-0321",
        email: "r.martinez@business.com"
      },
      weather: "Clear, 68°F",
      description: "Roof damage from recent storm",
      specialInstructions: "Bring safety equipment for roof access."
    }
  ];

  const completedInspections = [
    {
      id: 5,
      title: "Flood Damage Assessment",
      status: "completed",
      date: "Jan 20, 2024",
      location: "555 River Rd, Austin, TX",
      firm: "DEF Claims",
      claimId: "CLM-2024-005"
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
      case "scheduled": return "bg-blue-500";
      case "confirmed": return "bg-green-500";
      case "completed": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const inspectionsByDay = {
    15: [{ title: "Hail Damage", priority: "high" }],
    20: [{ title: "Fire Assessment", priority: "medium" }],
    25: [{ title: "Water Damage", priority: "medium" }, { title: "Wind Damage", priority: "high" }],
    28: [{ title: "Roof Inspection", priority: "low" }]
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inspection Calendar</h1>
          <p className="text-muted-foreground">Smart scheduling and routing for property inspections</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={viewMode} onValueChange={setViewMode}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
          <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Schedule Inspection
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Schedule New Inspection</DialogTitle>
                <DialogDescription>
                  Create a new property inspection appointment
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Inspection Title</Label>
                  <Input id="title" placeholder="e.g., Hail Damage Assessment" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="claimId">Claim ID</Label>
                  <Input id="claimId" placeholder="CLM-2024-XXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firm">Firm</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select firm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="abc">ABC Insurance</SelectItem>
                      <SelectItem value="xyz">XYZ Adjusters</SelectItem>
                      <SelectItem value="def">DEF Claims</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="auto">Auto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input id="address" placeholder="123 Main Street, City, State ZIP" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input id="contactName" placeholder="Property owner name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input id="contactPhone" placeholder="(555) 123-4567" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe the damage or inspection details" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Textarea id="instructions" placeholder="Any special notes or requirements" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Schedule Inspection</Button>
                <Button variant="outline" className="flex-1">Save as Draft</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Quick Stats */}
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
                  <span className="text-green-600">{stat.change}</span> from last week
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Calendar Tabs */}
      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        {/* Calendar View Tab */}
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>January 2024</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-2 text-center font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day) => {
                  const dayInspections = inspectionsByDay[day as keyof typeof inspectionsByDay] || [];
                  const isToday = day === 22;
                  
                  return (
                    <div
                      key={day}
                      className={`min-h-[100px] p-2 border rounded-lg ${
                        isToday ? 'bg-primary/10 border-primary' : 'border-border'
                      }`}
                    >
                      <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : ''}`}>
                        {day}
                      </div>
                      <div className="space-y-1">
                        {dayInspections.map((inspection, index) => (
                          <div
                            key={index}
                            className={`text-xs p-1 rounded text-white ${getPriorityColor(inspection.priority)}`}
                          >
                            {inspection.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Today Tab */}
        <TabsContent value="today" className="space-y-4">
          <div className="grid gap-4">
            {todayInspections.map((inspection) => (
              <Card key={inspection.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(inspection.priority)}`} />
                      <div>
                        <h3 className="font-medium">{inspection.title}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {inspection.time} ({inspection.duration})
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {inspection.location}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {inspection.claimId} • {inspection.contact.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Navigation className="w-4 h-4 mr-1" />
                        Directions
                      </Button>
                      <Button size="sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Start
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Upcoming Tab */}
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4">
            {upcomingInspections.map((inspection) => (
              <Card key={inspection.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(inspection.priority)}`} />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{inspection.title}</h3>
                          <Badge variant="outline">{inspection.status}</Badge>
                          <Badge variant="secondary">{inspection.type}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{inspection.firm}</span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-3 h-3" />
                            {inspection.date} at {inspection.time}
                          </span>
                          <span>Duration: {inspection.duration}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {inspection.location} • {inspection.claimId}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedInspection(inspection)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Inspection Details</DialogTitle>
                            <DialogDescription>
                              Complete information about this inspection
                            </DialogDescription>
                          </DialogHeader>
                          {selectedInspection && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-6">
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="text-sm">Inspection Details</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Title:</span>
                                      <span>{selectedInspection.title}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Claim ID:</span>
                                      <span>{selectedInspection.claimId}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Type:</span>
                                      <Badge>{selectedInspection.type}</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Date & Time:</span>
                                      <span>{selectedInspection.date} at {selectedInspection.time}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Duration:</span>
                                      <span>{selectedInspection.duration}</span>
                                    </div>
                                  </CardContent>
                                </Card>

                                <Card>
                                  <CardHeader>
                                    <CardTitle className="text-sm">Location & Weather</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    <div className="flex items-start gap-2">
                                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                                      <span className="text-sm">{selectedInspection.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Cloud className="w-4 h-4 text-muted-foreground" />
                                      <span className="text-sm">{selectedInspection.weather}</span>
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
                                      <span>{selectedInspection.contact.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Phone className="w-3 h-3 text-muted-foreground" />
                                      <span className="text-sm">{selectedInspection.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Mail className="w-3 h-3 text-muted-foreground" />
                                      <span className="text-sm">{selectedInspection.contact.email}</span>
                                    </div>
                                  </CardContent>
                                </Card>

                                <Card>
                                  <CardHeader>
                                    <CardTitle className="text-sm">Equipment & Notes</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    <div className="flex items-center gap-2">
                                      <Wrench className="w-3 h-3 text-muted-foreground" />
                                      <span className="text-sm">Standard inspection kit</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <AlertTriangle className="w-3 h-3 text-muted-foreground" />
                                      <span className="text-sm">Safety equipment required</span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>

                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-sm">Description & Instructions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                  <div>
                                    <h4 className="font-medium text-sm mb-2">Description:</h4>
                                    <p className="text-sm text-muted-foreground">{selectedInspection.description}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-sm mb-2">Special Instructions:</h4>
                                    <p className="text-sm text-muted-foreground">{selectedInspection.specialInstructions}</p>
                                  </div>
                                </CardContent>
                              </Card>

                              <div className="flex gap-2">
                                <Button variant="outline" className="flex-1">
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit
                                </Button>
                                <Button variant="outline" className="flex-1">
                                  <Navigation className="w-4 h-4 mr-2" />
                                  Directions
                                </Button>
                                <Button className="flex-1">
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Mark Complete
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" variant="outline">
                        <Navigation className="w-4 h-4 mr-1" />
                        Directions
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
        </TabsContent>

        {/* Completed Tab */}
        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4">
            {completedInspections.map((inspection) => (
              <Card key={inspection.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <h3 className="font-medium">{inspection.title}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span>{inspection.firm}</span>
                          <span>{inspection.date}</span>
                          <span>{inspection.location}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{inspection.claimId}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Report
                    </Button>
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