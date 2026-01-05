import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/FeaturedListings'; // Repurposed
import MeetLisaSection from './components/AboutSection'; // Repurposed
import Testimonials from './components/Testimonials';
import PricingSection from './components/SearchSection'; // Repurposed
import ContactSection from './components/Neighborhoods'; // Repurposed
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-void text-white selection:bg-brand/30 selection:text-brand font-sans">
      <ThreeBackground />
      <Navbar />
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <ServicesSection />
        <MeetLisaSection />
        <Testimonials />
        <PricingSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;