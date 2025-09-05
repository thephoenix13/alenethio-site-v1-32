
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Car, Truck, Users, Clock, Shield, CreditCard, Smartphone, FileText, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero 
        title="Our Services"
        subtitle="Comprehensive transportation and delivery solutions designed to meet all your mobility needs across Ethiopia."
      />

      {/* Main Services Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Car className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Ride Services</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Professional ride services with verified drivers across Ethiopian cities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">AlenX rides</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">AlenXL vehicles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">Alen Mini-VAN</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">Alen VAN</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">Corporate rides</span>
                  </div>
                </div>
                <Button className="w-full mt-6">Book a Ride</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Truck className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Delivery Services</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Fast and reliable delivery for packages, food, and goods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Alen Priority: Delivery within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Alen Express: Delivery within 6 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Alen Standard: Delivery within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Alen Business: Business-to-business deliveries</span>
                  </div>
                </div>
                <Button className="w-full mt-6">Send Package</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Driver Partnership</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Join our driver network and start earning on your schedule
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">Flexible hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">Weekly payments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">Driver support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">Insurance coverage</span>
                  </div>
                </div>
                <Button className="w-full mt-6">Become a Driver</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  

      {/* Detailed Requirements Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vehicle Requirements */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Car className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-3xl font-bold mb-3">Vehicle Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">Vehicle registered in Ethiopia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">Valid vehicle insurance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">4-door vehicle in good condition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-muted-foreground">Vehicle inspection certificate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Driver Requirements */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-3xl font-bold mb-3">Driver Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">TIN & Trade registered Certificate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Valid Ethiopian driver's license</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Vehicle Foto</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Bank Account number</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">ውክልና (Representation)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
