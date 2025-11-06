'use client';

import { useEffect, useRef } from 'react';
import { Factory, Award, TrendingUp, Truck, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KeyHighlights = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: Factory,
      title: '100% In-House',
      subtitle: 'Forging & Machining',
      description:
        'Complete control over production quality with our integrated manufacturing process.',
      gradient: 'from-[#3b82f6] to-[#06b6d4]',
    },
    {
      icon: Award,
      title: 'ISO / IATF Ready',
      subtitle: 'Manufacturing Standards',
      description:
        'Meeting international quality standards with certified manufacturing processes.',
      gradient: 'from-[#a855f7] to-[#ec4899]',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      subtitle: 'Consistent Quality',
      description:
        'Best value proposition with uncompromising quality and competitive market rates.',
      gradient: 'from-[#10b981] to-[#059669]',
    },
    {
      icon: Truck,
      title: 'On-Time Delivery',
      subtitle: 'Worldwide Shipping',
      description:
        'Reliable logistics network ensuring timely delivery to global destinations.',
      gradient: 'from-[#f97316] to-[#dc2626]',
    },
    {
      icon: Wrench,
      title: 'Custom Engineering',
      subtitle: 'Tailored Solutions',
      description:
        'Expert engineering support for customized forging solutions and technical assistance.',
      gradient: 'from-[#eab308] to-[#f97316]',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.highlight-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.to('.parallax-element', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -100,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#020617] to-[#0f172a] overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="parallax-element absolute top-20 left-10 w-72 h-72 bg-[#f97316] rounded-full filter blur-3xl"></div>
        <div
          className="parallax-element absolute bottom-20 right-10 w-96 h-96 bg-[#dc2626] rounded-full filter blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="hexagons"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                fill="none"
                stroke="#f97316"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading, Archivo, sans-serif)' }}
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#fb923c] to-[#dc2626] bg-clip-text text-transparent">
              BELANARO FORGE
            </span>
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Excellence in every forge, precision in every component
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="highlight-card group">
                <div className="relative h-full">
                  {/* Animated Border */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                  ></div>

                  {/* Card Content */}
                  <div className="relative h-full bg-[#0f172a] rounded-2xl p-8 border border-[#1e293b] group-hover:border-transparent transition-all duration-500">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${highlight.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3
                        className="text-xl font-bold text-white mb-2 group-hover:text-[#fb923c] transition-colors"
                        style={{
                          fontFamily:
                            'var(--font-heading, Archivo, sans-serif)',
                        }}
                      >
                        {highlight.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#fb923c] mb-4">
                        {highlight.subtitle}
                      </p>
                      <p className="text-[#94a3b8] text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon className="w-full h-full text-[#fb923c] rotate-12" />
                    </div>

                    {/* Bottom Border Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Global Clients' },
            { value: '10K+', label: 'Monthly Production' },
            { value: '25+', label: 'Countries Served' },
            { value: '100%', label: 'Quality Assured' },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative inline-block">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="absolute -inset-2 bg-[#f97316] blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="text-[#94a3b8] text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#020617"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default KeyHighlights;
