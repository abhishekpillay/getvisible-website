'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate gradient background
      gsap.to('.hero-gradient', {
        backgroundPosition: '200% 200%',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Animate grid lines
      gsap.to('.hero-grid', {
        backgroundPosition: '0 10px',
        duration: 15,
        repeat: -1,
        ease: 'linear'
      });

      // Animate text reveal
      const tl = gsap.timeline();
      tl.from('.hero-title', { opacity: 0, y: 30, duration: 0.7 })
        .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.6 }, "-=0.4");
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Light blue background with grid */}
      <div className="absolute inset-0 bg-[#f0f4f9] hero-gradient z-0"></div>
      <div className="absolute inset-0 hero-grid bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAwdjQwSDBWMGg0MHpNMSAxaDM4djM4SDFWMXoiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30 z-0"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-full mx-auto">
          

          {/* Main headline */}
          <h1 className="hero-title font-bold text-gray-900 mb-6 leading-tight text-[clamp(1.875rem,5.6vw,3.875rem)]">
            You Built the Product.<br />
            <span className="whitespace-nowrap">We're the SaaS SEO Agency That Grows It.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-[clamp(0.9rem,1.8vw,1.35rem)] font-normal">
            We help companies in FinTech, AI, and B2B SaaS build sustainable growth through content, AI-powered SEO services, and search strategies that actually drive results.
          </p>
          <button
            className="bg-gradient-to-r from-[#2e78eb] to-[#1861c2] text-white px-6 py-3 rounded-xl shadow-lg font-medium text-base transition-all duration-200 hover:brightness-110 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2e78eb]/40"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Book a Strategy Call →
          </button>
        </div>
      </div>
    </section>
  );
}
