import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare,
  Building,
  Users,
  Wrench,
  AlertTriangle,
  Send,
  Paperclip,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Calendar,
  Navigation
} from "lucide-react";

export default function Messages() {
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("priority");
  const [messageInput, setMessageInput] = useState("");

  const priorityContacts = [
    {
      id: 1,
      name: "John Smith",
      role: "Policyholder",
      avatar: "JS",
      lastMessage: "When can we schedule the inspection?",
      time: "2 min ago",
      unread: 3,
      priority: true,
      sentiment: "negative",
      claim: "HW-2025-08-451"
    }
  ];

  const firmContacts = [
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Claims Manager",
      company: "ABC Insurance",
      avatar: "SJ",
      lastMessage: "New assignment available",
      time: "1 hour ago",
      unread: 1,
      priority: false
    },
    {
      id: 3,
      name: "Mike Wilson",
      role: "Adjuster Coordinator", 
      company: "XYZ Adjusters",
      avatar: "MW",
      lastMessage: "Please confirm receipt",
      time: "3 hours ago",
      unread: 0,
      priority: false
    }
  ];

  const policyholderContacts = [
    {
      id: 4,
      name: "Emma Davis",
      role: "Homeowner",
      avatar: "ED",
      lastMessage: "Thank you for the update",
      time: "5 hours ago",
      unread: 0,
      priority: false,
      company: undefined,
      sentiment: undefined
    }
  ];

  const vendorContacts = [
    {
      id: 5,
      name: "Tom's Roofing",
      role: "Contractor",
      avatar: "TR",
      lastMessage: "Estimate attached",
      time: "1 day ago",
      unread: 0,
      priority: false,
      company: undefined,
      sentiment: undefined
    }
  ];

  const conversation = [
    {
      id: 1,
      sender: "John Smith",
      message: "Hi, I'm concerned about the delay in the inspection. It's been over a week since the initial contact.",
      time: "2:30 PM",
      type: "sms",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      message: "I understand your concern, Mr. Smith. I apologize for the delay. I can schedule your inspection for tomorrow morning at 9 AM. Would that work for you?",
      time: "2:35 PM", 
      type: "sms",
      isOwn: true
    },
    {
      id: 3,
      sender: "John Smith",
      message: "Yes, that works. Please confirm the address: 123 Oak Street, Austin, TX.",
      time: "2:40 PM",
      type: "sms",
      isOwn: false
    },
    {
      id: 4,
      sender: "Internal Note",
      message: "Customer seems frustrated but cooperative. Make sure to arrive on time tomorrow.",
      time: "2:45 PM",
      type: "internal",
      isOwn: true
    }
  ];

  const quickActions = [
    { label: "Confirm Inspection", icon: CheckCircle },
    { label: "Send ETA", icon: Navigation },
    { label: "Schedule Call", icon: Phone },
    { label: "Request Documents", icon: Paperclip }
  ];

  const aiSuggestions = [
    "I'll be there at 9 AM sharp tomorrow",
    "Can you please provide photos of the damage?",
    "I'm running 15 minutes late due to traffic"
  ];

  const getContactsByTab = (tab: string) => {
    switch (tab) {
      case "priority": return priorityContacts;
      case "firms": return firmContacts;
      case "policyholders": return policyholderContacts;
      case "vendors": return vendorContacts;
      default: return [];
    }
  };

  const currentContact = selectedContact || priorityContacts[0];

  return (
    <div className="h-[calc(100vh-theme(spacing.16))] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-6 border-b">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-sm text-muted-foreground">Centralized communication hub</p>
        </div>
      </div>

      {/* Centered Tab Navigation */}
      <div className="border-b">
        <div className="flex justify-center px-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-4 h-8 sm:h-10">
              <TabsTrigger value="priority" className="flex items-center gap-1 text-xs sm:text-sm px-1 sm:px-3">
                <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Priority</span>
                <span className="sm:hidden">Pri</span>
                <Badge className="ml-1 bg-destructive text-xs px-1">1</Badge>
              </TabsTrigger>
              <TabsTrigger value="firms" className="flex items-center gap-1 text-xs sm:text-sm px-1 sm:px-3">
                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Firms</span>
                <span className="sm:hidden">Frm</span>
                <Badge className="ml-1 variant-secondary text-xs px-1">2</Badge>
              </TabsTrigger>
              <TabsTrigger value="policyholders" className="flex items-center gap-1 text-xs sm:text-sm px-1 sm:px-3">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Policyholders</span>
                <span className="sm:hidden">Pol</span>
                <Badge className="ml-1 variant-secondary text-xs px-1">1</Badge>
              </TabsTrigger>
              <TabsTrigger value="vendors" className="flex items-center gap-1 text-xs sm:text-sm px-1 sm:px-3">
                <Wrench className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Vendors</span>
                <span className="sm:hidden">Ven</span>
                <Badge className="ml-1 variant-secondary text-xs px-1">0</Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex-1 flex min-h-0 flex-col lg:flex-row">
        {/* Left Sidebar - Contact List */}
        <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r bg-muted/30 max-h-64 lg:max-h-none overflow-hidden">
          <div className="p-2 sm:p-4 border-b">
            <Input placeholder="Search contacts..." className="text-sm" />
          </div>
          <ScrollArea className="flex-1">
            <div className="p-2 sm:p-4 space-y-2">
              {getContactsByTab(activeTab).map((contact) => (
                <Card 
                  key={contact.id}
                  className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                    currentContact?.id === contact.id ? 'bg-muted border-primary' : ''
                  } ${contact.priority ? 'border-primary border-2' : ''}`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <CardContent className="p-2 sm:p-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                          <AvatarFallback className="text-xs sm:text-sm">{contact.avatar}</AvatarFallback>
                        </Avatar>
                        {contact.priority && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-destructive rounded-full animate-pulse" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate text-sm sm:text-base">{contact.name}</p>
                          {contact.unread > 0 && (
                            <Badge className="bg-primary text-primary-foreground text-xs px-1">
                              {contact.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{contact.role}</p>
                        {contact.company && (
                          <p className="text-xs text-muted-foreground">{contact.company}</p>
                        )}
                        <p className="text-xs sm:text-sm text-muted-foreground truncate mt-1">
                          {contact.lastMessage}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-muted-foreground">{contact.time}</p>
                          {contact.sentiment === "negative" && (
                            <Badge variant="destructive" className="text-xs px-1">
                              Urgent
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Center Pane - Conversation */}
        <div className="flex-1 flex flex-col">
          {/* Conversation Header */}
          <div className="p-2 sm:p-4 border-b bg-background">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                  <AvatarFallback className="text-xs sm:text-sm">{currentContact.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-sm sm:text-base">{currentContact.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{currentContact.role}</p>
                  {currentContact.claim && (
                    <p className="text-xs text-muted-foreground">
                      Claim: {currentContact.claim}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-1 sm:gap-2">
                <Button size="sm" variant="outline" className="h-8 w-8 sm:w-auto sm:px-3">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline ml-2">Call</span>
                </Button>
                <Button size="sm" variant="outline" className="h-8 w-8 sm:w-auto sm:px-3">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline ml-2">Email</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Message Thread */}
          <ScrollArea className="flex-1 p-2 sm:p-4">
            <div className="space-y-3 sm:space-y-4">
              {conversation.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] sm:max-w-[70%] ${
                    message.type === 'internal' 
                      ? 'bg-amber-50 border border-amber-200 rounded-lg p-3' 
                      : `rounded-lg p-3 ${
                          message.isOwn 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`
                  }`}>
                    {message.type === 'internal' && (
                      <div className="flex items-center gap-1 mb-2 text-xs text-amber-600">
                        <MessageSquare className="w-3 h-3" />
                        Internal Note
                      </div>
                    )}
                    <p className="text-xs sm:text-sm">{message.message}</p>
                    <div className="flex items-center justify-between mt-1 sm:mt-2">
                      <span className="text-xs opacity-70">{message.sender}</span>
                      <span className="text-xs opacity-70">{message.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* AI Suggestions */}
          <div className="p-2 sm:p-3 border-t bg-muted/30">
            <p className="text-xs text-muted-foreground mb-2">AI Suggestions:</p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {aiSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  className="text-xs h-6 sm:h-7 px-2"
                  onClick={() => setMessageInput(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>

          {/* Composition Box */}
          <div className="p-2 sm:p-4 border-t">
            <div className="flex gap-2">
              <Textarea
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 min-h-[60px] sm:min-h-[80px] text-sm"
              />
              <div className="flex flex-col gap-1 sm:gap-2">
                <Button size="sm" variant="outline" className="h-8 w-8 sm:h-10 sm:w-10">
                  <Paperclip className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button size="sm" className="h-8 w-8 sm:h-10 sm:w-10">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - The Oracle Panel (Hidden on mobile) */}
        <div className="hidden xl:block w-80 border-l bg-muted/30 p-4 space-y-4">
          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">(512) 555-0123</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">john.smith@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">123 Oak Street, Austin, TX</span>
              </div>
            </CardContent>
          </Card>

          {/* Claim Snapshot */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Claim Snapshot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Claim ID:</span>
                <span className="text-sm font-medium">HW-2025-08-451</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge variant="outline">Scheduled</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deadline:</span>
                <span className="text-sm">Jan 25, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="text-sm">Hail Damage</span>
              </div>
            </CardContent>
          </Card>

          {/* Key Facts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Key Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm">
                <span className="font-medium">Inspection:</span> Tomorrow 9 AM
              </div>
              <div className="text-sm">
                <span className="font-medium">Address:</span> 123 Oak Street
              </div>
              <div className="text-sm">
                <span className="font-medium">Concern:</span> Frustrated about delay
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button key={action.label} variant="outline" size="sm" className="w-full justify-start">
                    <Icon className="w-4 h-4 mr-2" />
                    {action.label}
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          {/* Compliance Guard */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Compliance Guard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <p className="mb-2">Auto-appending license info:</p>
                <p className="bg-muted p-2 rounded text-xs">
                  Texas Adjuster License #TX-12345
                  <br />
                  Valid through 12/31/2024
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}