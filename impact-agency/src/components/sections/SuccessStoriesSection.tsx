"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { key: 'brands', value: 100, label: "Brands Transformed" },
  { key: 'impressions', value: "300M+", label: "Impressions Generated" },
  { key: 'roi', value: "5x", label: "Average ROI on Campaigns" },
  { key: 'revenue', value: "25M+", label: "in Client Revenue Growth" },
];

function AnimatedBrandsTransformed({ isInView }: { isInView: boolean }) {
  const [value, setValue] = React.useState(80);
  React.useEffect(() => {
    if (isInView) {
      let start = 80;
      const end = 100;
      const duration = 1200; // ms
      let current = start;
      let startTime: number | null = null;
      function step(ts: number) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        current = Math.floor(start + (end - start) * progress);
        setValue(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      }
      requestAnimationFrame(step);
    }
  }, [isInView]);
  return (
    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
      {value}+
    </div>
  );
}

function AnimatedImpressionsGenerated({ isInView }: { isInView: boolean }) {
  const [value, setValue] = React.useState(280);
  React.useEffect(() => {
    if (isInView) {
      let start = 280;
      const end = 300;
      const duration = 1200; // ms, sync with brands
      let current = start;
      let startTime: number | null = null;
      function step(ts: number) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        current = Math.floor(start + (end - start) * progress);
        setValue(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      }
      requestAnimationFrame(step);
    }
  }, [isInView]);
  return (
    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
      {value}M+
    </div>
  );
}

function AnimatedAverageROI({ isInView }: { isInView: boolean }) {
  const [value, setValue] = React.useState(2);
  React.useEffect(() => {
    if (isInView) {
      let start = 2;
      const end = 5;
      const duration = 1200; // ms, sync with others
      let current = start;
      let startTime: number | null = null;
      function step(ts: number) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        current = Math.floor(start + (end - start) * progress);
        setValue(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      }
      requestAnimationFrame(step);
    }
  }, [isInView]);
  return (
    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
      {value}x
    </div>
  );
}

function AnimatedClientRevenueGrowth({ isInView }: { isInView: boolean }) {
  const [value, setValue] = React.useState(15);
  React.useEffect(() => {
    if (isInView) {
      let start = 15;
      const end = 25;
      const duration = 1200; // ms, sync with others
      let current = start;
      let startTime: number | null = null;
      function step(ts: number) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        current = Math.floor(start + (end - start) * progress);
        setValue(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      }
      requestAnimationFrame(step);
    }
  }, [isInView]);
  return (
    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
      {value}M+
    </div>
  );
}

export default function SuccessStoriesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Headline, description, button */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Grow <span className="italic text-primary font-bold bg-yellow-200 px-2 rounded">10x</span> Smarter,<br />Better, Faster
          </h2>
          <p className="text-gray-600 mb-8">
            With a decade of expertise, We crafts bold brands and high-impact campaigns that get results. From strategy to execution, we create with purpose and scale with precision.
          </p>
          <a href="#about" className="inline-flex items-center px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-semibold shadow-sm hover:bg-gray-50 transition mb-4">
            About Us
            <span className="ml-2 inline-flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </span>
          </a>
        </div>
        {/* Right: Stats */}
        <div className="flex-1 grid grid-cols-2 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              {stat.key === 'brands' ? (
                <AnimatedBrandsTransformed isInView={inView} />
              ) : stat.key === 'impressions' ? (
                <AnimatedImpressionsGenerated isInView={inView} />
              ) : stat.key === 'roi' ? (
                <AnimatedAverageROI isInView={inView} />
              ) : stat.key === 'revenue' ? (
                <AnimatedClientRevenueGrowth isInView={inView} />
              ) : (
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
              )}
              <div className="text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
