import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { FeaturedWorks } from '../components/home/FeaturedWorks';
import { ProcessSection } from '../components/home/ProcessSection';
import { QuoteSection } from '../components/home/QuoteSection';
import { AtelierSection } from '../components/home/AtelierSection';
import { ForcedBreak } from '../components/ui/ForcedBreak';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className="flex-grow pt-20">
      <Hero />
      <ForcedBreak />
      <FeaturedWorks />
      <ForcedBreak />
      <ProcessSection />
      <QuoteSection />
      <AtelierSection />
    </main>
  );
};
