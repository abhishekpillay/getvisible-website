'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const clients = [
  { name: 'Google', logo: '/images/clients/google.svg' },
  { name: 'Microsoft', logo: '/images/clients/microsoft.svg' },
  { name: 'Airbnb', logo: '/images/clients/airbnb.svg' },
  { name: 'Spotify', logo: '/images/clients/spotify.svg' },
  { name: 'Amazon', logo: '/images/clients/amazon.svg' },
  { name: 'Slack', logo: '/images/clients/slack.svg' },
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const clientsEl = clientsRef.current;

    if (section && clientsEl) {
      // Create a subtle parallax effect
      gsap.fromTo(
        clientsEl,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Trusted by industry leaders and loved by clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've had the privilege of working with some of the most innovative companies across various industries.
          </p>
        </motion.div>

        <div ref={clientsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative w-full h-full">
                <div className="bg-gray-200 rounded-md p-4 flex items-center justify-center h-full">
                  {client.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
