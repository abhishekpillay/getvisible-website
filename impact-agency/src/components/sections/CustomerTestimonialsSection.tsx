"use client";

import React from "react";

export default function CustomerTestimonialsSection() {
  return (
    <div className="py-16 w-full" style={{ backgroundColor: '#F8F9FB' }}>
      <div className="w-full px-4">
        <div className="max-w-5xl mx-auto rounded-3xl shadow-lg bg-[#F8F9FB] flex flex-col md:flex-row overflow-hidden">
          {/* Left: Avatar, Name, Title, Logo */}
          <div className="flex-1 p-8 flex flex-col items-center justify-center bg-white">
            <img
              src="/ajay yadav.jpeg"
              alt="Ajay Yadav"
              className="w-40 h-40 rounded-2xl object-cover mb-6 shadow-lg"
            />
            <div className="text-lg font-semibold text-gray-900">Ajay Yadav</div>
            <div className="text-gray-500 text-sm mb-4">CEO & Co-Founder</div>
            <img src="/joinotto-logo.webp" alt="JoinOtto Logo" className="w-16 h-auto" />
          </div>

          {/* Right: Quote and Stats */}
          <div className="flex-[2] p-8 flex flex-col justify-center">
            <blockquote className="text-base font-medium text-gray-900 mb-8 leading-snug">
              "Blynk has completely transformed the way we work. With its seamless integrations and powerful automation features, our team's productivity has soared."
            </blockquote>
            <div className="flex gap-12 flex-wrap">
              <div>
                <div className="font-bold text-primary tracking-tight" style={{ fontSize: '3.5rem', lineHeight: 1 }}>3.65x</div>
                <div className="font-normal text-gray-900">Yearly Revenue</div>
              </div>
              <div>
                <div className="font-bold text-primary tracking-tight" style={{ fontSize: '3.5rem', lineHeight: 1 }}>98%</div>
                <div className="font-normal text-gray-900">Monthly Conversions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
