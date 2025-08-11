import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  DollarSign, 
  BarChart3, 
  Target, 
  Clock,
  Building2,
  TrendingUp,
  TrendingDown,
  FileText,
  AlertCircle,
  Download,
  Calendar
} from "lucide-react";

export default function Earnings() {
  const [dateRange, setDateRange] = useState("this-month");

  const keyMetrics = [
    { title: "Monthly Earnings", value: "$12,450", icon: DollarSign, change: "+18%", target: 85 },
    { title: "Yearly Earnings", value: "$98,340", icon: BarChart3, change: "+24%", target: 72 },
    { title: "Average Per Claim", value: "$850", icon: Target, change: "+5%", target: 90 },
    { title: "Pending Payments", value: "$4,200", icon: Clock, change: "-8%", target: 65 }
  ];

  const firmEarnings = [
    {
      firm: "ABC Insurance",
      monthly: "$3,200",
      yearly: "$28,400",
      claims: 38,
      avgPayout: "$750",
      paymentTerms: "30 days",
      status: "Good Standing",
      growth: "+15%"
    },
    {
      firm: "XYZ Adjusters", 
      monthly: "$2,800",
      yearly: "$22,100",
      claims: 26,
      avgPayout: "$850",
      paymentTerms: "45 days",
      status: "Excellent",
      growth: "+22%"
    },
    {
      firm: "DEF Claims",
      monthly: "$2,100",
      yearly: "$18,200",
      claims: 21,
      avgPayout: "$865",
      paymentTerms: "60 days",
      status: "Good Standing",
      growth: "-5%"
    }
  ];

  const claimTypes = [
    { type: "Property Damage", earnings: "$45,200", claims: 52, avgPayout: "$869", percentage: 46 },
    { type: "Auto Collision", earnings: "$28,100", claims: 34, avgPayout: "$827", percentage: 29 },
    { type: "Commercial Fire", earnings: "$15,800", claims: 18, avgPayout: "$878", percentage: 16 },
    { type: "Flood Damage", earnings: "$9,240", claims: 11, avgPayout: "$840", percentage: 9 }
  ];

  const payments = [
    {
      id: "PAY-001",
      firm: "ABC Insurance",
      amount: "$2,400",
      dueDate: "Jan 25, 2024",
      status: "pending",
      daysPending: 5
    },
    {
      id: "PAY-002",
      firm: "XYZ Adjusters",
      amount: "$1,800", 
      dueDate: "Jan 20, 2024",
      status: "overdue",
      daysPending: 10
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-500";
      case "overdue": return "bg-red-500";
      case "paid": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getGrowthIcon = (growth: string) => {
    return growth.startsWith("+") ? TrendingUp : TrendingDown;
  };

  const getGrowthColor = (growth: string) => {
    return growth.startsWith("+") ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Earnings Dashboard</h1>
          <p className="text-muted-foreground">Track your financial performance and growth</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-quarter">This Quarter</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground mb-2">
                  <span className={metric.change.startsWith('+') ? "text-green-600" : "text-red-600"}>
                    {metric.change}
                  </span> from last period
                </p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Target Progress</span>
                    <span>{metric.target}%</span>
                  </div>
                  <Progress value={metric.target} className="h-1" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="by-firm">By Firm</TabsTrigger>
          <TabsTrigger value="by-type">By Type</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="tax-info">Tax Info</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Earnings Trend</CardTitle>
                <CardDescription>Last 6 months performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  [Chart: Monthly earnings and claim volume]
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Highlights</CardTitle>
                <CardDescription>Key metrics overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Claims per Month</span>
                    <span className="font-medium">12.5</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Avg Days to Complete</span>
                    <span className="font-medium">3.2 days</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Client Satisfaction</span>
                    <span className="font-medium">4.7/5</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* By Firm Tab */}
        <TabsContent value="by-firm" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Earnings by Firm</CardTitle>
              <CardDescription>Detailed breakdown of performance by IA firm</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Firm</TableHead>
                    <TableHead>Monthly</TableHead>
                    <TableHead>Yearly</TableHead>
                    <TableHead>Claims</TableHead>
                    <TableHead>Avg Payout</TableHead>
                    <TableHead>Payment Terms</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {firmEarnings.map((firm) => {
                    const GrowthIcon = getGrowthIcon(firm.growth);
                    return (
                      <TableRow key={firm.firm}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium">{firm.firm}</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{firm.monthly}</TableCell>
                        <TableCell>{firm.yearly}</TableCell>
                        <TableCell>{firm.claims}</TableCell>
                        <TableCell>{firm.avgPayout}</TableCell>
                        <TableCell>{firm.paymentTerms}</TableCell>
                        <TableCell>
                          <Badge variant={firm.status === "Excellent" ? "default" : "secondary"}>
                            {firm.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className={`flex items-center gap-1 ${getGrowthColor(firm.growth)}`}>
                            <GrowthIcon className="w-3 h-3" />
                            <span className="text-sm font-medium">{firm.growth}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* By Type Tab */}
        <TabsContent value="by-type" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Earnings by Claim Type</CardTitle>
              <CardDescription>Revenue breakdown by different claim categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {claimTypes.map((type) => (
                  <div key={type.type} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{type.type}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{type.earnings}</div>
                        <div className="text-sm text-muted-foreground">
                          {type.claims} claims • {type.avgPayout} avg
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{type.percentage}% of total earnings</span>
                        <span>{type.earnings}</span>
                      </div>
                      <Progress value={type.percentage} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payments Tab */}
        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Schedule</CardTitle>
              <CardDescription>Track pending and overdue payments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Firm</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Days Pending</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.firm}</TableCell>
                      <TableCell className="font-medium">{payment.amount}</TableCell>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(payment.status)}`} />
                          <Badge variant={payment.status === "overdue" ? "destructive" : "secondary"}>
                            {payment.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {payment.status === "overdue" && <AlertCircle className="w-3 h-3 text-red-500" />}
                          <span className={payment.status === "overdue" ? "text-red-600 font-medium" : ""}>
                            {payment.daysPending} days
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tax Info Tab */}
        <TabsContent value="tax-info" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Year-to-Date Tax Summary</CardTitle>
                <CardDescription>2024 tax information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Earnings:</span>
                  <span className="font-medium">$98,340</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Business Expenses:</span>
                  <span className="font-medium">$12,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Net Income:</span>
                  <span className="font-medium">$85,890</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-muted-foreground">Estimated Tax:</span>
                  <span className="font-medium">$21,472</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quarterly Tax Estimates</CardTitle>
                <CardDescription>2024 estimated payments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { quarter: "Q1 2024", amount: "$5,368", status: "paid", dueDate: "Apr 15" },
                  { quarter: "Q2 2024", amount: "$5,368", status: "paid", dueDate: "Jun 15" },
                  { quarter: "Q3 2024", amount: "$5,368", status: "pending", dueDate: "Sep 15" },
                  { quarter: "Q4 2024", amount: "$5,368", status: "upcoming", dueDate: "Jan 15" }
                ].map((quarter) => (
                  <div key={quarter.quarter} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{quarter.quarter}</span>
                      <p className="text-sm text-muted-foreground">Due {quarter.dueDate}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{quarter.amount}</div>
                      <Badge variant={
                        quarter.status === "paid" ? "default" : 
                        quarter.status === "pending" ? "secondary" : "outline"
                      }>
                        {quarter.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Business efficiency indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Claims per Month</span>
                    <span className="font-medium">12.5 <span className="text-green-600">+8%</span></span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Average Days to Complete</span>
                    <span className="font-medium">3.2 days <span className="text-green-600">-12%</span></span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Client Satisfaction</span>
                    <span className="font-medium">4.7/5 <span className="text-green-600">+5%</span></span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Growth</CardTitle>
                <CardDescription>Growth and efficiency metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Referral Rate</span>
                    <span className="font-medium">28% <span className="text-green-600">+15%</span></span>
                  </div>
                  <Progress value={28} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Repeat Business</span>
                    <span className="font-medium">65% <span className="text-green-600">+10%</span></span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Efficiency Score</span>
                    <span className="font-medium">89% <span className="text-green-600">+7%</span></span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}