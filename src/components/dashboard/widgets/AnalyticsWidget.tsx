import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Clock,
  FileText,
  AlertTriangle,
  Target,
  Calendar,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnalyticsData {
  performanceMetrics: {
    avgCycleTime: number;
    cycleTimeChange: number;
    onTimeSubmission: number;
    claimsPerMonth: number;
    responseTime: number;
  };
  financialMetrics: {
    totalBilled: number;
    totalCollected: number;
    outstandingRevenue: number;
    avgDaysToPay: number;
    profitMargin: number;
  };
  firmComparison: Array<{
    firmName: string;
    avgFee: number;
    paymentSpeed: number;
    claimVolume: number;
    satisfaction: number;
  }>;
}

const mockAnalytics: AnalyticsData = {
  performanceMetrics: {
    avgCycleTime: 5.2,
    cycleTimeChange: -8.5,
    onTimeSubmission: 94,
    claimsPerMonth: 28,
    responseTime: 2.4
  },
  financialMetrics: {
    totalBilled: 156800,
    totalCollected: 142100,
    outstandingRevenue: 14700,
    avgDaysToPay: 32,
    profitMargin: 68.5
  },
  firmComparison: [
    {
      firmName: 'Elite Insurance Group',
      avgFee: 1850,
      paymentSpeed: 21,
      claimVolume: 8,
      satisfaction: 4.8
    },
    {
      firmName: 'Apex Claims Solutions',
      avgFee: 1650,
      paymentSpeed: 35,
      claimVolume: 12,
      satisfaction: 4.6
    },
    {
      firmName: 'National CAT Services',
      avgFee: 2100,
      paymentSpeed: 18,
      claimVolume: 6,
      satisfaction: 4.9
    },
    {
      firmName: 'Professional Adjusters',
      avgFee: 1400,
      paymentSpeed: 28,
      claimVolume: 10,
      satisfaction: 4.4
    }
  ]
};

const monthlyTrends = [
  { month: 'Oct', claims: 22, revenue: 38400, cycleTime: 6.1 },
  { month: 'Nov', claims: 26, revenue: 42100, cycleTime: 5.8 },
  { month: 'Dec', claims: 28, revenue: 45200, cycleTime: 5.2 },
  { month: 'Jan', claims: 24, revenue: 39800, cycleTime: 4.9 }
];

