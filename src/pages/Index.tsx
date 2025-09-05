
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroBooking from '@/components/HeroBooking';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Truck, Users, Shield, Clock, MapPin, Star, Download, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Booking Form */}
      <section className="py-8">
        <HeroBooking />
      </section>

      {/* Services Section - Clean Cards */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ride, deliver, earn
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transportation solutions designed for your every need across Ethiopia
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Ride</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Get a ride in minutes with professional drivers across Ethiopian cities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Deliver</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Same-day delivery for packages and goods across Ethiopia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Earn</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Drive when you want and earn money on your schedule
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for safety and reliability
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature is designed with your safety, convenience, and peace of mind in focus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Always available</h3>
              <p className="text-muted-foreground leading-relaxed">
                24/7 service with quick driver matching whenever you need it
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Live tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time GPS tracking for every ride and delivery
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Secure payments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multiple payment options with guaranteed security
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Trusted drivers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Verified drivers with comprehensive background checks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                There's an app for that
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Download the Alen Express apps for iOS and Android to get started with convenient transportation and delivery services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-muted/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Rider app</h3>
                    <p className="text-muted-foreground">Book rides and track deliveries</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-muted/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Driver app</h3>
                    <p className="text-muted-foreground">Start earning as a driver partner</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-4 rounded-lg">
                  <Download className="mr-3 h-5 w-5" />
                  Download for iPhone
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-lg">
                  <Download className="mr-3 h-5 w-5" />
                  Download for Android
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>100+ downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span>4.5+ rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
                <div className="w-48 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl mx-auto flex items-center justify-center">
                  <Smartphone className="h-24 w-24 text-primary" />
                </div>
                <p className="text-muted-foreground mt-6">Mobile app preview coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
