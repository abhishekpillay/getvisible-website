'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const stats = [
  {
    value: '40+',
    label: 'Projects',
    description: 'Our portfolio showcases a selection of our most impactful client projects we worked on throughout our journey.',
    link: '/case-studies',
    linkText: 'See our latest case studies',
  },
  {
    value: '2015',
    label: 'Founded in',
    description: 'Founded in 2015, our agency was born out of a passion for design. Our years of experience fuel our creativity.',
    link: '/about-us',
    linkText: 'Read about our story',
  },
  {
    value: '100%',
    label: 'Driven by passion',
    description: 'Our team lives and breathes creativity, bringing genuine passion to every project we contribute on.',
    link: '/about-us',
    linkText: 'Meet the team',
  },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.stat-number', 
          { opacity: 0, y: 20 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.2,
            ease: 'power3.out'
          }
        );
      }, containerRef);
      
      return () => ctx.revert();
    }
  }, [isInView]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="stat-number text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{stat.label}</h3>
              <p className="text-gray-600 mb-6">{stat.description}</p>
              <a
                href={stat.link}
                className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors duration-300"
              >
                {stat.linkText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
