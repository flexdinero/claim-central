// Script to clear dashboard widgets and force reset
// Run this in browser console if widget issues persist

console.log('Clearing dashboard widgets...');
localStorage.removeItem('dashboard-widgets');
console.log('Dashboard widgets cleared. Page will reload...');
window.location.reload();