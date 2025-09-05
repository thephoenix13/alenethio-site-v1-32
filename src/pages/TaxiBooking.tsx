
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Car, Clock, DollarSign, Users } from 'lucide-react';
import { useState } from 'react';

const TaxiBooking = () => {
  const [rideType, setRideType] = useState('now');
  const [vehicleType, setVehicleType] = useState('standard');
  const [estimatedPrice, setEstimatedPrice] = useState(18.50);

  const vehicleOptions = {
    standard: { name: 'Standard Car', price: 18.50, capacity: '1-4 passengers' },
    premium: { name: 'Premium Car', price: 28.50, capacity: '1-4 passengers' },
    suv: { name: 'SUV', price: 35.00, capacity: '1-6 passengers' },
    van: { name: 'Van', price: 45.00, capacity: '1-8 passengers' }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        title="Book Your Ride"
        subtitle="Comfortable, safe, and reliable taxi service at your fingertips"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Ride Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pickup Location */}
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="pickup" placeholder="Enter pickup address" className="pl-10" />
                </div>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="destination" placeholder="Enter destination address" className="pl-10" />
                </div>
              </div>

              {/* Vehicle Type */}
              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle Type</Label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(vehicleOptions).map(([key, option]) => (
                      <SelectItem key={key} value={key}>
                        {option.name} - {option.capacity}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Number of Passengers */}
              <div className="space-y-2">
                <Label htmlFor="passengers">Number of Passengers</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                    <SelectItem value="4">4 Passengers</SelectItem>
                    <SelectItem value="5">5 Passengers</SelectItem>
                    <SelectItem value="6">6 Passengers</SelectItem>
                    <SelectItem value="7">7 Passengers</SelectItem>
                    <SelectItem value="8">8 Passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Ride Time */}
              <div className="space-y-3">
                <Label>When do you need the ride?</Label>
                <RadioGroup value={rideType} onValueChange={setRideType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="now" id="now" />
                    <Label htmlFor="now">Book Now</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="scheduled" id="scheduled" />
                    <Label htmlFor="scheduled">Schedule Later</Label>
                  </div>
                </RadioGroup>
              </div>

              {rideType === 'scheduled' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="passenger-name">Passenger Name</Label>
                  <Input id="passenger-name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passenger-phone">Phone Number</Label>
                  <Input id="passenger-phone" placeholder="Your phone number" />
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests (Optional)</Label>
                <Input id="requests" placeholder="e.g., Child seat, wheelchair accessible" />
              </div>

              <Button className="w-full" size="lg">
                Book Ride - ${vehicleOptions[vehicleType as keyof typeof vehicleOptions].price.toFixed(2)}
              </Button>
            </CardContent>
          </Card>

          {/* Map and Price Display */}
          <div className="space-y-6">
            {/* Interactive Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Route Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive map will be displayed here</p>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Selection Display */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Selected Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-lg">{vehicleOptions[vehicleType as keyof typeof vehicleOptions].name}</h3>
                  <p className="text-muted-foreground">{vehicleOptions[vehicleType as keyof typeof vehicleOptions].capacity}</p>
                  <p className="text-2xl font-bold text-primary">${vehicleOptions[vehicleType as keyof typeof vehicleOptions].price.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Price Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Fare Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Base Fare</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance (3.8 km)</span>
                  <span>$11.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>$2.00</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${vehicleOptions[vehicleType as keyof typeof vehicleOptions].price.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Ride Features */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Taxi Service?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Quick pickup within 5-10 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Professional, verified drivers</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>GPS tracking for safety</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TaxiBooking;