export function AnalyticsWidget() {
  const [timeframe, setTimeframe] = useState<'monthly' | 'quarterly' | 'ytd'>('monthly');
  const [metric, setMetric] = useState<'performance' | 'financial' | 'comparison'>('performance');

  const getChangeColor = (change: number) => {
    return change > 0 ? 'text-success' : 'text-destructive';
  };

  const getPerformanceColor = (value: number, benchmark: number) => {
    if (value >= benchmark * 0.9) return 'text-success';
    if (value >= benchmark * 0.7) return 'text-warning';
    return 'text-destructive';
  };

  const { performanceMetrics, financialMetrics, firmComparison } = mockAnalytics;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Analytics Dashboard
          </CardTitle>
          
          <div className="flex gap-2">
            <Select value={timeframe} onValueChange={(value: any) => setTimeframe(value)}>
              <SelectTrigger className="w-28">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="ytd">YTD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Metric Toggle */}
        <div className="flex gap-1 p-1 bg-muted rounded-lg">
          {[
            { key: 'performance', label: 'Performance', icon: Target },
            { key: 'financial', label: 'Financial', icon: DollarSign },
            { key: 'comparison', label: 'Firm Comparison', icon: Users }
          ].map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              variant={metric === key ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setMetric(key as any)}
              className="flex-1 text-xs"
            >
              <Icon className="w-3 h-3 mr-1" />
              {label}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {metric === 'performance' && (
          <div className="space-y-3">
            {/* Performance Scorecard */}
            <Card className="p-3">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Performance Scorecard
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Avg Cycle Time</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold">{performanceMetrics.avgCycleTime}d</span>
                      <span className={cn("text-xs", getChangeColor(performanceMetrics.cycleTimeChange))}>
                        {performanceMetrics.cycleTimeChange > 0 ? '+' : ''}{performanceMetrics.cycleTimeChange}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-primary h-1.5 rounded-full" 
                      style={{ width: `${Math.min((7 - performanceMetrics.avgCycleTime) / 7 * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">On-Time Rate</span>
                    <span className={cn("text-sm font-bold", getPerformanceColor(performanceMetrics.onTimeSubmission, 90))}>
                      {performanceMetrics.onTimeSubmission}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-success h-1.5 rounded-full" 
                      style={{ width: `${performanceMetrics.onTimeSubmission}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Claims/Month</span>
                    <span className="text-sm font-bold">{performanceMetrics.claimsPerMonth}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-primary h-1.5 rounded-full" 
                      style={{ width: `${Math.min(performanceMetrics.claimsPerMonth / 30 * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Response Time</span>
                    <span className="text-sm font-bold">{performanceMetrics.responseTime}h</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-success h-1.5 rounded-full" 
                      style={{ width: `${Math.min((24 - performanceMetrics.responseTime) / 24 * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Monthly Trends */}
            <Card className="p-3">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Performance Trends
              </h4>
              <div className="space-y-2">
                {monthlyTrends.map((trend, index) => (
                  <div key={trend.month} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm font-medium">{trend.month}</span>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <FileText className="w-3 h-3 text-muted-foreground" />
                        <span>{trend.claims}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-success" />
                        <span>${(trend.revenue / 1000).toFixed(0)}k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-primary" />
                        <span>{trend.cycleTime}d</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {metric === 'financial' && (
          <div className="space-y-3">
            {/* Financial Overview */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">Revenue</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Billed:</span>
                    <span className="font-medium">${(financialMetrics.totalBilled / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Collected:</span>
                    <span className="font-medium text-success">${(financialMetrics.totalCollected / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Outstanding:</span>
                    <span className="font-medium text-warning">${(financialMetrics.outstandingRevenue / 1000).toFixed(0)}k</span>
                  </div>
                </div>
              </Card>

              <Card className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-warning" />
                  <span className="text-sm font-medium">Payment Metrics</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Avg Days to Pay:</span>
                    <span className="font-medium">{financialMetrics.avgDaysToPay}d</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Collection Rate:</span>
                    <span className="font-medium text-success">
                      {((financialMetrics.totalCollected / financialMetrics.totalBilled) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Profit Margin:</span>
                    <span className="font-medium text-primary">{financialMetrics.profitMargin}%</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Revenue Breakdown */}
            <Card className="p-3">
              <h4 className="font-medium mb-3">Revenue by Type</h4>
              <div className="space-y-2">
                {[
                  { type: 'CAT Claims', amount: 45200, percentage: 32 },
                  { type: 'Daily Claims', amount: 38600, percentage: 27 },
                  { type: 'Commercial', amount: 31800, percentage: 22 },
                  { type: 'Special Projects', amount: 27200, percentage: 19 }
                ].map(item => (
                  <div key={item.type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded" 
                        style={{ backgroundColor: `hsl(${item.percentage * 3.6}, 70%, 50%)` }}
                      />
                      <span className="text-sm">{item.type}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">${(item.amount / 1000).toFixed(0)}k</div>
                      <div className="text-xs text-muted-foreground">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {metric === 'comparison' && (
          <div className="space-y-3">
            {/* Firm Performance Comparison */}
            <Card className="p-3">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Firm Performance Matrix
              </h4>
              <div className="space-y-2">
                {firmComparison.map((firm, index) => (
                  <div key={firm.firmName} className="p-2 border rounded space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{firm.firmName}</span>
                      <Badge variant="outline" className="text-xs">
                        #{index + 1}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="text-center">
                        <div className="text-muted-foreground">Avg Fee</div>
                        <div className="font-medium">${firm.avgFee}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground">Pay Speed</div>
                        <div className={cn("font-medium", 
                          firm.paymentSpeed <= 25 ? "text-success" : 
                          firm.paymentSpeed <= 35 ? "text-warning" : "text-destructive"
                        )}>
                          {firm.paymentSpeed}d
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground">Volume</div>
                        <div className="font-medium">{firm.claimVolume}/mo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground">Rating</div>
                        <div className="font-medium text-yellow-600">{firm.satisfaction}★</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="p-3 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-primary mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-medium text-sm">AI Insights</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Elite Insurance has 25% faster payment than average</li>
                    <li>• National CAT offers highest fees but lower volume</li>
                    <li>• Consider focusing on high-volume, reliable payers</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Export Options */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button variant="outline" size="sm">
            <FileText className="w-3 h-3 mr-1" />
            Export PDF
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="w-3 h-3 mr-1" />
            Schedule Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}