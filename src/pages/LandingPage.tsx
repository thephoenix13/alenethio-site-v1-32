
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroBooking from '@/components/HeroBooking';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="py-8">
        <HeroBooking />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
