import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, Car, Truck, Calendar, Package, Users, Shield } from 'lucide-react';
import { useState } from 'react';

const HeroBooking = () => {
  const [selectedService, setSelectedService] = useState('ride');

  const services = [
    {
      id: 'ride',
      title: 'Ride',
      description: 'Go anywhere with Alen Express',
      icon: Car,
      color: 'bg-primary',
    },
    {
      id: 'courier',
      title: 'Courier',
      description: 'Send packages across the city',
      icon: Package,
      color: 'bg-green-600',
    },
    {
      id: 'rentals',
      title: 'Rentals',
      description: 'Rent a car for hours or days',
      icon: Shield,
      color: 'bg-purple-600',
    },
    {
      id: 'business',
      title: 'Business',
      description: 'Corporate transportation solutions',
      icon: Users,
      color: 'bg-orange-600',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Side - Booking Form */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Request a ride
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter your pickup and destination to get started
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 space-y-6">
              {/* Pickup Location */}
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute left-3 top-3 h-3 w-3 bg-foreground rounded-full"></div>
                  <Input
                    placeholder="Enter pickup location"
                    className="pl-10 h-12 text-lg border-0 border-b-2 border-border rounded-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter destination"
                    className="pl-10 h-12 text-lg border-0 border-b-2 border-border rounded-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="date"
                      defaultValue={new Date().toISOString().split('T')[0]}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-muted-foreground">Time</Label>
                  <Select defaultValue="now">
                    <SelectTrigger className="w-full">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="now">Now</SelectItem>
                      <SelectItem value="5">In 5 minutes</SelectItem>
                      <SelectItem value="15">In 15 minutes</SelectItem>
                      <SelectItem value="30">In 30 minutes</SelectItem>
                      <SelectItem value="custom">Custom time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full h-12 text-lg font-semibold rounded-lg">
                See prices
              </Button>
            </CardContent>
          </Card>

          {/* Account Section */}
          <Card className="border-0 shadow-sm bg-muted/30">
            <CardHeader>
              <CardTitle className="text-xl">Your account and activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Most recent</div>
                  <div className="bg-muted rounded-lg h-16 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Past</div>
                  <div className="bg-muted rounded-lg h-16 flex items-center justify-center">
                    <Car className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-1">Services</div>
                  <div className="bg-muted rounded-lg h-16 flex items-center justify-center">
                    <Package className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Services */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Suggestions</h2>
            <p className="text-muted-foreground">Choose from our range of services</p>
          </div>

          <div className="grid gap-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedService === service.id 
                      ? 'ring-2 ring-primary shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Service */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Delivery Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Same-day delivery for packages and documents across Ethiopian cities.
              </p>
              <Button variant="outline" className="w-full">
                Learn more
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Active Drivers</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBooking;