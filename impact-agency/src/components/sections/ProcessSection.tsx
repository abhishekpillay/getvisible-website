'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const processes = [
  {
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience to create a strategic foundation.',
    icon: '',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Strategy',
    description: 'Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.',
    icon: '',
    color: 'from-purple-500 to-indigo-400',
  },
  {
    title: 'Design',
    description: 'Our creative team crafts visually stunning designs that align with your brand identity and strategic goals.',
    icon: '',
    color: 'from-pink-500 to-rose-400',
  },
  {
    title: 'Development',
    description: 'We bring designs to life with clean, efficient code and cutting-edge technology solutions.',
    icon: '',
    color: 'from-amber-500 to-orange-400',
  },
  {
    title: 'Launch',
    description: 'After thorough testing, we launch your project and provide training to ensure a smooth transition.',
    icon: '',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Support',
    description: 'Our relationship continues with ongoing support, maintenance, and optimization to ensure long-term success.',
    icon: '',
    color: 'from-blue-500 to-indigo-400',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
    }

    if (isInView && sectionRef.current) {
      const ctx = gsap.context(() => {
        // Animate process cards
        gsap.fromTo('.process-card', 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.2,
            duration: 0.8,
            ease: 'back.out(1.7)',
          }
        );
        
        // Animate the path if it exists
        if (pathRef.current) {
          const pathLength = pathRef.current.getTotalLength() || 0;
          
          gsap.set(pathRef.current, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });
          
          gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power2.out',
          });
        }
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
          >
            Our Approach
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-primary mb-4"
          >
            Our <span className="text-secondary">proven</span> process
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mb-12"
          >
            We follow a structured approach to ensure every project is delivered on time, 
            on budget, and exceeds expectations.
          </motion.p>
        </div>

        <div className="relative">
          {/* Process path for larger screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 z-0">
            <svg className="absolute left-1/2 top-0 h-full -translate-x-1/2" width="10" height="100%" viewBox="0 0 10 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path 
                ref={pathRef}
                d="M5 0V800" 
                stroke="url(#process-gradient)" 
                strokeWidth="2" 
                strokeDasharray="6 3"
                className="path"
              />
              <defs>
                <linearGradient id="process-gradient" x1="5" y1="0" x2="5" y2="800" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 relative z-10">
            {processes.map((process, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`process-card relative ${index % 2 === 0 ? 'lg:translate-x-8' : 'lg:-translate-x-8'}`}
              >
                <div className="bg-white p-8 rounded-xl shadow-modern hover:shadow-modern-lg transition-all duration-500 h-full transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex flex-col mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${process.color} text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-lg`}>
                      <span>{process.icon}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-primary">{process.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">{process.description}</p>
                  
                  {/* Connector dots for larger screens */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 w-8 h-8 -translate-y-1/2 -translate-x-1/2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${process.color} absolute ${index % 2 === 0 ? '-left-[60px]' : 'left-[60px]'} top-1/2 -translate-y-1/2 shadow-glow`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center group"
            >
              Start your project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
