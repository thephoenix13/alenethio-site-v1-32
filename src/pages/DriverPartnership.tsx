
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Car, Clock, CreditCard, Shield, Users, TrendingUp, CheckCircle, Smartphone } from 'lucide-react';

const DriverPartnership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero 
        title="Drive with Alen Express"
        subtitle="Join thousands of drivers earning money on their own schedule. Turn your car into a reliable source of income."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="px-8 py-4 rounded-lg">
            <Car className="mr-3 h-5 w-5" />
            Start Driving Today
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white hover:text-black">
            Learn More
          </Button>
        </div>
      </PageHero>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Drive with Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enjoy the benefits of being an Alen Express driver partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Flexible Schedule</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Drive when you want, where you want. You're in control of your schedule and earnings.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <CreditCard className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Weekly Payments</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Get paid weekly directly to your bank account. Track your earnings in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Insurance Coverage</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive insurance coverage while you're driving for passenger safety and peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Driver Support</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  24/7 driver support team ready to help with any questions or issues you may have.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Earnings Growth</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Bonus opportunities and incentives to help you maximize your earnings potential.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                  <Smartphone className="h-8 w-8 text-indigo-500" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">Easy-to-Use App</CardTitle>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  User-friendly driver app with navigation, earnings tracking, and customer communication.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Driver Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple requirements to get started as an Alen Express driver
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-bold mb-3">Vehicle Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Vehicle registered in Ethiopia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Valid vehicle insurance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">4-door vehicle in good condition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Vehicle inspection certificate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-bold mb-3">Driver Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Valid Ethiopian driver's license</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Minimum 2 years driving experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Clean driving record</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">Background check clearance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signup Process Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to become an Alen Express driver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-xl font-bold mb-3">Submit Application</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Complete the online driver application with your personal and vehicle information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-xl font-bold mb-3">Document Review</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Upload required documents and complete background check and vehicle inspection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-xl font-bold mb-3">Start Driving</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Once approved, download the driver app and start accepting ride requests immediately.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the Alen Express driver community today and turn your vehicle into a source of income.
          </p>
          <Button size="lg" className="px-8 py-4 rounded-lg text-lg">
            <Car className="mr-3 h-5 w-5" />
            Apply to Drive
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DriverPartnership;
