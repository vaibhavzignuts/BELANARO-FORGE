'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from '../shared/LanguageSwitcher';
import ThemeSwitcher from '../shared/ThemeSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const { t } = useLanguage();

  // Header background changes on scroll
  const isScrolled = scrollPosition > 50;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'dark:bg-steel-900/95 bg-white/90 backdrop-blur-md shadow-lg border-b dark:border-steel-800 border-steel-200'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-forge-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-forge-500 to-forge-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xl">
                    B
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-bold text-xl dark:text-white text-steel-900 leading-none">
                  BELANARO FORGE
                </div>
                <div className="text-xs dark:text-steel-400 text-steel-600 tracking-wider">
                  PRECISION FORGING
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <Navigation />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Language & Theme */}
              <LanguageSwitcher />
              <ThemeSwitcher />

              {/* CTA Button - Hidden on mobile */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-forge-500 to-forge-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-forge-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t('header.getQuote')}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 dark:text-white text-steel-800 hover:text-forge-400 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
