'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { HOTEL_INFO } from '@/constants/hotelData';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Rooms & Lodge', href: '/rooms' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian-950/95 backdrop-blur-md py-3 shadow-2xl border-b border-gold-400/20'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo extracted from Business Card */}
            <Logo showTagline={false} size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 py-1 ${
                      isActive
                        ? 'text-gold-400 font-semibold'
                        : 'text-gray-200 hover:text-gold-300'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action - Phone Numbers from Card */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col text-right">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center justify-end gap-1.5 text-xs text-gray-200 hover:text-gold-300 font-semibold tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>{HOTEL_INFO.phone}</span>
                </a>
                <a
                  href={`tel:${HOTEL_INFO.secondaryPhone}`}
                  className="text-[11px] text-gray-400 hover:text-gold-300 font-medium tracking-wider"
                >
                  {HOTEL_INFO.secondaryPhone}
                </a>
              </div>

              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-obsidian-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-gold-500/20 hover:scale-105"
              >
                Inquire & Book
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold-500 hover:text-obsidian-950 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 bg-obsidian-950/95 backdrop-blur-xl border-b border-gold-400/20 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-serif tracking-wide py-2 flex items-center justify-between border-b border-white/5 ${
                        isActive
                          ? 'text-gold-400 font-bold pl-2 border-gold-400/40'
                          : 'text-gray-200 hover:text-gold-300'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-gold-400" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2 flex flex-col gap-3 border-t border-white/10">
                <span className="text-xs text-gold-400 font-medium uppercase tracking-wider">Contact Phone Lines</span>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-200 hover:text-gold-400 font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>{HOTEL_INFO.phone}</span>
                </a>
                <a
                  href={`tel:${HOTEL_INFO.secondaryPhone}`}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>{HOTEL_INFO.secondaryPhone}</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full py-3.5 mt-2 text-center rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase shadow-lg"
                >
                  Inquire Room / Food
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
