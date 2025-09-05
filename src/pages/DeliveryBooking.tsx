
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Package, Clock, DollarSign } from 'lucide-react';
import { useState } from 'react';

const DeliveryBooking = () => {
  const [deliveryType, setDeliveryType] = useState('now');
  const [estimatedPrice, setEstimatedPrice] = useState(25.00);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        title="Book Delivery Service"
        subtitle="Fast, reliable delivery for your packages and documents"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Delivery Details
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

              {/* Delivery Location */}
              <div className="space-y-2">
                <Label htmlFor="delivery">Delivery Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="delivery" placeholder="Enter delivery address" className="pl-10" />
                </div>
              </div>

              {/* Package Details */}
              <div className="space-y-2">
                <Label htmlFor="package-type">Package Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select package type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="documents">Documents</SelectItem>
                    <SelectItem value="small-package">Small Package</SelectItem>
                    <SelectItem value="medium-package">Medium Package</SelectItem>
                    <SelectItem value="large-package">Large Package</SelectItem>
                    <SelectItem value="food">Food & Beverages</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Package Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Package Description</Label>
                <Textarea id="description" placeholder="Describe your package contents" />
              </div>

              {/* Delivery Time */}
              <div className="space-y-3">
                <Label>Delivery Time</Label>
                <RadioGroup value={deliveryType} onValueChange={setDeliveryType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="now" id="now" />
                    <Label htmlFor="now">Deliver Now</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="scheduled" id="scheduled" />
                    <Label htmlFor="scheduled">Schedule Delivery</Label>
                  </div>
                </RadioGroup>
              </div>

              {deliveryType === 'scheduled' && (
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
                  <Label htmlFor="sender-name">Sender Name</Label>
                  <Input id="sender-name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sender-phone">Sender Phone</Label>
                  <Input id="sender-phone" placeholder="Your phone number" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="receiver-name">Receiver Name</Label>
                  <Input id="receiver-name" placeholder="Receiver's name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="receiver-phone">Receiver Phone</Label>
                  <Input id="receiver-phone" placeholder="Receiver's phone" />
                </div>
              </div>

              <Button className="w-full" size="lg">
                Book Delivery - ${estimatedPrice.toFixed(2)}
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

            {/* Price Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Price Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Base Delivery Fee</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Distance (5.2 km)</span>
                  <span>$8.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>$2.00</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${estimatedPrice.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Features */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Delivery?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Fast delivery within 30-60 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-primary" />
                  <span>Secure package handling</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Real-time tracking</span>
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

export default DeliveryBooking;
