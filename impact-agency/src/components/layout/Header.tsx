'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={isScrolled ? {
        background: 'rgba(255,255,255,0.8)',
        boxShadow: '0 2px 24px 0 rgba(0,0,0,0.04)',
        backdropFilter: 'blur(14px)',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid rgba(200,200,255,0.12)',
      } : {
        background: 'rgba(255,255,255,0)',
        boxShadow: 'none',
        backdropFilter: 'blur(0px)',
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        borderBottom: '1px solid rgba(0,0,0,0)',
      }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration: 0.4
      }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'glass' : ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-1.5">
              <img src="/visible%20logo.svg" alt="Visible Logo" className="h-8 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Pill Shape */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden md:flex items-center bg-white rounded-full shadow-sm px-3 py-1.5"
          >
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[0.95rem] font-medium text-gray-700 hover:text-secondary px-4 py-1.5 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button href="/contact">Contact us</Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-[8px] border-t border-gray-100 md:hidden"
          >
            <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col gap-2">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[1.1rem] font-medium text-neutral-900 hover:text-secondary py-3 px-2 rounded-lg transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
  href="/contact"
  className="mt-2 text-[1rem] text-center"
  onClick={() => setIsMobileMenuOpen(false)}
>
  Contact us
</Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
