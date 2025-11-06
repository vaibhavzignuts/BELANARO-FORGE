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

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    {
      label: t('nav.products'),
      href: '/products',
      dropdown: [
        { label: t('nav.bearingRings'), href: '/products#bearing-rings' },
        { label: t('nav.autoComponents'), href: '/products#auto-components' },
        { label: t('nav.flangesShafts'), href: '/products#flanges-shafts' },
        { label: t('nav.customForging'), href: '/products#custom-forging' },
      ],
    },
    { label: t('nav.manufacturing'), href: '/manufacturing' },
    { label: t('nav.quality'), href: '/quality' },
    { label: t('nav.dealer'), href: '/dealer' },
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
          onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.dropdown ? (
            <>
              <button
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-forge-400 bg-steel-800'
                    : 'text-steel-300 hover:text-white hover:bg-steel-800'
                }`}
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-steel-900 rounded-lg shadow-xl border border-steel-800 overflow-hidden animate-fade-in-up">
                  {item.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.href}
                      href={dropItem.href}
                      className="block px-4 py-3 text-steel-300 hover:text-white hover:bg-steel-800 transition-colors duration-200"
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
                  ? 'text-forge-400 bg-steel-800'
                  : 'text-steel-300 hover:text-white hover:bg-steel-800'
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
