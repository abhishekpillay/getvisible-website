'use client';

import { motion } from 'framer-motion';

export default function ClientLogosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[
  "Simplified AI",
  "Otto AI",
  "Fireflies AI",
  "1Fort",
  "Roomi",
  "Dupe.com"
].map((name, index) => (
  <motion.div
    key={name}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="w-full max-w-[120px] h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
  >
    <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
      <span className="text-gray-500 font-medium">{name}</span>
    </div>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
}
