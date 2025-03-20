
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import NewsEvents from '@/components/NewsEvents';
import EngagementSection from '@/components/EngagementSection';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <NewsEvents />
        <EngagementSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
