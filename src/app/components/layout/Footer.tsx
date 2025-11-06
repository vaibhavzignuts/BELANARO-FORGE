'use client';

import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Products', href: '/products' },
      { label: 'Manufacturing', href: '/manufacturing' },
    ],
    products: [
      { label: 'Bearing Rings', href: '/products#bearing-rings' },
      { label: 'Auto Components', href: '/products#auto-components' },
      { label: 'Flanges & Shafts', href: '/products#flanges-shafts' },
      { label: 'Custom Forging', href: '/products#custom-forging' },
    ],
    company: [
      { label: 'Quality', href: '/quality' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Become a Dealer', href: '/dealer' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-steel-950 border-t border-steel-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-forge-500 to-forge-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">
                  B
                </span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">
                  BELANARO FORGE
                </div>
                <div className="text-xs text-steel-400">PRECISION FORGING</div>
              </div>
            </div>
            <p className="text-steel-400 text-sm mb-6">
              Leading manufacturer and exporter of bearing rings, auto parts,
              and precision-forged components from India.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+918735030126"
                className="flex items-center gap-3 text-steel-400 hover:text-forge-400 transition-colors group"
              >
                <Phone
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">+91 8735030126</span>
              </a>
              <a
                href="mailto:jayom@belanaro.com"
                className="flex items-center gap-3 text-steel-400 hover:text-forge-400 transition-colors group"
              >
                <Mail
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">jayom@belanaro.com</span>
              </a>
              <div className="flex items-start gap-3 text-steel-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Rajkot, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-forge-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-forge-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-forge-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold text-white text-sm mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-steel-900 rounded-lg flex items-center justify-center text-steel-400 hover:text-white hover:bg-forge-500 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-steel-500 text-sm">
              © {currentYear} BELANARO FORGE LLP. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-steel-500 hover:text-forge-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-steel-500 hover:text-forge-400 text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
