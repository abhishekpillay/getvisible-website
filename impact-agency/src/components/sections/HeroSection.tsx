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
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          

          {/* Main headline */}
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
            Elevate your brand<br />with digital marketing
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Crafting unforgettable digital experiences for your brand<br />
            through innovative design, strategy, marketing and storytelling.
          </p>
          <button
            className="bg-[#2e78eb] text-white px-5 py-2 rounded-lg shadow-sm hover:bg-[#1861c2] font-medium text-[0.95rem] transition-all duration-200 hover:shadow-md"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}
