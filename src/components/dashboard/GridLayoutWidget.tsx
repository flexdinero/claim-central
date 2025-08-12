import React from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import { Widget, WidgetWrapper } from './WidgetManager';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridLayoutWidgetProps {
  widgets: Widget[];
  editMode: boolean;
  onRemoveWidget: (widgetId: string) => void;
  onUpdateWidget: (widgetId: string, updates: Partial<Widget>) => void;
}

export function GridLayoutWidget({ 
  widgets, 
  editMode, 
  onRemoveWidget, 
  onUpdateWidget 
}: GridLayoutWidgetProps) {
  const layouts = widgets.reduce((acc, widget) => {
    if (!widget.isActive) return acc;
    
    acc.lg = acc.lg || [];
    acc.md = acc.md || [];
    acc.sm = acc.sm || [];
    acc.xs = acc.xs || [];
    acc.xxs = acc.xxs || [];

    const layoutItem = {
      i: widget.id,
      x: widget.position.x,
      y: widget.position.y,
      w: widget.size.width,
      h: widget.size.height,
      minW: 2,
      minH: 2
    };

    acc.lg.push(layoutItem);
    acc.md.push({ ...layoutItem, w: Math.min(layoutItem.w, 8) });
    acc.sm.push({ ...layoutItem, w: Math.min(layoutItem.w, 6) });
    acc.xs.push({ ...layoutItem, w: Math.min(layoutItem.w, 4) });
    acc.xxs.push({ ...layoutItem, w: Math.min(layoutItem.w, 2) });

    return acc;
  }, {} as { [key: string]: Layout[] });

  const handleLayoutChange = (layout: Layout[], allLayouts: { [key: string]: Layout[] }) => {
    if (!editMode) return;

    layout.forEach((item) => {
      const widget = widgets.find(w => w.id === item.i);
      if (widget) {
        onUpdateWidget(widget.id, {
          position: { x: item.x, y: item.y },
          size: { width: item.w, height: item.h }
        });
      }
    });
  };

  const activeWidgets = widgets.filter(widget => widget.isActive);

  return (
    <div className="w-full">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        onLayoutChange={handleLayoutChange}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        isDraggable={editMode}
        isResizable={editMode}
        margin={[16, 16]}
        containerPadding={[0, 0]}
        useCSSTransforms={true}
        compactType="vertical"
        preventCollision={true}
      >
        {activeWidgets.map((widget) => (
          <div key={widget.id} className="widget-container">
            <WidgetWrapper
              widget={widget}
              editMode={editMode}
              onRemove={onRemoveWidget}
              onResize={(id, size) => onUpdateWidget(id, { size })}
              onMove={(id, position) => onUpdateWidget(id, { position })}
            >
              <widget.component />
            </WidgetWrapper>
          </div>
        ))}
      </ResponsiveGridLayout>
      
      <style>{`
        .react-grid-layout {
          position: relative;
        }
        
        .react-grid-item {
          transition: all 200ms ease;
          transition-property: left, top;
        }
        
        .react-grid-item.cssTransforms {
          transition-property: transform;
        }
        
        .react-grid-item > .react-resizable-handle {
          position: absolute;
          width: 20px;
          height: 20px;
          bottom: 0;
          right: 0;
          background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgNiA2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTUgNWgtNHYtNGg0eiIvPjwvZz48L3N2Zz4=');
          background-position: bottom right;
          padding: 0 3px 3px 0;
          background-repeat: no-repeat;
          background-origin: content-box;
          box-sizing: border-box;
          cursor: se-resize;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        .react-grid-item:hover > .react-resizable-handle {
          opacity: 1;
        }
        
        .widget-container {
          height: 100%;
          width: 100%;
        }
        
        .react-grid-placeholder {
          background: hsl(var(--primary) / 0.2) !important;
          border: 2px dashed hsl(var(--primary)) !important;
          border-radius: 8px;
          transition: all 200ms ease;
        }
      `}</style>
    </div>
  );
}