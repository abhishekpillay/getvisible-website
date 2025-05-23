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
      <div className="w-full">

        <div className="overflow-hidden py-4">
          <div className="flex items-center gap-20 animate-logo-ticker whitespace-nowrap" style={{ animation: 'logo-ticker 32s linear infinite' }}>
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={client.name + '-' + index}
                className="w-32 h-16 flex items-center justify-center"
                style={{ flex: '0 0 auto' }}
              >
                <div className="relative flex items-center justify-center w-full h-full">
                  <img
                    src={client.logo}
                    alt={client.name + ' Logo'}
                    style={{ objectFit: 'contain', maxHeight: '48px', maxWidth: '128px' }}
                    className="block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes logo-ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}</style>
      </div>
    </section>
  );
}
