'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  const languageOptions = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  const currentLanguage =
    languageOptions.find((lang) => lang.code === language) ||
    languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'en' | 'es' | 'fr');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-steel-300 hover:text-white hover:bg-steel-800 transition-all duration-300"
        aria-label="Select language"
      >
        <Globe size={18} />
        <span className="hidden sm:inline text-sm font-medium">
          {currentLanguage.code.toUpperCase()}
        </span>
        <span className="text-lg">{currentLanguage.flag}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-steel-900 rounded-lg shadow-xl border border-steel-800 overflow-hidden animate-fade-in-up z-50">
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                language === lang.code
                  ? 'bg-steel-800 text-forge-400'
                  : 'text-steel-300 hover:bg-steel-800 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{lang.flag}</span>
                <span className="font-medium">{lang.label}</span>
              </div>
              {language === lang.code && (
                <Check size={18} className="text-forge-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
