
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Phone, Mail, MapPin, Clock, MessageCircle, HeadphonesIcon } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help with any questions about our services or support you may need."
      />

      {/* Contact Methods Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl font-bold">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Call us directly</p>
                <p className="font-semibold text-lg">+251 911 123 456</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl font-bold">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Send us an email</p>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">info@alenethiopiaexpress.com</p>
                  <p className="font-semibold text-sm">support@alenethiopiaexpress.com</p>
                  <p className="font-semibold text-sm">sales@alenethiopiaexpress.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl font-bold">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Chat with our team</p>
                <Button variant="outline" size="sm">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl font-bold">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Always available</p>
                <p className="font-semibold text-lg">Round-the-clock help</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">Send us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="+251 911 123 456" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl font-bold">Our Office</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Visit us at our headquarters in Addis Ababa
                  </p>
                  <address className="not-italic">
                    <p className="font-semibold">Alen Express Headquarters</p>
                    <p>Bole District, Addis Ababa</p>
                    <p>Ethiopia</p>
                  </address>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl font-bold">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Support</span>
                    <span className="font-semibold text-green-600">24/7 Available</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2">Connect With Us</CardTitle>
                  <CardDescription>
                    Follow us on social media and visit our website for updates.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold">Website:</p>
                    <a href="https://alenethiopiaexpress.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      alenethiopiaexpress.com
                    </a>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Social Media:</p>
                    <div className="flex flex-col space-y-1 text-sm">
                      <a href="https://www.facebook.com/AlenEthiopiaExpress" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Facebook: AlenEthiopiaExpress
                      </a>
                      <a href="https://www.instagram.com/alenethiopiaexpress/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Instagram: @alenethiopiaexpress
                      </a>
                      <a href="https://twitter.com/AlenEthExpress" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Twitter: @AlenEthExpress
                      </a>
                      <a href="https://www.linkedin.com/in/alen-ethiopia-express-10b48628b/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        LinkedIn: Alen Ethiopia Express
                      </a>
                      <a href="https://t.me/AlenEthiopiaExpress" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Telegram: AlenEthiopiaExpress
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
