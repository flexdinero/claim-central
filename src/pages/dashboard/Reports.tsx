import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DollarSign, FileText, Target, Building2, MapPin, Calendar as CalendarIcon, Download, Share, RefreshCw, TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Reports = () => {
  const [timePeriod, setTimePeriod] = useState("month");
  const [selectedFirm, setSelectedFirm] = useState("all");
  const [dateRange, setDateRange] = useState<any>(null);

  const overviewMetrics = [
    {
      title: "Total Earnings",
      value: "$247,680",
      change: "+18.5%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Total Claims",
      value: "1,247",
      change: "+12.3%",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Average per Claim",
      value: "$198.64",
      change: "+5.2%",
      icon: Target,
      color: "text-purple-600"
    },
    {
      title: "Active Firms",
      value: "8",
      change: "+1",
      icon: Building2,
      color: "text-orange-600"
    }
  ];

  const performanceMetrics = [
    {
      title: "Avg Completion Time",
      value: "4.2 days",
      change: "-0.8 days",
      trend: "down",
      target: "< 5 days"
    },
    {
      title: "Client Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      target: "> 4.5"
    },
    {
      title: "Accuracy Rate",
      value: "97.2%",
      change: "+1.1%",
      trend: "up",
      target: "> 95%"
    },
    {
      title: "Bonus Earnings",
      value: "$12,450",
      change: "+$2,340",
      trend: "up",
      target: "$10,000"
    }
  ];

  const monthlyEarningsData = [
    { month: "Jan", earnings: 18420, claims: 89 },
    { month: "Feb", earnings: 22150, claims: 107 },
    { month: "Mar", earnings: 19800, claims: 94 },
    { month: "Apr", earnings: 25600, claims: 128 },
    { month: "May", earnings: 28940, claims: 145 },
    { month: "Jun", earnings: 32180, claims: 162 },
    { month: "Jul", earnings: 29450, claims: 148 },
    { month: "Aug", earnings: 31200, claims: 156 },
    { month: "Sep", earnings: 27800, claims: 139 },
    { month: "Oct", earnings: 30500, claims: 152 },
    { month: "Nov", earnings: 33200, claims: 167 },
    { month: "Dec", earnings: 28400, claims: 142 }
  ];

  const claimTypesData = [
    { name: "Property", value: 45, color: "#3B82F6" },
    { name: "Auto", value: 28, color: "#10B981" },
    { name: "Commercial", value: 15, color: "#F59E0B" },
    { name: "Flood", value: 8, color: "#EF4444" },
    { name: "Other", value: 4, color: "#8B5CF6" }
  ];

  const firmPerformance = [
    {
      firm: "Premier Claims Solutions",
      earnings: "$68,420",
      avgRating: 4.9,
      efficiency: 96,
      avgPerClaim: "$285"
    },
    {
      firm: "National Insurance Adjusters",
      earnings: "$52,180",
      avgRating: 4.7,
      efficiency: 92,
      avgPerClaim: "$268"
    },
    {
      firm: "Rapid Response Claims",
      earnings: "$41,950",
      avgRating: 4.6,
      efficiency: 89,
      avgPerClaim: "$245"
    },
    {
      firm: "Elite Adjusting Services",
      earnings: "$38,230",
      avgRating: 4.8,
      efficiency: 94,
      avgPerClaim: "$275"
    },
    {
      firm: "Global Claims Network",
      earnings: "$34,680",
      avgRating: 4.5,
      efficiency: 87,
      avgPerClaim: "$232"
    },
    {
      firm: "Catastrophe Response Team",
      earnings: "$12,220",
      avgRating: 4.4,
      efficiency: 85,
      avgPerClaim: "$195"
    }
  ];

  const territoryPerformance = [
    {
      state: "Texas",
      claims: 342,
      earnings: "$89,420",
      avgPerClaim: "$261"
    },
    {
      state: "Florida",
      claims: 298,
      earnings: "$76,540",
      avgPerClaim: "$257"
    },
    {
      state: "California",
      claims: 245,
      earnings: "$68,230",
      avgPerClaim: "$278"
    },
    {
      state: "Louisiana",
      claims: 189,
      earnings: "$45,890",
      avgPerClaim: "$243"
    },
    {
      state: "Georgia",
      claims: 156,
      earnings: "$38,750",
      avgPerClaim: "$248"
    },
    {
      state: "North Carolina",
      claims: 134,
      earnings: "$32,180",
      avgPerClaim: "$240"
    },
    {
      state: "South Carolina",
      claims: 89,
      earnings: "$21,450",
      avgPerClaim: "$241"
    }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? TrendingUp : TrendingDown;
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive performance and financial reports</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Report Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
          <CardDescription>Customize your report parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <Label htmlFor="timePeriod">Time Period</Label>
              <Select value={timePeriod} onValueChange={setTimePeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="firm">IA Firm</Label>
              <Select value={selectedFirm} onValueChange={setSelectedFirm}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Firms</SelectItem>
                  <SelectItem value="premier">Premier Claims Solutions</SelectItem>
                  <SelectItem value="national">National Insurance Adjusters</SelectItem>
                  <SelectItem value="rapid">Rapid Response Claims</SelectItem>
                  <SelectItem value="elite">Elite Adjusting Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {timePeriod === "custom" && (
              <div>
                <Label>Custom Date Range</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateRange ? `${dateRange.from?.toLocaleDateString()} - ${dateRange.to?.toLocaleDateString()}` : "Select dates"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            )}
            <Button>
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Report Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="firms">Firms</TabsTrigger>
          <TabsTrigger value="territory">Territory</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className={`text-xs ${metric.color}`}>
                      {metric.change} from last period
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => {
              const TrendIcon = getTrendIcon(metric.trend);
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <TrendIcon className={`h-4 w-4 ${getTrendColor(metric.trend)}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className={`text-xs ${getTrendColor(metric.trend)}`}>
                      {metric.change} from last period
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Target: {metric.target}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Earnings Trend</CardTitle>
                <CardDescription>Earnings and claim volume over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyEarningsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="earnings" fill="#3B82F6" name="Earnings ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Claim Types Distribution</CardTitle>
                <CardDescription>Breakdown by claim category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={claimTypesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {claimTypesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Analysis</CardTitle>
              <CardDescription>Detailed breakdown of your earnings performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyEarningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="earnings" fill="#10B981" name="Monthly Earnings ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Highest Earning Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">$33,200</div>
                <p className="text-muted-foreground">November 2024</p>
                <p className="text-sm text-muted-foreground mt-2">167 claims processed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Average Monthly Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">$27,310</div>
                <p className="text-muted-foreground">12-month average</p>
                <p className="text-sm text-muted-foreground mt-2">137 claims average</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Growth Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">+18.5%</div>
                <p className="text-muted-foreground">Year over year</p>
                <p className="text-sm text-muted-foreground mt-2">Consistently growing</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => {
              const TrendIcon = getTrendIcon(metric.trend);
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendIcon className={`h-5 w-5 ${getTrendColor(metric.trend)}`} />
                      {metric.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{metric.value}</div>
                    <div className={`text-sm ${getTrendColor(metric.trend)} mt-1`}>
                      {metric.change} from last period
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Target: {metric.target}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Track your key performance indicators over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Completion Time (Target: &lt; 5 days)</span>
                    <span>4.2 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Client Satisfaction (Target: &gt; 4.5)</span>
                    <span>4.8/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Accuracy Rate (Target: &gt; 95%)</span>
                    <span>97.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '97.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Bonus Achievement (Target: $10,000)</span>
                    <span>$12,450</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="firms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Firm Performance Comparison</CardTitle>
              <CardDescription>Compare your performance across different IA firms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {firmPerformance.map((firm, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{firm.firm}</div>
                          <div className="text-sm text-muted-foreground">
                            Rating: {firm.avgRating}/5 • Efficiency: {firm.efficiency}%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{firm.earnings}</div>
                      <div className="text-sm text-muted-foreground">{firm.avgPerClaim} avg/claim</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="territory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Territory Performance</CardTitle>
              <CardDescription>Performance breakdown by geographic region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {territoryPerformance.map((territory, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium">{territory.state}</div>
                          <div className="text-sm text-muted-foreground">
                            {territory.claims} claims processed
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{territory.earnings}</div>
                      <div className="text-sm text-muted-foreground">{territory.avgPerClaim} avg/claim</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing State</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Texas</div>
                <p className="text-muted-foreground">$89,420 total earnings</p>
                <Badge variant="outline" className="mt-2">342 claims</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Highest Per-Claim Avg</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">California</div>
                <p className="text-muted-foreground">$278 average per claim</p>
                <Badge variant="outline" className="mt-2">245 claims</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Most Active Region</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">Texas</div>
                <p className="text-muted-foreground">342 claims processed</p>
                <Badge variant="outline" className="mt-2">$261 avg</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;