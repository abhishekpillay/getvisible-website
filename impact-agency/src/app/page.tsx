'use client';

import ServicesSection from '@/components/sections/ServicesSection';
import FaqSection from '@/components/sections/FaqSection';
import ClientsSection from '@/components/sections/ClientsSection';
import HeroSection from '@/components/sections/HeroSection';
// import IndustriesSection from '@/components/sections/IndustriesSection';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50 origin-left" 
        style={{ scaleX }}
      />
      <main className="flex flex-col">
        <HeroSection />
        <ClientsSection />
        {/* <IndustriesSection /> */}
        <ServicesSection />
        <FaqSection />
      </main>
    </>
  );
}
