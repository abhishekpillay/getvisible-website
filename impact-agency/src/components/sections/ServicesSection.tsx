'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: 'Content creation',
    image: '/images/services/content-creation.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
    )
  },
  {
    title: 'Brand strategy',
    image: '/images/services/brand-strategy.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    )
  },
  {
    title: 'Digital marketing',
    image: '/images/services/digital-marketing.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
    )
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

import SuccessStoriesSection from "./SuccessStoriesSection";
import WhatSetsUsApartSection from "./WhatSetsUsApartSection";
import CustomerTestimonialsSection from './CustomerTestimonialsSection';
import FaqSection from './FaqSection';

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Create a subtle parallax effect on the decorative elements
        gsap.to('.services-decoration-1', {
          y: -50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
        
        gsap.to('.services-decoration-2', {
          y: 50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="services-decoration-1 absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="services-decoration-2 absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Delivering creative digital solutions
          </h2>
          <p className="text-lg text-gray-600">
            Our team of experts combines creativity and technical expertise to deliver exceptional results that help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service) => (
    <div
      key={service.title}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
      style={{ minHeight: 320 }}
    >
      <div className="w-full h-48">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-6 bg-white">
        <div className="flex items-center gap-2 mb-2">
          {service.icon}
          <span className="font-semibold text-gray-900 text-base">{service.title}</span>
        </div>
      </div>
    </div>
  ))}
</div>
      <SuccessStoriesSection />
      <WhatSetsUsApartSection />
      <CustomerTestimonialsSection />
      <FaqSection />
    </div>
  </section>
  );
}
