'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Circle, Cog, Disc, Boxes, Settings } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      icon: Circle,
      title: 'Bearing Rings',
      subtitle: 'Inner & Outer',
      description:
        'Precision-forged and machined rings designed for high-speed, high-performance bearings.',
      features: ['High-Speed Performance', 'Precision Machining', 'Durability'],
      color: 'from-[#f97316] to-[#dc2626]',
    },
    {
      icon: Cog,
      title: 'Automotive Components',
      subtitle: 'Steering & Suspension',
      description:
        'Forged components for steering, suspension, transmission, and drivetrain applications.',
      features: ['OEM Quality', 'Heavy-Duty', 'Precision Fit'],
      color: 'from-[#dc2626] to-[#ea580c]',
    },
    {
      icon: Disc,
      title: 'Flanges & Shafts',
      subtitle: 'Heavy-Duty Solutions',
      description:
        'Heavy-duty forged flanges and shafts offering excellent mechanical strength and durability.',
      features: ['High Strength', 'Corrosion Resistant', 'Custom Sizes'],
      color: 'from-[#ea580c] to-[#eab308]',
    },
    {
      icon: Boxes,
      title: 'Precision Forged Parts',
      subtitle: 'Custom Engineering',
      description:
        'Custom-engineered parts designed to meet specific industrial requirements.',
      features: ['Bespoke Solutions', 'Any Material', 'Technical Support'],
      color: 'from-[#eab308] to-[#f97316]',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#020617] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#f97316] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#dc2626] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316]/10 border border-[#f97316]/30 rounded-full mb-6">
            <Settings size={16} className="text-[#fb923c]" />
            <span className="text-[#fb923c] text-sm font-semibold">
              OUR PRODUCTS
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading, Archivo, sans-serif)' }}
          >
            Forged Range of{' '}
            <span className="bg-gradient-to-r from-[#fb923c] to-[#dc2626] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            We manufacture and export a complete range of precision-forged
            components for automotive, bearing, and industrial applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="product-card group relative"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${product.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                ></div>

                {/* Card */}
                <div className="relative h-full bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 hover:border-[#f97316]/50 transition-all duration-500 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3
                      className="text-2xl font-bold text-white mb-2 group-hover:text-[#fb923c] transition-colors"
                      style={{
                        fontFamily: 'var(--font-heading, Archivo, sans-serif)',
                      }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#fb923c] font-medium mb-4">
                      {product.subtitle}
                    </p>
                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-[#cbd5e1]"
                      >
                        <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    href={`/products#${product.title
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                    className="inline-flex items-center text-[#fb923c] font-semibold group-hover:text-[#f97316] transition-colors"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-full h-full text-[#fb923c]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#dc2626] rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-[#0f172a]/80 backdrop-blur-sm border border-[#1e293b] rounded-3xl p-12 text-center">
            <h3
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-heading, Archivo, sans-serif)' }}
            >
              Need Custom Forging Solutions?
            </h3>
            <p className="text-[#94a3b8] mb-8 max-w-2xl mx-auto">
              We develop bespoke forging solutions according to your drawings
              and material specifications. Let's discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#f97316]/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <span>View All Products</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#1e293b] border border-[#334155] text-white font-semibold rounded-xl hover:border-[#f97316] transition-all duration-300 hover:-translate-y-1"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent"></div>
    </section>
  );
};

export default ProductShowcase;
