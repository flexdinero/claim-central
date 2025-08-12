import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare, HelpCircle, Phone, Mail, Clock, ExternalLink, Send, FileText, Zap, CreditCard, Users, Search, ChevronRight, Plus } from "lucide-react";
import { toast } from "sonner";

const Support = () => {
  const [showNewTicketDialog, setShowNewTicketDialog] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [showTicketDialog, setShowTicketDialog] = useState(false);

  const supportTickets = [
    {
      id: "TICK-001",
      subject: "Issue with claim sync from Premier Claims",
      category: "Technical",
      priority: "High",
      status: "Open",
      created: "2024-12-20 14:30",
      lastUpdate: "2024-12-21 09:15",
      messages: [
        {
          id: 1,
          sender: "You",
          message: "I'm having trouble syncing claims from Premier Claims Solutions. The sync hasn't worked for the past 2 days.",
          timestamp: "2024-12-20 14:30",
          isSupport: false
        },
        {
          id: 2,
          sender: "Support Team",
          message: "Thank you for reporting this issue. We're investigating the Premier Claims integration. Can you please provide your firm connection ID?",
          timestamp: "2024-12-20 16:45",
          isSupport: true
        },
        {
          id: 3,
          sender: "You",
          message: "My connection ID is PC-12345. The last successful sync was on December 18th at 11:30 PM.",
          timestamp: "2024-12-21 09:15",
          isSupport: false
        }
      ]
    },
    {
      id: "TICK-002",
      subject: "Billing inquiry about Pro Plan features",
      category: "Billing",
      priority: "Medium",
      status: "Resolved",
      created: "2024-12-18 10:20",
      lastUpdate: "2024-12-19 13:45",
      messages: [
        {
          id: 1,
          sender: "You",
          message: "I upgraded to Pro Plan but don't see all the advertised features. Specifically, I can't find the advanced analytics section.",
          timestamp: "2024-12-18 10:20",
          isSupport: false
        },
        {
          id: 2,
          sender: "Support Team",
          message: "The Pro Plan features can take up to 24 hours to activate. Please try logging out and back in. If the issue persists, let us know.",
          timestamp: "2024-12-18 14:30",
          isSupport: true
        },
        {
          id: 3,
          sender: "You",
          message: "Perfect! All features are now available. Thank you for the quick response.",
          timestamp: "2024-12-19 13:45",
          isSupport: false
        }
      ]
    },
    {
      id: "TICK-003",
      subject: "Feature request: Bulk claim import",
      category: "General",
      priority: "Low",
      status: "In Progress",
      created: "2024-12-15 16:45",
      lastUpdate: "2024-12-16 11:20",
      messages: [
        {
          id: 1,
          sender: "You",
          message: "It would be great to have a bulk import feature for claims from CSV files. This would save a lot of time when onboarding with new firms.",
          timestamp: "2024-12-15 16:45",
          isSupport: false
        },
        {
          id: 2,
          sender: "Support Team",
          message: "Thank you for the suggestion! This is actually on our development roadmap for Q1 2025. We'll keep you updated on the progress.",
          timestamp: "2024-12-16 11:20",
          isSupport: true
        }
      ]
    },
    {
      id: "TICK-004",
      subject: "Mobile app not syncing properly",
      category: "Technical",
      priority: "Medium",
      status: "Waiting for Response",
      created: "2024-12-14 08:15",
      lastUpdate: "2024-12-17 14:30",
      messages: [
        {
          id: 1,
          sender: "You",
          message: "The mobile app isn't syncing with the web version. Changes I make on mobile don't appear on desktop.",
          timestamp: "2024-12-14 08:15",
          isSupport: false
        },
        {
          id: 2,
          sender: "Support Team",
          message: "Can you please tell us which mobile device and app version you're using? Also, when did this issue start?",
          timestamp: "2024-12-17 14:30",
          isSupport: true
        }
      ]
    }
  ];

  const knowledgeBaseArticles = [
    {
      category: "Getting Started",
      articles: [
        { title: "How to connect your first IA firm", icon: FileText },
        { title: "Setting up your profile and licenses", icon: FileText },
        { title: "Understanding the dashboard layout", icon: FileText },
        { title: "Creating your first claim report", icon: FileText },
        { title: "Mobile app setup and sync", icon: FileText }
      ]
    },
    {
      category: "Common Issues",
      articles: [
        { title: "Troubleshooting sync problems", icon: Zap },
        { title: "Fixing login and authentication issues", icon: Zap },
        { title: "Resolving payment and billing problems", icon: Zap },
        { title: "Handling document upload errors", icon: Zap },
        { title: "Managing firm connection timeouts", icon: Zap }
      ]
    },
    {
      category: "Billing & Payments",
      articles: [
        { title: "Understanding your subscription plan", icon: CreditCard },
        { title: "How to upgrade or downgrade plans", icon: CreditCard },
        { title: "Payment methods and billing cycles", icon: CreditCard },
        { title: "Invoice and receipt management", icon: CreditCard },
        { title: "Cancellation and refund policies", icon: CreditCard }
      ]
    },
    {
      category: "Account Management",
      articles: [
        { title: "Updating your profile information", icon: Users },
        { title: "Managing notification preferences", icon: Users },
        { title: "Security settings and two-factor auth", icon: Users },
        { title: "Data export and account deletion", icon: Users },
        { title: "Privacy settings and data sharing", icon: Users }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'destructive';
      case 'in progress': return 'default';
      case 'waiting for response': return 'outline';
      case 'resolved': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Support Center</h1>
          <p className="text-muted-foreground">Get help and manage your support requests</p>
        </div>
        <Dialog open={showNewTicketDialog} onOpenChange={setShowNewTicketDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create Support Ticket</DialogTitle>
              <DialogDescription>Describe your issue and we'll help you resolve it</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ticketCategory">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="ticketPriority">Priority</Label>
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
                <Label htmlFor="ticketSubject">Subject</Label>
                <Input id="ticketSubject" placeholder="Brief description of your issue" />
              </div>
              <div>
                <Label htmlFor="ticketDescription">Description</Label>
                <Textarea 
                  id="ticketDescription" 
                  placeholder="Please provide detailed information about your issue..."
                  className="min-h-32"
                />
              </div>
              <div>
                <Label>Attachments (Optional)</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center mt-1">
                  <FileText className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Drop files here or click to browse</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowNewTicketDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                setShowNewTicketDialog(false);
                toast.success("Support ticket created successfully! We'll respond within 24 hours.");
              }}>
                <Send className="mr-2 h-4 w-4" />
                Create Ticket
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Main Support Tabs */}
      <Tabs defaultValue="tickets" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>View and manage your support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div 
                    key={ticket.id} 
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setShowTicketDialog(true);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">{ticket.subject}</div>
                        <div className="text-sm text-muted-foreground">
                          {ticket.id} • {ticket.category} • Created {ticket.created.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        <Badge variant={getPriorityColor(ticket.priority)}>
                          {ticket.priority}
                        </Badge>
                        <Badge variant={getStatusColor(ticket.status)}>
                          {ticket.status}
                        </Badge>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Ticket Details Dialog */}
          <Dialog open={showTicketDialog} onOpenChange={setShowTicketDialog}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {selectedTicket?.subject}
                </DialogTitle>
                <DialogDescription>
                  Ticket {selectedTicket?.id} • Created {selectedTicket?.created}
                </DialogDescription>
              </DialogHeader>
              
              {selectedTicket && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge variant={getPriorityColor(selectedTicket.priority)}>
                      {selectedTicket.priority} Priority
                    </Badge>
                    <Badge variant={getStatusColor(selectedTicket.status)}>
                      {selectedTicket.status}
                    </Badge>
                    <Badge variant="outline">
                      {selectedTicket.category}
                    </Badge>
                  </div>

                  <div className="border rounded-lg p-4 max-h-96 overflow-y-auto">
                    <h4 className="font-medium mb-4">Conversation History</h4>
                    <div className="space-y-4">
                      {selectedTicket.messages.map((message: any) => (
                        <div key={message.id} className={`flex gap-3 ${message.isSupport ? 'flex-row' : 'flex-row-reverse'}`}>
                          <div className={`max-w-[70%] rounded-lg p-3 ${message.isSupport 
                            ? 'bg-blue-50 border border-blue-200' 
                            : 'bg-gray-50 border border-gray-200'
                          }`}>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium">{message.sender}</span>
                              <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                            </div>
                            <p className="text-sm">{message.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedTicket.status !== 'Resolved' && (
                    <div className="space-y-2">
                      <Label htmlFor="replyMessage">Add Reply</Label>
                      <Textarea 
                        id="replyMessage"
                        placeholder="Type your message here..."
                        className="min-h-24"
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => toast.success("Reply sent successfully!")}>
                          <Send className="mr-2 h-3 w-3" />
                          Send Reply
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="mr-2 h-3 w-3" />
                          Attach File
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Find answers to common questions and learn how to use Flex.IA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    className="pl-10" 
                    placeholder="Search articles..." 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {knowledgeBaseArticles.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.articles.map((article, articleIndex) => {
                          const Icon = article.icon;
                          return (
                            <div 
                              key={articleIndex}
                              className="flex items-center gap-3 p-2 rounded hover:bg-muted/50 cursor-pointer"
                            >
                              <Icon className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{article.title}</span>
                              <ChevronRight className="h-3 w-3 text-muted-foreground ml-auto" />
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-muted-foreground">support@flexia.com</div>
                    <div className="text-xs text-muted-foreground">Response within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Phone Support</div>
                    <div className="text-sm text-muted-foreground">1-800-FLEX-IA (353-9421)</div>
                    <div className="text-xs text-muted-foreground">Monday - Friday, 8AM - 8PM CST</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 8:00 PM CST</div>
                    <div className="text-xs text-muted-foreground">Saturday: 9:00 AM - 5:00 PM CST</div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="font-medium mb-2">Emergency Contact</div>
                  <div className="text-sm text-muted-foreground">
                    For critical system issues affecting multiple users
                  </div>
                  <div className="text-sm font-medium">1-800-FLEX-911</div>
                  <div className="text-xs text-muted-foreground">Available 24/7</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Resources</CardTitle>
                <CardDescription>Helpful links and resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Video Tutorials
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  User Manual (PDF)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Community Forum
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  API Documentation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  System Status Page
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Feature Roadmap
                </Button>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <strong>Need immediate help?</strong><br />
                    Check our Status Page first to see if there are any known issues affecting the platform.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;