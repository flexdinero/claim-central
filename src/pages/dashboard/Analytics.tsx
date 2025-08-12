import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, FileText, Target, Award, Building2, TrendingUp, TrendingDown, Clock, AlertTriangle, Trophy } from "lucide-react";

const Analytics = () => {
  const [dateRange, setDateRange] = useState("month");

  const keyMetrics = [
    {
      title: "Monthly Earnings",
      value: "$24,680",
      change: "+15.2%",
      target: 85,
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Claims Processed",
      value: "127",
      change: "+8.4%",
      target: 92,
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Efficiency Score",
      value: "94.2%",
      change: "+3.1%",
      target: 94,
      icon: Target,
      color: "text-purple-600"
    },
    {
      title: "Client Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      target: 96,
      icon: Award,
      color: "text-orange-600"
    }
  ];

  const firmPerformance = [
    {
      firm: "Premier Claims Solutions",
      claims: 45,
      earnings: "$12,450",
      avgPayout: "$277",
      efficiency: 96,
      satisfaction: 4.9,
      responseTime: "2.4h",
      growth: "+18.5%"
    },
    {
      firm: "National Insurance Adjusters",
      claims: 32,
      earnings: "$8,960",
      avgPayout: "$280",
      efficiency: 92,
      satisfaction: 4.7,
      responseTime: "3.1h",
      growth: "+12.3%"
    },
    {
      firm: "Rapid Response Claims",
      claims: 28,
      earnings: "$7,420",
      avgPayout: "$265",
      efficiency: 89,
      satisfaction: 4.6,
      responseTime: "2.8h",
      growth: "+8.7%"
    },
    {
      firm: "Elite Adjusting Services",
      claims: 22,
      earnings: "$6,230",
      avgPayout: "$283",
      efficiency: 94,
      satisfaction: 4.8,
      responseTime: "2.2h",
      growth: "+15.2%"
    }
  ];

  const claimTypeAnalysis = [
    {
      type: "Property Damage",
      earnings: "$18,420",
      claims: 78,
      avgPayout: "$236",
      avgDays: 4.2,
      satisfaction: 4.8
    },
    {
      type: "Auto Collision",
      earnings: "$8,940",
      claims: 35,
      avgPayout: "$255",
      avgDays: 3.8,
      satisfaction: 4.7
    },
    {
      type: "Water Damage",
      earnings: "$6,580",
      claims: 28,
      avgPayout: "$235",
      avgDays: 5.1,
      satisfaction: 4.6
    },
    {
      type: "Theft/Vandalism",
      earnings: "$3,420",
      claims: 12,
      avgPayout: "$285",
      avgDays: 3.2,
      satisfaction: 4.9
    }
  ];

  const timeAnalysis = {
    peakHours: [
      { hour: "9 AM", productivity: 95 },
      { hour: "10 AM", productivity: 88 },
      { hour: "11 AM", productivity: 92 },
      { hour: "2 PM", productivity: 85 },
      { hour: "3 PM", productivity: 90 }
    ],
    weeklyPerformance: [
      { day: "Monday", efficiency: 92, claims: 18 },
      { day: "Tuesday", efficiency: 96, claims: 22 },
      { day: "Wednesday", efficiency: 89, claims: 20 },
      { day: "Thursday", efficiency: 94, claims: 24 },
      { day: "Friday", efficiency: 87, claims: 16 }
    ],
    seasonalTrends: [
      { season: "Q1 2024", earnings: "$68,420", growth: "+12.4%" },
      { season: "Q2 2024", earnings: "$72,180", growth: "+15.8%" },
      { season: "Q3 2024", earnings: "$78,950", growth: "+18.2%" },
      { season: "Q4 2024", earnings: "$82,340", growth: "+22.1%" }
    ]
  };

  const competitiveData = {
    industryComparison: [
      { metric: "Average Earnings", your: "$24,680", industry: "$18,420", status: "above" },
      { metric: "Efficiency Score", your: "94.2%", industry: "87.5%", status: "above" },
      { metric: "Client Satisfaction", your: "4.8/5", industry: "4.3/5", status: "above" },
      { metric: "Response Time", your: "2.4h", industry: "4.2h", status: "above" }
    ],
    rankings: [
      { category: "Monthly Earnings", rank: "Top 8%", total: "2,847 adjusters" },
      { category: "Efficiency", rank: "Top 12%", total: "2,847 adjusters" },
      { category: "Satisfaction", rank: "Top 5%", total: "2,847 adjusters" },
      { category: "Claims Volume", rank: "Top 15%", total: "2,847 adjusters" }
    ]
  };

  const forecasting = {
    predictions: [
      {
        period: "Next Month",
        earnings: "$26,420",
        confidence: 87,
        claims: 135,
        trend: "up"
      },
      {
        period: "Next Quarter",
        earnings: "$78,960",
        confidence: 75,
        claims: 395,
        trend: "up"
      },
      {
        period: "Year End",
        earnings: "$315,840",
        confidence: 68,
        claims: 1580,
        trend: "up"
      }
    ],
    recommendations: [
      {
        type: "Growth Opportunity",
        title: "Expand Auto Claims",
        description: "Consider focusing more on auto collision claims. Higher payout potential identified.",
        impact: "High",
        icon: TrendingUp
      },
      {
        type: "Efficiency",
        title: "Optimize Wednesday Schedule",
        description: "Wednesday shows lower efficiency. Consider redistributing workload.",
        impact: "Medium",
        icon: Target
      },
      {
        type: "Warning",
        title: "Q4 Capacity Planning",
        description: "Projected claim volume may exceed current capacity by 15%.",
        impact: "High",
        icon: AlertTriangle
      },
      {
        type: "Achievement",
        title: "Top Performer Status",
        description: "Maintain current performance to stay in top 10% tier.",
        impact: "Low",
        icon: Award
      }
    ]
  };

  const getGrowthColor = (growth: string) => {
    return growth.startsWith('+') ? 'text-green-600' : 'text-red-600';
  };

  const getGrowthIcon = (growth: string) => {
    return growth.startsWith('+') ? TrendingUp : TrendingDown;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'above': return 'text-green-600';
      case 'below': return 'text-red-600';
      default: return 'text-yellow-600';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Performance insights and business intelligence</p>
        </div>
        <div className="flex gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
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
                <Progress value={metric.target} className="mt-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="firms">Firms</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
          <TabsTrigger value="time">Time Analysis</TabsTrigger>
          <TabsTrigger value="competitive">Competitive</TabsTrigger>
          <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>6-month overview of key metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Earnings Growth</span>
                    <span className="text-green-600">+24.5%</span>
                  </div>
                  <Progress value={75} />
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Claims Volume</span>
                    <span className="text-blue-600">+18.2%</span>
                  </div>
                  <Progress value={68} />
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Efficiency</span>
                    <span className="text-purple-600">+12.8%</span>
                  </div>
                  <Progress value={85} />
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Satisfaction</span>
                    <span className="text-orange-600">+8.4%</span>
                  </div>
                  <Progress value={92} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Goal Progress</CardTitle>
                <CardDescription>Progress towards monthly and yearly targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Monthly Target: $25,000</span>
                      <span>98.7%</span>
                    </div>
                    <Progress value={98.7} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Claims Target: 130</span>
                      <span>97.7%</span>
                    </div>
                    <Progress value={97.7} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Yearly Target: $300,000</span>
                      <span>82.3%</span>
                    </div>
                    <Progress value={82.3} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Efficiency Target: 95%</span>
                      <span>99.2%</span>
                    </div>
                    <Progress value={99.2} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="firms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Firm Performance Analysis</CardTitle>
              <CardDescription>Detailed comparison across your connected firms</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Firm</TableHead>
                    <TableHead>Claims</TableHead>
                    <TableHead>Earnings</TableHead>
                    <TableHead>Avg Payout</TableHead>
                    <TableHead>Efficiency</TableHead>
                    <TableHead>Satisfaction</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {firmPerformance.map((firm, index) => {
                    const GrowthIcon = getGrowthIcon(firm.growth);
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{firm.firm}</TableCell>
                        <TableCell>{firm.claims}</TableCell>
                        <TableCell>{firm.earnings}</TableCell>
                        <TableCell>{firm.avgPayout}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={firm.efficiency} className="w-16" />
                            <span className="text-sm">{firm.efficiency}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{firm.satisfaction}/5</TableCell>
                        <TableCell>{firm.responseTime}</TableCell>
                        <TableCell>
                          <div className={`flex items-center gap-1 ${getGrowthColor(firm.growth)}`}>
                            <GrowthIcon className="h-3 w-3" />
                            <span className="text-sm">{firm.growth}</span>
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

        <TabsContent value="claims" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {claimTypeAnalysis.map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {type.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Earnings</span>
                      <span className="font-medium">{type.earnings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Claims Handled</span>
                      <span className="font-medium">{type.claims}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg Payout</span>
                      <span className="font-medium">{type.avgPayout}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg Days</span>
                      <span className="font-medium">{type.avgDays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Satisfaction</span>
                      <span className="font-medium">{type.satisfaction}/5</span>
                    </div>
                    <Progress value={(type.satisfaction / 5) * 100} className="mt-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="time" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Peak Performance Hours</CardTitle>
                <CardDescription>Your most productive hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {timeAnalysis.peakHours.map((hour, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{hour.hour}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={hour.productivity} className="w-20" />
                        <span className="text-sm text-muted-foreground">{hour.productivity}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Performance</CardTitle>
                <CardDescription>Performance by day of week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {timeAnalysis.weeklyPerformance.map((day, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{day.day}</span>
                        <span className="text-muted-foreground">{day.claims} claims</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={day.efficiency} className="flex-1" />
                        <span className="text-sm">{day.efficiency}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Trends</CardTitle>
                <CardDescription>Performance by quarter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {timeAnalysis.seasonalTrends.map((season, index) => {
                    const GrowthIcon = getGrowthIcon(season.growth);
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{season.season}</div>
                          <div className="text-sm text-muted-foreground">{season.earnings}</div>
                        </div>
                        <div className={`flex items-center gap-1 ${getGrowthColor(season.growth)}`}>
                          <GrowthIcon className="h-3 w-3" />
                          <span className="text-sm">{season.growth}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="competitive" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Industry Comparison</CardTitle>
                <CardDescription>How you compare to industry averages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitiveData.industryComparison.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.metric}</div>
                        <div className="text-sm text-muted-foreground">You: {item.your}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Industry: {item.industry}</div>
                        <Badge variant={item.status === 'above' ? 'default' : 'destructive'}>
                          {item.status === 'above' ? 'Above Average' : 'Below Average'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Rankings</CardTitle>
                <CardDescription>Your position among peers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitiveData.rankings.map((ranking, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{ranking.category}</div>
                        <div className="text-sm text-muted-foreground">{ranking.total}</div>
                      </div>
                      <Badge variant="outline">{ranking.rank}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forecasting" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {forecasting.predictions.map((prediction, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    {prediction.period}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">{prediction.earnings}</div>
                    <div className="text-sm text-muted-foreground">{prediction.claims} claims projected</div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Confidence:</span>
                      <Progress value={prediction.confidence} className="flex-1" />
                      <span className="text-sm">{prediction.confidence}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Recommendations</CardTitle>
              <CardDescription>Insights to improve your performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {forecasting.recommendations.map((rec, index) => {
                  const Icon = rec.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                      <Icon className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{rec.title}</span>
                          <Badge variant={getImpactColor(rec.impact)}>{rec.impact} Impact</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;