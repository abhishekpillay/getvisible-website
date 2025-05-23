"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "KD DESHPANDE",
    title: "CEO & Co-Founder",
    avatar: "/simplified-ceo-kd-deshpande.jpeg",
    logo: "/65b38cc207d91bef7da299c0_Simplified-p-800.png",
    quote:
      "Blynk has completely transformed the way we work. With its seamless integrations and powerful automation features, our team's productivity has soared.",
    stats: [
      { value: "3.65x", label: "Yearly Revenue" },
      { value: "98%", label: "Monthly Conversions" },
    ],
  },
  {
    name: "Ajay Yadav",
    title: "CEO & Co-Founder",
    avatar: "/ajay yadav.jpeg",
    logo: "/joinotto-logo.webp",
    quote:
      "We've seen a dramatic increase in engagement and conversions since switching to this platform.",
    stats: [
      { value: "2.1x", label: "Engagement Rate" },
      { value: "85%", label: "Retention" },
    ],
  },
  {
    name: "Alex Larson",
    title: "CEO & Co-Founder",
    avatar: "/Roomi-founder-alex-larson.jpeg",
    logo: "/65b35eb4111f2b7f5d12ff3f_Roomi.svg",
    quote:
      "An absolute game-changer for our workflow and results. Highly recommended!",
    stats: [
      { value: "4.2x", label: "Efficiency" },
      { value: "120%", label: "ROI" },
    ],
  },
];

export default function CustomerTestimonialsSection() {
  const [index, setIndex] = useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);
  // On manual navigation, reset interval
  const handleNav = (newIndex: number) => {
    setIndex(newIndex);
  };
  return (
    <div className="py-16 w-full" style={{ backgroundColor: '#F8F9FB' }}>
      <div className="w-full px-4">
        <div className="max-w-5xl mx-auto rounded-3xl shadow-lg bg-[#F8F9FB] flex flex-col md:flex-row overflow-hidden relative" style={{ minHeight: '480px', minWidth: '1000px' }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full flex flex-col md:flex-row"
            >
              {/* Left: Avatar, Name, Title, Logo */}
              <div className="flex-1 p-8 flex flex-col items-center justify-center bg-white">
                <motion.img
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-40 h-40 rounded-2xl object-cover mb-6 shadow-lg"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg font-semibold text-gray-900"
                >
                  {testimonials[index].name}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="text-gray-500 text-sm mb-4"
                >
                  {testimonials[index].title}
                </motion.div>
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  src={testimonials[index].logo} 
                  alt="Company Logo" 
                  className="w-16 h-auto" 
                />
              </div>

              {/* Right: Quote and Stats */}
              <div className="flex-[2] p-8 flex flex-col justify-center">
                <motion.blockquote 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-base font-medium text-gray-900 mb-8 leading-snug"
                >
                  "{testimonials[index].quote}"
                </motion.blockquote>
                <div className="flex gap-12 flex-wrap">
                  {testimonials[index].stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    >
                      <div className="font-bold text-primary tracking-tight" style={{ fontSize: '3.5rem', lineHeight: 1 }}>{stat.value}</div>
                      <div className="font-normal text-gray-900">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Carousel Buttons - bottom right */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-10">
            <button
              aria-label="Previous testimonial"
              onClick={() => handleNav(index === 0 ? testimonials.length - 1 : index - 1)}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg hover:bg-[#2e78eb] hover:text-white hover:shadow-xl active:scale-95 transition-all duration-200 group"
              style={{ boxShadow: '0 4px 24px 0 rgba(34, 34, 68, 0.10)' }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="stroke-current group-hover:stroke-white transition-colors duration-200">
  <path d="M15 19l-7-7 7-7" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => handleNav(index === testimonials.length - 1 ? 0 : index + 1)}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg hover:bg-[#2e78eb] hover:text-white hover:shadow-xl active:scale-95 transition-all duration-200 group"
              style={{ boxShadow: '0 4px 24px 0 rgba(34, 34, 68, 0.10)' }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="stroke-current group-hover:stroke-white transition-colors duration-200">
  <path d="M9 5l7 7-7 7" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
