import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Plus, BarChart3, PieChart, Table } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const reports = [
  { id: 1, name: 'Monthly Claims Summary', type: 'Summary', status: 'Ready', lastGenerated: '2024-01-15' },
  { id: 2, name: 'Firm Performance Analysis', type: 'Analytics', status: 'Generating', lastGenerated: '2024-01-14' },
  { id: 3, name: 'Earnings Report Q4', type: 'Financial', status: 'Ready', lastGenerated: '2024-01-13' },
  { id: 4, name: 'CAT Event Report', type: 'Incident', status: 'Draft', lastGenerated: '2024-01-12' }
];

const templates = [
  { name: 'Claims Summary', icon: BarChart3, description: 'Weekly/Monthly claims overview' },
  { name: 'Financial Report', icon: PieChart, description: 'Earnings and expenses breakdown' },
  { name: 'Performance Report', icon: Table, description: 'KPI and metrics analysis' }
];

export function ReportBuilderWidget() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Report Builder</CardTitle>
            <CardDescription>Create and manage professional reports</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            New Report
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-4">
          {/* Quick Templates */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Quick Templates</h4>
            <div className="grid grid-cols-1 gap-2">
              {templates.map((template, index) => (
                <div key={index} className="flex items-center gap-2 p-2 border rounded hover:bg-accent/50 cursor-pointer transition-colors">
                  <template.icon className="w-4 h-4 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{template.name}</p>
                    <p className="text-xs text-muted-foreground">{template.description}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reports */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Recent Reports</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {reports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-2 border rounded hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <FileText className="w-4 h-4 text-primary" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm truncate">{report.name}</p>
                      <p className="text-xs text-muted-foreground">{report.lastGenerated}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={report.status === 'Ready' ? 'default' : report.status === 'Generating' ? 'secondary' : 'outline'} className="text-xs">
                      {report.status}
                    </Badge>
                    {report.status === 'Ready' && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Download className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}