
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { UserCheck, Car, MapPin, Phone, Mail, Calendar, FileText } from 'lucide-react';

const AgentRegistration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        title="Become a Driver Partner"
        subtitle="Join our team of professional drivers and start earning with flexible schedules"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Provide your personal details for verification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date-of-birth">Date of Birth</Label>
                    <Input id="date-of-birth" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="id-number">ID/Passport Number</Label>
                    <Input id="id-number" placeholder="Enter ID number" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" placeholder="Enter phone number" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="Enter email address" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Home Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="address" placeholder="Enter your address" className="pl-10" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Service Coverage Areas
                </CardTitle>
                <CardDescription>
                  Select your preferred pickup and drop-off locations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-area">Primary Service Area</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your main service area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown District</SelectItem>
                      <SelectItem value="airport">Airport Area</SelectItem>
                      <SelectItem value="business">Business District</SelectItem>
                      <SelectItem value="residential">Residential Areas</SelectItem>
                      <SelectItem value="suburbs">Suburban Areas</SelectItem>
                      <SelectItem value="industrial">Industrial Zone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondary-areas">Secondary Service Areas (Optional)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Downtown District', 'Airport Area', 'Business District', 'Residential Areas', 'Suburban Areas', 'Industrial Zone'].map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox id={area.toLowerCase().replace(' ', '-')} />
                        <Label htmlFor={area.toLowerCase().replace(' ', '-')} className="text-sm">{area}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-radius">Service Radius (km)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How far are you willing to travel?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">Within 5 km</SelectItem>
                      <SelectItem value="10">Within 10 km</SelectItem>
                      <SelectItem value="20">Within 20 km</SelectItem>
                      <SelectItem value="50">Within 50 km</SelectItem>
                      <SelectItem value="unlimited">No limit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup-locations">Preferred Pickup Locations</Label>
                  <Textarea 
                    id="pickup-locations" 
                    placeholder="List specific areas, landmarks, or neighborhoods where you prefer to pick up passengers (e.g., Main Street, City Mall, Train Station)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dropoff-locations">Preferred Drop-off Locations</Label>
                  <Textarea 
                    id="dropoff-locations" 
                    placeholder="List specific destinations you're comfortable driving to (e.g., Airport, Business District, Residential Areas)"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Vehicle Information
                </CardTitle>
                <CardDescription>
                  Details about your vehicle for service registration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-make">Vehicle Make</Label>
                    <Input id="vehicle-make" placeholder="e.g., Toyota" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-model">Vehicle Model</Label>
                    <Input id="vehicle-model" placeholder="e.g., Camry" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-year">Year</Label>
                    <Input id="vehicle-year" placeholder="e.g., 2020" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-color">Color</Label>
                    <Input id="vehicle-color" placeholder="e.g., Silver" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="license-plate">License Plate</Label>
                    <Input id="license-plate" placeholder="Enter license plate number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-capacity">Passenger Capacity</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select capacity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 passengers</SelectItem>
                        <SelectItem value="5">5 passengers</SelectItem>
                        <SelectItem value="6">6 passengers</SelectItem>
                        <SelectItem value="7">7 passengers</SelectItem>
                        <SelectItem value="8">8+ passengers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicle-features">Vehicle Features (Optional)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Air Conditioning', 'GPS Navigation', 'WiFi', 'Phone Charger', 'Child Seats Available', 'Wheelchair Accessible'].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox id={feature.toLowerCase().replace(' ', '-')} />
                        <Label htmlFor={feature.toLowerCase().replace(' ', '-')} className="text-sm">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* License and Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  License & Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="license-number">Driver's License Number</Label>
                    <Input id="license-number" placeholder="Enter license number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="license-expiry">License Expiry Date</Label>
                    <Input id="license-expiry" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="driving-experience">Driving Experience (Years)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="commercial-experience">Commercial Driving Experience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Previous commercial driving experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No commercial experience</SelectItem>
                      <SelectItem value="taxi">Previous taxi driver</SelectItem>
                      <SelectItem value="delivery">Delivery driver</SelectItem>
                      <SelectItem value="rideshare">Rideshare driver</SelectItem>
                      <SelectItem value="truck">Truck driver</SelectItem>
                      <SelectItem value="other">Other commercial driving</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Availability & Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Preferred Working Days</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex items-center space-x-2">
                        <Checkbox id={day.toLowerCase()} />
                        <Label htmlFor={day.toLowerCase()} className="text-sm">{day}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Preferred Start Time</Label>
                    <Input id="start-time" type="time" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-time">Preferred End Time</Label>
                    <Input id="end-time" type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type Preference</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {['Taxi Rides', 'Delivery Services', 'Both Services'].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox id={service.toLowerCase().replace(' ', '-')} />
                        <Label htmlFor={service.toLowerCase().replace(' ', '-')} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the <span className="text-primary underline cursor-pointer">Driver Partner Agreement</span> and <span className="text-primary underline cursor-pointer">Terms of Service</span>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="background-check" />
                  <Label htmlFor="background-check" className="text-sm">
                    I consent to background checks and vehicle inspections as required
                  </Label>
                </div>

                <Button className="w-full" size="lg">
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <h4 className="font-medium">Submit Application</h4>
                    <p className="text-sm text-muted-foreground">Complete this registration form</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <h4 className="font-medium">Document Verification</h4>
                    <p className="text-sm text-muted-foreground">Upload required documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <h4 className="font-medium">Background Check</h4>
                    <p className="text-sm text-muted-foreground">Complete verification process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">4</div>
                  <div>
                    <h4 className="font-medium">Start Driving</h4>
                    <p className="text-sm text-muted-foreground">Begin accepting ride requests</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Earning Potential</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">$15-25/hour</p>
                  <p className="text-sm text-muted-foreground">Average earnings</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base rate per trip:</span>
                    <span>$5-15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Distance rate:</span>
                    <span>$1.50/km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time rate:</span>
                    <span>$0.25/min</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Valid driver's license</li>
                  <li>• Vehicle registration</li>
                  <li>• Vehicle insurance</li>
                  <li>• Government-issued ID</li>
                  <li>• Vehicle inspection certificate</li>
                  <li>• Commercial driving permit (if required)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentRegistration;
