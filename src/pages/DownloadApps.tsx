
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Smartphone, Download, Star, Shield, MapPin, CreditCard, Apple } from 'lucide-react';

const DownloadApps = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero 
        title="Download Our Apps"
        subtitle="Get the Alen Express apps for seamless transportation and delivery services across Ethiopia"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="px-8 py-4 rounded-lg">
            <Download className="mr-3 h-5 w-5" />
            Download for Android
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white hover:text-black">
            <Apple className="mr-3 h-5 w-5" />
            Download for iOS
          </Button>
        </div>
      </PageHero>

      {/* Apps Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Customer App */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="w-24 h-24 bg-blue-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-12 h-12 text-blue-500" />
                </div>
                <CardTitle className="text-3xl mb-2">Alen Express</CardTitle>
                <CardDescription className="text-lg">Customer App</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  100+ Downloads
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>Real-time tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    <span>Secure payments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-blue-500" />
                    <span>Driver ratings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span>24/7 support</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button className="flex-1 h-14" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                  <Button variant="outline" className="flex-1 h-14" size="lg">
                    <Apple className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Driver App */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="w-24 h-24 bg-green-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-12 h-12 text-green-500" />
                </div>
                <CardTitle className="text-3xl mb-2">Alen Driver</CardTitle>
                <CardDescription className="text-lg">Driver App</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  50+ Downloads
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-500" />
                    <span>Navigation & routing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-green-500" />
                    <span>Earnings tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-green-500" />
                    <span>Job management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>Driver support</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button className="flex-1 h-14" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                  <Button variant="outline" className="flex-1 h-14" size="lg">
                    <Apple className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                </div>
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
              App Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to make your experience seamless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">GPS Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time location tracking for rides and deliveries
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <CreditCard className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Multiple Payments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Various payment options including mobile money and cash
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Rating System</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rate drivers and services to maintain quality standards
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Safety Features</h3>
              <p className="text-muted-foreground leading-relaxed">
                Emergency contacts, trip sharing, and safety protocols
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <span>Android Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Android 7.0 or higher</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>2GB RAM minimum</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>100MB storage space</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>GPS functionality</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Internet connection</span>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Apple className="w-8 h-8 text-gray-600" />
                  <span>iOS Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>iOS 12.0 or higher</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>iPhone 6s or newer</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>100MB storage space</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>Location services</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>Internet connection</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadApps;
