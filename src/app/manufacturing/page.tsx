'use client';

// import type { Metadata } from 'next';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, Hammer, Settings, Cog, Ruler } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// export const metadata: Metadata = {
//   title: 'Manufacturing | BELANARO FORGE LLP',
//   description:
//     'Where technology meets strength. Explore BELANARO FORGE LLP manufacturing capabilities: forging hammers, hydraulic presses, ring rolling, CNC, and heat treatment.',
// };

export default function ManufacturingPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mf-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.mf-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });

      gsap.from('.mf-step', {
        scrollTrigger: { trigger: '.mf-steps', start: 'top 80%' },
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const facilities = [
    {
      icon: Factory,
      title: 'Forging Hammers',
      desc: '0.75 – 3 Ton high-impact hammers',
    },
    {
      icon: Hammer,
      title: 'Hydraulic Presses',
      desc: 'Up to 1600 Ton capacity',
    },
    {
      icon: Settings,
      title: 'Ring Rolling',
      desc: 'Precision ring rolling machines',
    },
    {
      icon: Cog,
      title: 'CNC & Tool Room',
      desc: 'CNC turning & tooling facilities',
    },
    {
      icon: Ruler,
      title: 'Heat Treatment',
      desc: 'Controlled furnaces & quench',
    },
  ];

  const steps = [
    'Raw Material Inspection',
    'Cutting & Billet Preparation',
    'Forging (Hammer/Press/Ring Rolling)',
    'Heat Treatment',
    'Shot Blasting & Grinding',
    'CNC Machining',
    'Dimensional & Metallurgical Testing',
    'Final Inspection & Packing',
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="mf-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Where Technology Meets Strength
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            Our state-of-the-art manufacturing unit in Padavala, Veraval-Shapar
            (Rajkot) integrates modern forging machines, quality inspection
            systems, and a skilled technical workforce.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <h2 className="mf-title text-2xl md:text-3xl font-heading font-bold text-white">
          Key Facilities
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="mf-card rounded-xl border border-steel-800 bg-steel-950 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-forge-500/20 flex items-center justify-center">
                    <Icon className="text-forge-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{f.title}</div>
                    <div className="text-steel-400 text-sm">{f.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tooling & Die Development */}
      <section className="bg-steel-950 border-y border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">
              Tooling & Die Development
            </h3>
            <p>
              In-house die design and tool manufacturing reduce lead times and
              ensure perfect alignment between forging and machining. Dies
              undergo pre-production trials and periodic reconditioning for
              dimensional stability.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-steel-950 border-y border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="mf-title text-2xl md:text-3xl font-heading font-bold text-white">
            Manufacturing Process Flow
          </h2>
          <ol className="mf-steps mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <li
                key={i}
                className="mf-step rounded-xl border border-steel-800 bg-steel-900 p-4 text-steel-200"
              >
                <span className="text-forge-400 mr-2">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Advantages */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="mf-title text-2xl md:text-3xl font-heading font-bold text-white">
          Manufacturing Advantages
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Complete In-House Forging to Machining Process',
            'Real-Time Production Monitoring',
            'Skilled Engineering Workforce',
            'Flexible Capacity for Bulk & Custom Orders',
          ].map((adv) => (
            <div
              key={adv}
              className="mf-card rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-200"
            >
              {adv}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
