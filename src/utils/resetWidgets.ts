// Utility to reset dashboard widgets
export const resetDashboardWidgets = () => {
  localStorage.removeItem('dashboard-widgets');
  window.location.reload();
};

// Auto-reset widgets if there are component reference issues
export const checkAndResetWidgets = () => {
  try {
    const saved = localStorage.getItem('dashboard-widgets');
    if (saved) {
      const widgets = JSON.parse(saved);
      // Check if any widget has invalid component reference
      const hasInvalidComponents = widgets.some((widget: any) => 
        typeof widget.component === 'string' || !widget.component
      );
      
      if (hasInvalidComponents) {
        console.log('Detected invalid widget components, resetting...');
        resetDashboardWidgets();
      }
    }
  } catch (error) {
    console.error('Error checking widgets, resetting...', error);
    resetDashboardWidgets();
  }
};