'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Animate decorative shapes
        gsap.fromTo('.cta-shape',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'back.out(1.7)' }
        );
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary z-0"></div>
      
      {/* Decorative elements */}
      <motion.div style={{ y: y1 }} className="cta-shape absolute top-20 right-10 w-80 h-80 rounded-full bg-white/10 blur-3xl"></motion.div>
      <motion.div style={{ y: y2 }} className="cta-shape absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></motion.div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-6"
          >
            Get Started
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Let's bring your <span className="text-white/90 relative inline-block">
              <span className="relative z-10">vision</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/30 -rotate-1 z-0"></span>
            </span> to life
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Ready to take your brand to the next level? Let's start a conversation about your goals and how we can help you achieve them.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center group"
            >
              Book a discovery call
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <Link
              href="/case-studies"
              className="glass-effect text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all duration-300 border border-white/10 flex items-center justify-center group"
            >
              View our work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </Link>
          </motion.div>
          
          {/* Stats section */}
          <div className="relative mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: '40+', label: 'Projects Completed', icon: '🏆' },
                { value: '95%', label: 'Client Satisfaction', icon: '⭐' },
                { value: '8+', label: 'Years Experience', icon: '🚀' },
                { value: '24/7', label: 'Support', icon: '🛠️' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass-effect rounded-xl p-6 text-center shadow-modern border border-white/10"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-3xl font-bold mb-1">{item.value}</div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
