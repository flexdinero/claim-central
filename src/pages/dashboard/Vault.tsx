import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Upload, Download, Share, Edit, Eye, Shield, Calendar, Building2, DollarSign, MapPin, Tag, Search, Grid, List, Plus, Filter } from "lucide-react";

const Vault = () => {
  const [selectedTab, setSelectedTab] = useState("documents");
  const [viewMode, setViewMode] = useState("grid");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const documentStats = [
    {
      title: "Total Documents",
      value: "156",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Active Documents",
      value: "142",
      icon: Shield,
      color: "text-green-600"
    },
    {
      title: "Expiring Soon",
      value: "8",
      icon: Calendar,
      color: "text-orange-600"
    },
    {
      title: "Expired Documents",
      value: "6",
      icon: Calendar,
      color: "text-red-600"
    }
  ];

  const contractStats = [
    {
      title: "Total Contracts",
      value: "23",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Active Contracts",
      value: "18",
      icon: Shield,
      color: "text-green-600"
    },
    {
      title: "Pending Signature",
      value: "3",
      icon: Edit,
      color: "text-orange-600"
    },
    {
      title: "Expired Contracts",
      value: "2",
      icon: Calendar,
      color: "text-red-600"
    }
  ];

  const documents = [
    {
      id: 1,
      name: "Texas Adjuster License",
      category: "License",
      status: "Active",
      expiryDate: "2025-06-15",
      size: "2.3 MB",
      type: "PDF",
      tags: ["Professional", "Required"],
      description: "Texas Department of Insurance Adjuster License",
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Florida Public Adjuster License",
      category: "License",
      status: "Active",
      expiryDate: "2025-03-20",
      size: "1.8 MB",
      type: "PDF",
      tags: ["Professional", "Required"],
      description: "Florida Department of Financial Services License",
      uploadDate: "2024-02-10"
    },
    {
      id: 3,
      name: "ICIAA Certification",
      category: "Certification",
      status: "Active",
      expiryDate: "2024-12-31",
      size: "1.2 MB",
      type: "PDF",
      tags: ["Professional", "Continuing Education"],
      description: "International Claims Investigation & Adjustment Association Certification",
      uploadDate: "2024-01-20"
    },
    {
      id: 4,
      name: "E&O Insurance Certificate",
      category: "Insurance",
      status: "Expiring Soon",
      expiryDate: "2024-09-15",
      size: "894 KB",
      type: "PDF",
      tags: ["Insurance", "Required"],
      description: "Errors & Omissions Insurance Certificate",
      uploadDate: "2023-09-15"
    },
    {
      id: 5,
      name: "Business License",
      category: "License",
      status: "Active",
      expiryDate: "2025-01-31",
      size: "756 KB",
      type: "PDF",
      tags: ["Business", "Legal"],
      description: "City Business Operating License",
      uploadDate: "2024-01-31"
    },
    {
      id: 6,
      name: "Background Check",
      category: "Background",
      status: "Expired",
      expiryDate: "2024-06-30",
      size: "1.5 MB",
      type: "PDF",
      tags: ["Background", "Security"],
      description: "Criminal Background Check Report",
      uploadDate: "2023-06-30"
    }
  ];

  const contracts = [
    {
      id: 1,
      title: "Premier Claims Solutions MSA",
      firm: "Premier Claims Solutions",
      status: "Active",
      effectiveDate: "2024-01-01",
      expiryDate: "2024-12-31",
      commissionRate: "15%",
      territory: "Texas, Louisiana",
      specialties: ["Property", "Auto"],
      size: "3.2 MB",
      type: "PDF",
      description: "Master Service Agreement with Premier Claims Solutions",
      uploadDate: "2024-01-01"
    },
    {
      id: 2,
      title: "National Insurance Adjusters Agreement",
      firm: "National Insurance Adjusters",
      status: "Active",
      effectiveDate: "2024-02-15",
      expiryDate: "2025-02-14",
      commissionRate: "12%",
      territory: "Florida, Georgia",
      specialties: ["CAT", "Property"],
      size: "2.8 MB",
      type: "PDF",
      description: "Independent Contractor Agreement",
      uploadDate: "2024-02-15"
    },
    {
      id: 3,
      title: "Rapid Response Claims Contract",
      firm: "Rapid Response Claims",
      status: "Pending Signature",
      effectiveDate: "2024-09-01",
      expiryDate: "2025-08-31",
      commissionRate: "18%",
      territory: "California, Nevada",
      specialties: ["Property", "Commercial"],
      size: "2.1 MB",
      type: "PDF",
      description: "New contractor agreement awaiting signature",
      uploadDate: "2024-08-15"
    },
    {
      id: 4,
      title: "Elite Adjusting Services NDA",
      firm: "Elite Adjusting Services",
      status: "Active",
      effectiveDate: "2024-03-01",
      expiryDate: "2027-02-28",
      commissionRate: "N/A",
      territory: "Multi-State",
      specialties: ["All"],
      size: "1.4 MB",
      type: "PDF",
      description: "Non-Disclosure Agreement",
      uploadDate: "2024-03-01"
    },
    {
      id: 5,
      title: "Global Claims Network Agreement",
      firm: "Global Claims Network",
      status: "Expired",
      effectiveDate: "2023-01-01",
      expiryDate: "2023-12-31",
      commissionRate: "14%",
      territory: "Texas",
      specialties: ["Property"],
      size: "2.9 MB",
      type: "PDF",
      description: "Expired contractor agreement - renewal pending",
      uploadDate: "2023-01-01"
    }
  ];

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'expiring soon':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'expired':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'pending signature':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const currentStats = selectedTab === "documents" ? documentStats : contractStats;
  const currentItems = selectedTab === "documents" ? documents : contracts;

  const filteredItems = currentItems.filter(item => {
    if (!item) return false;
    
    const itemName = ('name' in item) ? item.name : (item as any).title;
    const itemCategory = ('category' in item) ? item.category : (item as any).firm;
    
    const matchesSearch = itemName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === "all" || 
                       (selectedTab === "documents" && ('category' in item) && (item as any).category?.toLowerCase() === filterType) ||
                       (selectedTab === "contracts" && ('firm' in item) && (item as any).firm?.toLowerCase().includes(filterType));
    
    const matchesStatus = filterStatus === "all" || item.status?.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vault</h1>
          <p className="text-muted-foreground">Secure document and contract management</p>
        </div>
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Item</DialogTitle>
              <DialogDescription>Upload a document or create a new contract</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="document" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="document">Upload Document</TabsTrigger>
                <TabsTrigger value="contract">New Contract</TabsTrigger>
              </TabsList>
              <TabsContent value="document" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="docName">Document Name</Label>
                    <Input id="docName" placeholder="Enter document name" />
                  </div>
                  <div>
                    <Label htmlFor="docCategory">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="license">License</SelectItem>
                        <SelectItem value="certification">Certification</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="background">Background</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input id="tags" placeholder="Enter tags (comma separated)" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter description" />
                </div>
                <div>
                  <Label htmlFor="file">Upload File</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Drag and drop your file here, or click to browse</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="contract" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contractTitle">Contract Title</Label>
                    <Input id="contractTitle" placeholder="Enter contract title" />
                  </div>
                  <div>
                    <Label htmlFor="firm">Firm</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select firm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premier">Premier Claims Solutions</SelectItem>
                        <SelectItem value="national">National Insurance Adjusters</SelectItem>
                        <SelectItem value="rapid">Rapid Response Claims</SelectItem>
                        <SelectItem value="elite">Elite Adjusting Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="effectiveDate">Effective Date</Label>
                    <Input id="effectiveDate" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="contractExpiryDate">Expiry Date</Label>
                    <Input id="contractExpiryDate" type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contractDescription">Description</Label>
                  <Textarea id="contractDescription" placeholder="Enter contract description" />
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddDialog(false)}>Cancel</Button>
              <Button onClick={() => setShowAddDialog(false)}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search documents..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {selectedTab === "documents" ? (
                  <>
                    <SelectItem value="license">License</SelectItem>
                    <SelectItem value="certification">Certification</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="background">Background</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="premier">Premier Claims</SelectItem>
                    <SelectItem value="national">National Insurance</SelectItem>
                    <SelectItem value="rapid">Rapid Response</SelectItem>
                    <SelectItem value="elite">Elite Adjusting</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="expiring soon">Expiring Soon</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
                {selectedTab === "contracts" && <SelectItem value="pending signature">Pending</SelectItem>}
              </SelectContent>
            </Select>
            <div className="flex gap-2 ml-auto">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Vault Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Documents Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((doc) => {
                const itemName = 'name' in doc ? doc.name : doc.title;
                const itemCategory = 'category' in doc ? doc.category : doc.firm;
                
                return (
                <Card key={doc.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <CardTitle className="text-base">{itemName}</CardTitle>
                          <CardDescription>{itemCategory}</CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expires:</span>
                        <span>{doc.expiryDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size:</span>
                        <span>{doc.size}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedTab === "documents" && 'tags' in doc && doc.tags?.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setSelectedItem(doc);
                          setShowDetailsDialog(true);
                        }}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share className="h-3 w-3 mr-1" />
                        Share
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                );
              })}
            </div>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {filteredItems.map((doc, index) => {
                    const itemName = 'name' in doc ? doc.name : doc.title;
                    const itemCategory = 'category' in doc ? doc.category : doc.firm;
                    
                    return (
                    <div key={doc.id} className={`flex items-center justify-between p-4 ${index !== filteredItems.length - 1 ? 'border-b' : ''}`}>
                      <div className="flex items-center gap-4">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{itemName}</div>
                          <div className="text-sm text-muted-foreground">{itemCategory} • {doc.size} • Expires: {doc.expiryDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => {
                              setSelectedItem(doc);
                              setShowDetailsDialog(true);
                            }}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Share className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="contracts" className="space-y-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contracts Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((contract) => {
                const itemName = 'name' in contract ? contract.name : contract.title;
                const itemFirm = 'firm' in contract ? contract.firm : 'category' in contract ? contract.category : '';
                
                return (
                <Card key={contract.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <div>
                          <CardTitle className="text-base">{itemName}</CardTitle>
                          <CardDescription>{itemFirm}</CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(contract.status)}>
                        {contract.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expires:</span>
                        <span>{contract.expiryDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Commission:</span>
                        <span>{'commissionRate' in contract ? contract.commissionRate : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Territory:</span>
                        <span className="text-right">{'territory' in contract ? contract.territory : 'N/A'}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {('specialties' in contract ? contract.specialties : []).map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setSelectedItem(contract);
                          setShowDetailsDialog(true);
                        }}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share className="h-3 w-3 mr-1" />
                        Share
                      </Button>
                      {contract.status === "Pending Signature" && (
                        <Button size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Sign
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
                );
              })}
            </div>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {filteredItems.map((contract, index) => {
                    const itemName = 'name' in contract ? contract.name : contract.title;
                    const itemFirm = 'firm' in contract ? contract.firm : 'category' in contract ? contract.category : '';
                    const itemCommission = 'commissionRate' in contract ? contract.commissionRate : 'N/A';
                    
                    return (
                    <div key={contract.id} className={`flex items-center justify-between p-4 ${index !== filteredItems.length - 1 ? 'border-b' : ''}`}>
                      <div className="flex items-center gap-4">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{itemName}</div>
                          <div className="text-sm text-muted-foreground">{itemFirm} • {itemCommission} • Expires: {contract.expiryDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getStatusColor(contract.status)}>
                          {contract.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => {
                              setSelectedItem(contract);
                              setShowDetailsDialog(true);
                            }}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Share className="h-3 w-3" />
                          </Button>
                          {contract.status === "Pending Signature" && (
                            <Button size="sm" variant="ghost">
                              <Edit className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Item Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {'name' in selectedItem ? selectedItem.name : selectedItem.title}
            </DialogTitle>
            <DialogDescription>
              {selectedItem?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedItem && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedTab === "documents" ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Document Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Category:</span>
                        <span>{'category' in selectedItem ? selectedItem.category : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Status:</span>
                        <Badge className={getStatusColor(selectedItem.status)}>
                          {selectedItem.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Expiry Date:</span>
                        <span>{selectedItem.expiryDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">File Size:</span>
                        <span>{selectedItem.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Upload Date:</span>
                        <span>{selectedItem.uploadDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tags & Description</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="font-medium">Tags:</Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {(selectedTab === "documents" && 'tags' in selectedItem ? selectedItem.tags : [])?.map((tag: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="font-medium">Description:</Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {selectedItem.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Contract Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Firm:</span>
                        <span>{'firm' in selectedItem ? selectedItem.firm : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Status:</span>
                        <Badge className={getStatusColor(selectedItem.status)}>
                          {selectedItem.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Effective Date:</span>
                        <span>{selectedItem.effectiveDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Expiry Date:</span>
                        <span>{selectedItem.expiryDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Upload Date:</span>
                        <span>{selectedItem.uploadDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Terms & Conditions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Commission Rate:</span>
                        <span>{selectedItem && 'commissionRate' in selectedItem ? selectedItem.commissionRate : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Territory:</span>
                        <span>{selectedItem && 'territory' in selectedItem ? selectedItem.territory : 'N/A'}</span>
                      </div>
                      <div>
                        <span className="font-medium">Specialties:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {('specialties' in selectedItem ? selectedItem.specialties : [])?.map((specialty: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="font-medium">Description:</Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {selectedItem.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button variant="outline">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
            {selectedTab === "contracts" && selectedItem?.status === "Pending Signature" ? (
              <Button>
                <Edit className="mr-2 h-4 w-4" />
                Sign Contract
              </Button>
            ) : (
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Vault;