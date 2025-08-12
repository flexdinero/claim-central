import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Upload, Download, Search, FolderOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const documents = [
  { id: 1, name: 'Insurance Policy - ABC Corp', type: 'PDF', size: '2.4 MB', date: '2024-01-15', status: 'Verified' },
  { id: 2, name: 'Claim Photos - Flood Damage', type: 'ZIP', size: '45.2 MB', date: '2024-01-14', status: 'Processing' },
  { id: 3, name: 'Adjuster Report - Final', type: 'DOCX', size: '856 KB', date: '2024-01-13', status: 'Complete' },
  { id: 4, name: 'Estimate - Contractor ABC', type: 'PDF', size: '1.2 MB', date: '2024-01-12', status: 'Review' }
];

export function DocumentManagementWidget() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Document Management</CardTitle>
            <CardDescription>Organize and manage claim documents</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Upload className="w-4 h-4 mr-1" />
              Upload
            </Button>
            <Button size="sm" variant="outline">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-3 max-h-full overflow-y-auto">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm truncate">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.size} • {doc.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={doc.status === 'Complete' ? 'default' : doc.status === 'Processing' ? 'secondary' : 'outline'} className="text-xs">
                  {doc.status}
                </Badge>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}