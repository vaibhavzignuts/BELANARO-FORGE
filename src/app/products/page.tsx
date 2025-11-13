'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Circle, Cog, Disc, Boxes, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    icon: Circle,
    title: 'Bearing Rings',
    href: '/products/bearing-rings',
    desc: 'Inner & outer rings with high roundness and superior finish.',
    color: 'from-[#f97316] to-[#dc2626]',
  },
  {
    icon: Cog,
    title: 'Automotive Components',
    href: '/products/auto-components',
    desc: 'Closed-die and ring-rolling components for dynamic loads.',
    color: 'from-[#dc2626] to-[#ea580c]',
  },
  {
    icon: Disc,
    title: 'Flanges & Shafts',
    href: '/products/flanges-shafts',
    desc: 'Industrial and automotive flanges & shafts.',
    color: 'from-[#ea580c] to-[#eab308]',
  },
  {
    icon: Boxes,
    title: 'Precision Forged Parts',
    href: '/products/precision-forged-parts',
    desc: 'Custom-engineered forgings to exact tolerances.',
    color: 'from-[#eab308] to-[#f97316]',
  },
];

export default function ProductsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.prod-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24">
      <section className="bg-steel-950 border-b border-steel-800"></section>

      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link key={i} href={p.href} className="prod-card group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${p.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                />
                <div className="relative h-full bg-steel-900 border border-steel-800 rounded-2xl p-8 hover:border-forge-500/50 transition-all duration-500 group-hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${p.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-steel-300 text-sm mb-6">{p.desc}</p>
                  <div className="inline-flex items-center text-forge-400 font-semibold">
                    View details{' '}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
