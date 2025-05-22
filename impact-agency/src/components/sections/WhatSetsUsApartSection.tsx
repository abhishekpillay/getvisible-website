"use client";

import React from "react";

export default function WhatSetsUsApartSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What sets us apart from other</h2>
        <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left: Mandala */}
          <div className="flex-1 p-8 bg-black text-white">
            <div className="flex items-center mb-6">
              {/* Replace with your logo if needed */}
              <img src="/visible logo.svg" alt="Visible Logo" width={80} height={24} className="inline-block align-middle" />
            </div>
            <ul className="space-y-4">
              <li className="flex items-center border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                <span className="text-green-400 mr-3">✓</span> Generic, one-size-fits-all
              </li>
              <li className="flex items-center border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                <span className="text-green-400 mr-3">✓</span> Clear pricing, no hidden fees
              </li>
              <li className="flex items-center border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                <span className="text-green-400 mr-3">✓</span> Agile, efficient, no delays
              </li>
              <li className="flex items-center border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                <span className="text-green-400 mr-3">✓</span> Flexible terms, no long contracts
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span> Direct access to experts
              </li>
            </ul>
          </div>
          {/* Right: Other Agencies */}
          <div className="flex-1 p-8 bg-white text-gray-400">
            <div className="font-semibold text-lg mb-6">Other Agencies</div>
            <ul className="space-y-4">
              <li className="flex items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                <span className="mr-3">✗</span> Generic, one-size-fits-all
              </li>
              <li className="flex items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                <span className="mr-3">✗</span> Vague reports, surprise costs
              </li>
              <li className="flex items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                <span className="mr-3">✗</span> Slow processes, missed deadlines
              </li>
              <li className="flex items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
                <span className="mr-3">✗</span> Locked into lengthy agreements
              </li>
              <li className="flex items-center">
                <span className="mr-3">✗</span> Generic account managers
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="bg-gradient-to-r from-[#2e78eb] to-[#1861c2] text-white px-6 py-3 rounded-xl shadow-lg font-bold text-base transition-all duration-200 hover:brightness-110 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2e78eb]/40"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Book a Strategy Call &rarr;
        </button>
      </div>
    </section>
  );
}
