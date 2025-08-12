import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  FileText,
  AlertTriangle,
  Target,
  Clock,
  PieChart
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface EarningsData {
  ytdEarnings: number;
  ytdGrowth: number;
  monthlyTarget: number;
  monthlyActual: number;
  outstandingRevenue: number;
  avgDaysToPay: number;
  pipelineValue: number;
  overdueInvoices: number;
}

interface FirmEarnings {
  firmName: string;
  earnings: number;
  claims: number;
  avgFee: number;
  paymentSpeed: number;
}

const mockEarningsData: EarningsData = {
  ytdEarnings: 145250,
  ytdGrowth: 18.5,
  monthlyTarget: 15000,
  monthlyActual: 12450,
  outstandingRevenue: 24800,
  avgDaysToPay: 28,
  pipelineValue: 42300,
  overdueInvoices: 3
};

const mockFirmEarnings: FirmEarnings[] = [
  {
    firmName: 'Elite Insurance Group',
    earnings: 42500,
    claims: 28,
    avgFee: 1518,
    paymentSpeed: 21
  },
  {
    firmName: 'Apex Claims Solutions',
    earnings: 38200,
    claims: 24,
    avgFee: 1592,
    paymentSpeed: 35
  },
  {
    firmName: 'National CAT Services',
    earnings: 34600,
    claims: 19,
    avgFee: 1821,
    paymentSpeed: 18
  },
  {
    firmName: 'Professional Adjusters Inc',
    earnings: 29950,
    claims: 22,
    avgFee: 1361,
    paymentSpeed: 42
  }
];

const monthlyProjection = [
  { month: 'Jan', actual: 14200, projected: 15000 },
  { month: 'Feb', actual: 16800, projected: 15000 },
  { month: 'Mar', actual: 12450, projected: 15000 },
  { month: 'Apr', actual: 0, projected: 15500 },
  { month: 'May', actual: 0, projected: 16000 },
  { month: 'Jun', actual: 0, projected: 16500 }
];

export function EarningsWidget() {
  const [timeframe, setTimeframe] = useState<'ytd' | 'quarterly' | 'monthly'>('monthly');
  const [selectedFirm, setSelectedFirm] = useState<string>('all');

  const getPaymentSpeedColor = (days: number) => {
    if (days <= 30) return 'text-success';
    if (days <= 45) return 'text-warning';
    return 'text-destructive';
  };

  const monthlyProgress = (mockEarningsData.monthlyActual / mockEarningsData.monthlyTarget) * 100;
  const projectedCompletion = monthlyProgress + ((mockEarningsData.pipelineValue * 0.7) / mockEarningsData.monthlyTarget) * 100;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Earnings Tracker
          </CardTitle>
          
          <Select value={timeframe} onValueChange={(value: any) => setTimeframe(value)}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="ytd">Year to Date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Monthly Goal</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold">${mockEarningsData.monthlyActual.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground">/ ${mockEarningsData.monthlyTarget.toLocaleString()}</span>
              </div>
              <Progress value={monthlyProgress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {monthlyProgress.toFixed(0)}% complete • ${(mockEarningsData.monthlyTarget - mockEarningsData.monthlyActual).toLocaleString()} remaining
              </p>
            </div>
          </Card>

          <Card className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">YTD Growth</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold">${mockEarningsData.ytdEarnings.toLocaleString()}</span>
                <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                  +{mockEarningsData.ytdGrowth}%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                vs. last year same period
              </p>
            </div>
          </Card>

          <Card className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">Outstanding</span>
            </div>
            <div className="space-y-1">
              <span className="text-lg font-bold">${mockEarningsData.outstandingRevenue.toLocaleString()}</span>
              <p className="text-xs text-muted-foreground">
                {mockEarningsData.overdueInvoices} overdue invoices
              </p>
            </div>
          </Card>

          <Card className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <PieChart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Pipeline</span>
            </div>
            <div className="space-y-1">
              <span className="text-lg font-bold">${mockEarningsData.pipelineValue.toLocaleString()}</span>
              <p className="text-xs text-muted-foreground">
                Projected 30-day value
              </p>
            </div>
          </Card>
        </div>

        {/* Monthly Projection */}
        <Card className="p-3">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">Monthly Projection</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Projected completion:</span>
              <span className={cn(
                "font-medium",
                projectedCompletion >= 100 ? "text-success" : "text-warning"
              )}>
                {projectedCompletion.toFixed(0)}%
              </span>
            </div>
            <Progress value={Math.min(projectedCompletion, 100)} className="h-2" />
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <span className="text-muted-foreground">Actual: </span>
                <span className="font-medium">${mockEarningsData.monthlyActual.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Pipeline: </span>
                <span className="font-medium">${(mockEarningsData.pipelineValue * 0.7).toLocaleString()}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Gap: </span>
                <span className={cn(
                  "font-medium",
                  projectedCompletion >= 100 ? "text-success" : "text-destructive"
                )}>
                  ${Math.max(0, mockEarningsData.monthlyTarget - mockEarningsData.monthlyActual - (mockEarningsData.pipelineValue * 0.7)).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Top Performing Firms */}
        <Card className="p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium">Firm Performance</span>
            <Select value={selectedFirm} onValueChange={setSelectedFirm}>
              <SelectTrigger className="w-24 h-7 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {mockFirmEarnings.map(firm => (
                  <SelectItem key={firm.firmName} value={firm.firmName}>
                    {firm.firmName.split(' ')[0]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            {mockFirmEarnings.slice(0, 3).map((firm, index) => (
              <div key={firm.firmName} className="flex items-center justify-between p-2 border rounded">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium truncate">{firm.firmName}</span>
                    <Badge variant="outline" className="text-xs">
                      #{index + 1}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>{firm.claims} claims</span>
                    <span>Avg: ${firm.avgFee}</span>
                    <span className={getPaymentSpeedColor(firm.paymentSpeed)}>
                      {firm.paymentSpeed}d pay
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold">${firm.earnings.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <FileText className="w-3 h-3 mr-1" />
            Generate Invoice
          </Button>
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Review Overdue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}