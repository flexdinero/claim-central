import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Receipt, Car, Coffee, MapPin, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const expenses = [
  { id: 1, description: 'Gas - Site Visit', amount: 45.50, category: 'Travel', date: '2024-01-15', status: 'Pending', icon: Car },
  { id: 2, description: 'Client Lunch Meeting', amount: 32.75, category: 'Meals', date: '2024-01-15', status: 'Approved', icon: Coffee },
  { id: 3, description: 'Parking - Downtown', amount: 15.00, category: 'Travel', date: '2024-01-14', status: 'Pending', icon: MapPin },
  { id: 4, description: 'Office Supplies', amount: 67.20, category: 'Office', date: '2024-01-14', status: 'Approved', icon: Receipt }
];

const totalPending = expenses.filter(e => e.status === 'Pending').reduce((sum, e) => sum + e.amount, 0);
const totalApproved = expenses.filter(e => e.status === 'Approved').reduce((sum, e) => sum + e.amount, 0);

export function ExpenseTrackerWidget() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Expense Tracker</CardTitle>
            <CardDescription>Track and submit business expenses</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            Add Expense
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-4">
          {/* Summary */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-accent/50 rounded-lg text-center">
              <div className="text-lg font-bold text-orange-600">${totalPending.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Pending</div>
            </div>
            <div className="p-3 bg-accent/50 rounded-lg text-center">
              <div className="text-lg font-bold text-green-600">${totalApproved.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Approved</div>
            </div>
          </div>

          {/* Recent Expenses */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Recent Expenses</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {expenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-2 border rounded hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <expense.icon className="w-4 h-4 text-primary" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm truncate">{expense.description}</p>
                      <p className="text-xs text-muted-foreground">{expense.category} • {expense.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">${expense.amount.toFixed(2)}</div>
                    <Badge variant={expense.status === 'Approved' ? 'default' : 'secondary'} className="text-xs">
                      {expense.status}
                    </Badge>
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