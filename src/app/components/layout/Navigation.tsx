'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const Navigation = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  let closeTimer: ReturnType<typeof setTimeout> | null = null;

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
    { label: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => {
            if (item.dropdown) {
              if (closeTimer) clearTimeout(closeTimer);
              setOpenDropdown(item.label);
            }
          }}
          onMouseLeave={() => {
            if (item.dropdown) {
              closeTimer = setTimeout(() => setOpenDropdown(null), 150);
            }
          }}
        >
          {item.dropdown ? (
            <>
              <button
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'dark:text-forge-400 dark:bg-steel-800 text-forge-600 bg-steel-100'
                    : 'dark:text-steel-300 dark:hover:text-white dark:hover:bg-steel-800 text-steel-700 hover:text-steel-900 hover:bg-steel-100'
                }`}
                onClick={() =>
                  setOpenDropdown(openDropdown === item.label ? null : item.label)
                }
              >
                <span>{item.label}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openDropdown === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-56 dark:bg-steel-900 bg-white rounded-lg shadow-xl border dark:border-steel-800 border-steel-200 overflow-hidden animate-fade-in-up">
                  {item.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.href}
                      href={dropItem.href}
                      className="block px-4 py-3 dark:text-steel-300 text-steel-700 dark:hover:text-white hover:text-steel-900 dark:hover:bg-steel-800 hover:bg-steel-100 transition-colors duration-200"
                    >
                      {dropItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive(item.href)
                  ? 'dark:text-forge-400 dark:bg-steel-800 text-forge-600 bg-steel-100'
                  : 'dark:text-steel-300 dark:hover:text-white dark:hover:bg-steel-800 text-steel-700 hover:text-steel-900 hover:bg-steel-100'
              }`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
