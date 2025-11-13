'use client';

import { useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import gsap from 'gsap';
import { generalPlantImages } from '@/data/belanaroGalleries';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroImages = useMemo(() => generalPlantImages.slice(0, 3), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from(buttonsRef.current?.children || [], {
        y: 30,
        // opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from(statsRef.current?.children || [], {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      gsap.to('.float-element', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.3,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute top-0 -right-4 w-96 h-96 bg-[#dc2626] rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-96 h-96 bg-[#c2410c] rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"
            style={{ animationDelay: '4s' }}
          ></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.08]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 float-element">
          <div className="w-20 h-20 border-2 border-[#f97316]/30 rounded-lg rotate-45"></div>
        </div>
        <div
          className="absolute top-40 right-20 float-element"
          style={{ animationDelay: '1s' }}
        >
          <div className="w-16 h-16 border-2 border-[#fb923c]/30 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-32 left-1/4 float-element"
          style={{ animationDelay: '2s' }}
        >
          <div className="w-12 h-12 bg-[#f97316]/10 backdrop-blur-sm rounded-lg"></div>
        </div>

        {/* Hero Imagery */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-10 right-10 flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-60 hover:opacity-90 transition-opacity duration-500">
            {heroImages.map((image, index) => (
              <div
                key={image.src}
                className="relative h-32 w-48 sm:h-36 sm:w-56 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 35vw, 80vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f172a]/50 backdrop-blur-sm border border-[#f97316]/30 rounded-full mb-8 animate-fade-in">
            <Sparkles size={16} className="text-[#fb923c]" />
            <span className="text-[#cbd5e1] text-sm font-medium">
              Trusted by Global OEMs Since 2020
            </span>
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading, Archivo, sans-serif)' }}
          >
            <span className="block text-white mb-2">Precision Forging.</span>
            <span className="block bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#dc2626] bg-clip-text text-transparent">
              Global Strength.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-[#cbd5e1] mb-12 max-w-3xl mx-auto leading-[1.8]"
          >
            Delivering high-performance bearing rings, auto parts, and
            precision-forged components from India to the world.
          </p>

          {/* CTA Buttons */}

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Shield, value: '100%', label: 'Quality Assured' },
              { icon: Zap, value: '50+', label: 'Global Clients' },
              { icon: Sparkles, value: '10K+', label: 'Products Monthly' },
              { icon: Shield, value: 'ISO', label: 'Certified' },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-[#0f172a]/50 backdrop-blur-sm border border-[#1e293b] rounded-2xl p-4 md:p-6 hover:border-[#f97316]/50 transition-all duration-300 hover:-translate-y-2">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#fb923c] mb-2 md:mb-3 mx-auto" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[#94a3b8]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/products"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#f97316]/50 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Explore Products</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c] to-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <Link
              href="/contact"
              className="group px-8 py-4 bg-[#0f172a]/50 backdrop-blur-sm border-2 border-[#334155] text-white font-semibold rounded-xl hover:border-[#f97316] transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                <span>Contact Us</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#334155] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#f97316] rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
