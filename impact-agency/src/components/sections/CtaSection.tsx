// Restored full CtaSection implementation
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-14 md:p-20 inline-block"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Ready to grow your SaaS?
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">
            Let’s work together to unlock your product’s full potential with proven SEO strategies.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-lg md:text-2xl px-10 py-5 mt-2">
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
