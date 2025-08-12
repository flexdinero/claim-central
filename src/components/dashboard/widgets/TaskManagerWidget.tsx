import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Calendar, User, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const tasks = [
  { id: 1, title: 'Review claim documentation', priority: 'High', dueDate: '2024-01-16', assignee: 'John D.', completed: false },
  { id: 2, title: 'Schedule property inspection', priority: 'Medium', dueDate: '2024-01-17', assignee: 'Sarah M.', completed: false },
  { id: 3, title: 'Follow up with contractor', priority: 'Low', dueDate: '2024-01-18', assignee: 'Mike R.', completed: true },
  { id: 4, title: 'Submit final report', priority: 'High', dueDate: '2024-01-15', assignee: 'You', completed: false }
];

export function TaskManagerWidget() {
  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (id: number) => {
    setTaskList(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Task Manager</CardTitle>
            <CardDescription>Track and manage your daily tasks</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            Add Task
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="space-y-3 max-h-full overflow-y-auto">
          {taskList.map((task) => (
            <div key={task.id} className={`p-3 border rounded-lg transition-colors ${task.completed ? 'bg-muted/50' : 'hover:bg-accent/50'}`}>
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-1"
                />
                <div className="flex-1 min-w-0">
                  <p className={`font-medium text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {task.title}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {task.dueDate}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {task.assignee}
                    </div>
                    <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}