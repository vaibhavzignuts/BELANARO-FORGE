'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    {
      label: t('nav.products'),
      href: '/products',
      dropdown: [
        { label: t('nav.bearingRings'), href: '/products/bearing-rings' },
        { label: t('nav.autoComponents'), href: '/products/auto-components' },
        { label: t('nav.flangesShafts'), href: '/products/flanges-shafts' },
        { label: t('nav.customForging'), href: '/products/precision-forged-parts' },
      ],
    },
    { label: t('nav.manufacturing'), href: '/manufacturing' },
    { label: t('nav.quality'), href: '/quality' },
    { label: t('nav.workshop'), href: '/workshop' },
    { label: t('nav.csr'), href: '/csr' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm dark:bg-steel-950 bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b dark:border-steel-800 border-steel-200">
            <div>
              <div className="font-heading font-bold text-xl dark:text-white text-steel-900">
                BELANARO FORGE
              </div>
              <div className="text-xs dark:text-steel-400 text-steel-600">PRECISION FORGING</div>
            </div>
            <button
              onClick={onClose}
              className="p-2 dark:text-steel-400 text-steel-600 hover:text-steel-900 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive(item.href)
                            ? 'dark:text-forge-400 dark:bg-steel-800 text-forge-600 bg-steel-100'
                            : 'dark:text-steel-300 dark:hover:text-white dark:hover:bg-steel-800 text-steel-700 hover:text-steel-900 hover:bg-steel-100'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            expandedItem === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Dropdown Items */}
                      {expandedItem === item.label && (
                        <ul className="mt-2 ml-4 space-y-1">
                          {item.dropdown.map((dropItem) => (
                            <li key={dropItem.href}>
                              <Link
                                href={dropItem.href}
                                onClick={onClose}
                                className="block px-4 py-2 dark:text-steel-400 text-steel-700 dark:hover:text-white hover:text-steel-900 dark:hover:bg-steel-800 hover:bg-steel-100 rounded-lg transition-colors"
                              >
                                {dropItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                        isActive(item.href)
                          ? 'dark:text-forge-400 dark:bg-steel-800 text-forge-600 bg-steel-100'
                          : 'dark:text-steel-300 dark:hover:text-white dark:hover:bg-steel-800 text-steel-700 hover:text-steel-900 hover:bg-steel-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t dark:border-steel-800 border-steel-200">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-forge-500 to-forge-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-forge-500/50 transition-all duration-300"
            >
              {t('header.getQuote')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
