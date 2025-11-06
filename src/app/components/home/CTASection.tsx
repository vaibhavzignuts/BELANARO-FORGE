'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.cta-button', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-steel-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-forge-500/20 via-transparent to-brand-secondary/20"></div>

        {/* Animated Circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-forge-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary rounded-full filter blur-3xl opacity-20 animate-pulse-slow"
          style={{ animationDelay: '1.5s' }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-forge-500 to-brand-secondary rounded-3xl blur-2xl opacity-30"></div>

            {/* Card */}
            <div className="relative bg-steel-900/90 backdrop-blur-xl border border-steel-800 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-forge-500/20 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-secondary/20 to-transparent rounded-tl-full"></div>

              {/* Content */}
              <div className="cta-content text-center relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  Ready to Partner with
                  <span className="block mt-2 bg-gradient-to-r from-forge-400 to-brand-secondary bg-clip-text text-transparent">
                    Industry Leaders?
                  </span>
                </h2>

                <p className="text-xl text-steel-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join our global network of satisfied clients. Experience
                  world-class precision forging, competitive pricing, and
                  unmatched technical support.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
                  <Link
                    href="/contact"
                    className="cta-button group relative px-10 py-5 bg-gradient-to-r from-forge-500 to-forge-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl shadow-forge-500/50 hover:shadow-forge-500/70 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Mail size={24} />
                      <span>Get a Free Quote</span>
                      <ArrowRight
                        size={24}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-forge-600 to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>

                  <Link
                    href="/products"
                    className="cta-button group px-10 py-5 bg-steel-800/50 backdrop-blur-sm border-2 border-steel-700 text-white font-bold text-lg rounded-2xl hover:border-forge-500 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                  >
                    <Download size={24} />
                    <span>Download Catalog</span>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 pt-6 md:pt-8 border-t border-steel-800">
                  <a
                    href="tel:+918735030126"
                    className="group flex items-center gap-3 text-steel-300 hover:text-forge-400 transition-colors"
                  >
                    <div className="w-12 h-12 bg-steel-800 rounded-full flex items-center justify-center group-hover:bg-forge-500 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-steel-500">Call us</div>
                      <div className="font-semibold">+91 8735030126</div>
                    </div>
                  </a>

                  <a
                    href="mailto:jayom@belanaro.com"
                    className="group flex items-center gap-3 text-steel-300 hover:text-forge-400 transition-colors"
                  >
                    <div className="w-12 h-12 bg-steel-800 rounded-full flex items-center justify-center group-hover:bg-forge-500 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-steel-500">Email us</div>
                      <div className="font-semibold">jayom@belanaro.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            {
              title: '24/7 Support',
              description: 'Round-the-clock technical assistance',
            },
            {
              title: 'Fast Turnaround',
              description: 'Quick quote response within 24 hours',
            },
            {
              title: 'Global Shipping',
              description: 'Reliable delivery to 25+ countries',
            },
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-2 bg-forge-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-steel-900 border-2 border-steel-800 rounded-full flex items-center justify-center group-hover:border-forge-500 transition-colors">
                  <div className="w-3 h-3 bg-forge-500 rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-steel-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge-500/50 to-transparent"></div>
    </section>
  );
};

export default CTASection;
