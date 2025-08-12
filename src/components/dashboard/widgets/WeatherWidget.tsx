import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from 'lucide-react';

const weatherData = {
  current: {
    temperature: 72,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 8,
    location: 'Current Location'
  },
  forecast: [
    { day: 'Today', high: 75, low: 62, condition: 'Sunny', icon: Sun },
    { day: 'Tomorrow', high: 73, low: 59, condition: 'Cloudy', icon: Cloud },
    { day: 'Wed', high: 68, low: 55, condition: 'Rain', icon: CloudRain },
    { day: 'Thu', high: 71, low: 58, condition: 'Partly Cloudy', icon: Cloud }
  ]
};

export function WeatherWidget() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Weather</CardTitle>
        <CardDescription>Current conditions and forecast</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          {/* Current Weather */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Sun className="w-12 h-12 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold">{weatherData.current.temperature}°F</div>
            <p className="text-sm text-muted-foreground">{weatherData.current.condition}</p>
            <p className="text-xs text-muted-foreground">{weatherData.current.location}</p>
          </div>

          {/* Weather Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span>Humidity: {weatherData.current.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-gray-500" />
              <span>Wind: {weatherData.current.windSpeed} mph</span>
            </div>
          </div>

          {/* Forecast */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">4-Day Forecast</h4>
            <div className="space-y-2">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between py-1">
                  <span className="text-sm">{day.day}</span>
                  <div className="flex items-center gap-2">
                    <day.icon className="w-4 h-4" />
                    <span className="text-sm">{day.high}°/{day.low}°</span>
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