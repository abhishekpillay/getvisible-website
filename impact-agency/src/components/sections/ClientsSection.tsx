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
  { name: 'Simplified AI', logo: '/65b38cc207d91bef7da299c0_Simplified-p-800.png' },
  { name: 'Otto AI', logo: '/joinotto-logo.webp' },
  { name: 'Fireflies AI', logo: '/65b36f5804aae4916f459bb2_Fireflies AI.webp' },
  { name: '1Fort', logo: '/65b362078debdc76ecca7e3e_1fort.svg' },
  { name: 'Roomi', logo: '/65b35eb4111f2b7f5d12ff3f_Roomi.svg' },
  { name: 'Dupe.com', logo: '/65b35f941f55e4b2d62e30ad_theguarantors.webp' },
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
          
          <h2 className="text-3xl font-bold mb-4">Who We Work With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with growth-stage SaaS companies that are ready to move beyond paid spend and build an organic engine that compounds.
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
              className="w-32 h-16 flex items-center justify-center transition-all duration-300"
            >
              <div className={`relative flex items-center justify-center ${client.name === 'Otto AI' ? 'w-16 h-8 mx-auto' : 'w-full h-full'}`}>
                {client.logo ? (
                  client.name === 'Otto AI' ? (
                    <Image
                      src={client.logo}
                      alt={client.name + ' Logo'}
                      width={64}
                      height={32}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <Image
                      src={client.logo}
                      alt={client.name + ' Logo'}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  )
                ) : (
                  <span className="text-gray-400 text-sm">{client.name}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
