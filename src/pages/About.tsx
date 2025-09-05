
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Users, Target, Heart, Globe, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero 
        title="About Alen Express"
        subtitle="Alen Ethiopia Express makes transportation easy in Ethiopia. We provide delivery, taxi, and corporate services through a smart digital platform. Our system is safe, reliable, and built to serve many users. The platform has two parts: one for customers to book services and one for drivers to manage rides. Behind the scenes, our system keeps everything connected, secure, and running smoothly."
      />

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold mb-3">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  The primary objective of Alen Ethiopia Express is to support businesses in their growth by offering streamlined ride-hailing and delivery services without any additional charges. Alen Ethiopia Express strives to simplify the transportation of people and goods within Addis Ababa, Ethiopia. Our mission is to provide reliable, safe, and convenient transportation and delivery solutions that connect communities across Ethiopia, empowering individuals to move freely and enabling businesses to thrive. Alen offers the best platform to accomplish this goal.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold mb-3">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  Alen Ethiopia Express aims to become Ethiopia's leading mobility platform, transforming the way people and goods move across the country while creating economic opportunities for drivers and businesses. Our goal is to establish Alen Ethiopia Express as the most trusted and respected provider of ride-hailing taxi and logistics services in Addis Ababa. We strive to optimize transportation operations in the city by offering an efficient platform that connects customers with drivers, ensuring timely, reliable, and cost-effective transportation services.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Customer First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every decision we make puts our customers' needs and safety at the center
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We continuously innovate to improve our services and create better experiences
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive for excellence in every service we provide and every interaction we have
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default About;
