'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'On average, branding projects take 4-6 weeks, while web design and development projects can range from 8-12 weeks. We provide a detailed timeline and keep you informed throughout the project.',
    category: 'Process',
  },
  {
    question: 'What is the cost of working with you?',
    answer: 'Our pricing varies based on project scope, complexity, and specific requirements. We offer customized solutions tailored to your needs and budget. Contact us for a personalized quote.',
    category: 'Pricing',
  },
  {
    question: 'How involved will I be in the process?',
    answer: 'We believe in collaborative partnerships. You\'ll be involved at key milestones throughout the project, providing feedback and approvals. We maintain regular communication to ensure your vision is realized.',
    category: 'Process',
  },
  {
    question: 'Can you work with my existing brand?',
    answer: 'Absolutely! We can work with your existing brand assets and guidelines to ensure consistency across all deliverables. We can also provide recommendations for refinements if needed.',
    category: 'Services',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally after launch. We can discuss these options based on your specific needs.',
    category: 'Services',
  },
  {
    question: 'What makes your agency different from others?',
    answer: 'Our unique approach combines strategic thinking with creative execution. We focus on delivering measurable results, not just beautiful designs. Our team brings diverse expertise and a commitment to excellence to every project.',
    category: 'Company',
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Animate decorative shapes
        gsap.fromTo('.faq-shape',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'back.out(1.7)' }
        );
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="faq-shape absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
      <div className="faq-shape absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4"
          >
            FAQ
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-primary mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8"
          >
            Answers to our most common client questions.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 shadow-md">
                <div className="flex justify-between items-center w-full text-left p-6">
                  <div className="flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-secondary/10 text-secondary font-semibold flex items-center justify-center mr-4">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-primary pr-8">{faq.question}</h3>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 pl-12">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-14 md:p-20 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-3xl shadow-2xl border-2 border-primary/20"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Still have questions?</h3>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">Can't find the answer you're looking for? Please contact our friendly team.</p>
          <a href="/contact" className="btn-primary inline-block text-lg md:text-2xl px-10 py-5 mt-2">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
