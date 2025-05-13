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

const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
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

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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
            Your <span className="text-secondary">questions</span>, answered
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Whether you're a new client or a long-time partner, we're here to help. 
            Below are answers to the most common questions.
          </motion.p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-secondary text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="mb-4"
              >
                <div 
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 ${activeIndex === index ? 'shadow-md' : ''}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 transition-colors duration-300"
                    aria-expanded={activeIndex === index}
                  >
                    <div className="flex items-center">
                      <span className="inline-block w-8 h-8 rounded-full bg-secondary/10 text-secondary font-semibold flex items-center justify-center mr-4">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-primary pr-8">{faq.question}</h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 ${activeIndex === index ? 'bg-secondary border-secondary' : 'bg-white'}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180 text-white' : 'text-gray-500'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-gray-100">
                          <p className="text-gray-600 pl-12">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl"
          >
            <h3 className="text-xl font-bold text-primary mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please contact our friendly team.</p>
            <a href="/contact" className="btn-primary inline-block">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
