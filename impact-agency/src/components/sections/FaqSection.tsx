'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Button } from '../ui/Button';

const faqs = [
  {
    question: 'What exactly do your organic SEO services include?',
    answer:
      'Our organic SEO services cover the full spectrum, from technical SEO audits and on-page optimization to high-quality content creation, keyword strategy, and authoritative link building. We also help you optimize for Answer Engine Optimization (AEO) to improve visibility in AI-driven search experiences like Google\'s SGE and ChatGPT.',
  },
  {
    question: 'How is your SaaS growth marketing strategy different from other agencies?',
    answer:
      'We specialize in scaling SaaS brands, and our strategies are built around long-term growth, not vanity metrics. Unlike generic agencies, we start by mapping keywords to your Ideal Customer Profile (ICP) and buyer journey, ensuring every piece of content is aligned with real search intent and sales outcomes. We combine traditional SEO, AEO, content marketing, and influencer outreach with a deep understanding of your full funnel, from acquisition to retention. The goal isn\'t just more traffic—it\'s qualified pipeline growth.',
  },
  {
    question: 'Can you handle our content, SEO, and strategy end-to-end?',
    answer:
      'Absolutely. We operate as an extension of your team, handling everything from strategy and SEO execution to content production, whether it’s blog articles, LinkedIn posts, or high-converting landing page copy. You stay focused on product and sales; we’ll grow your organic presence.',
  },
  {
    question: 'How hands-on will we need to be during the process?',
    answer:
      'We aim to make things as seamless as possible for your team. After the initial strategy alignment and onboarding, you can be as hands-on or hands-off as you like. We’ll keep you updated through regular check-ins and reports, but we handle the heavy lifting.',
  },
  {
    question: 'Do you offer ongoing consulting or just one-off projects?',
    answer:
      'We do both. Most of our clients partner with us on a retainer basis for ongoing growth, but we’re also happy to support specific one-off projects like SEO audits, content launches, or AEO strategy workshops.',
  },
  {
    question: 'What does onboarding look like?',
    answer:
      'Onboarding starts with a discovery call and audit. We dig into your goals, analytics, current performance, and competitive landscape. Then we develop a roadmap tailored to your growth stage, channel priorities, and internal bandwidth. You’ll receive a 90-day action plan within the first two weeks.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Left: Heading and Description */}
          <div className="md:w-5/12 w-full mb-8 md:mb-0 text-left">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 text-left"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 text-left"
            >
              Answers to our most common client questions.
            </motion.p>
          </div>

          {/* Right: FAQ Accordions */}
          <div className="md:w-7/12 w-full">
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
                  <button
                    className="flex justify-between items-center w-full text-left p-6 focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center">
                      
                      <span className="text-base font-medium text-gray-800 pr-8">{faq.question}</span>
                    </div>
                    <span className="ml-4 transition-transform duration-200 flex items-center" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
</span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0">
                          <p className="text-xs text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-14 md:p-20 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-3xl shadow-2xl border-2 border-primary/20"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Let’s build your organic growth engine—designed for scale, built for results.</h2>
          <Button href="/contact" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Book Your Strategy Call →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
