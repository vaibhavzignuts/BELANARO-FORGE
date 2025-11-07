'use client';

// import type { Metadata } from 'next';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShieldCheck,
  TestTube,
  Ruler,
  Scan,
  ClipboardCheck,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// export const metadata: Metadata = {
//   title: 'Quality | BELANARO FORGE LLP',
//   description:
//     'Zero-defect manufacturing philosophy at BELANARO FORGE LLP with material testing, dimensional inspections, hardness and metallurgical checks, and traceable batch reports.',
// };

export default function QualityPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ql-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.ql-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const checks = [
    {
      icon: TestTube,
      title: 'Material Composition',
      desc: 'Spectrometer testing & material traceability',
    },
    {
      icon: Ruler,
      title: 'Dimensional Accuracy',
      desc: 'Precision measuring instruments & fixtures',
    },
    {
      icon: ShieldCheck,
      title: 'Hardness & Metallurgy',
      desc: 'Hardness testing and metallurgical checks',
    },
    {
      icon: Scan,
      title: 'Surface Finish',
      desc: 'Visual and surface roughness verification',
    },
    {
      icon: ClipboardCheck,
      title: 'Batch Reports',
      desc: 'Traceable inspection and test reports',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="ql-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Quality That Performs Under Pressure
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            Every forged component undergoes multi-stage quality control — from
            spectro analysis to final dimensional inspection — ensuring
            international standards compliance.
          </p>
        </div>
      </section>

      {/* Quality Cards */}
      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <h2 className="ql-title text-2xl md:text-3xl font-heading font-bold text-white">
          Quality Assurance Includes
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {checks.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="ql-card rounded-xl border border-steel-800 bg-steel-950 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-forge-500/20 flex items-center justify-center">
                    <Icon className="text-forge-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{c.title}</div>
                    <div className="text-steel-400 text-sm">{c.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-steel-950 border-t border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="rounded-2xl border border-steel-800 bg-steel-900 p-8">
            <h3 className="ql-title text-xl md:text-2xl font-heading font-bold text-white">
              Certifications
            </h3>
            <p className="mt-3 text-steel-300">
              ISO 9001:2015 certified (IATF-ready standards) with strict process
              controls and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Inspection Equipment & Controls */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">
              Inspection Equipment
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Spectrometer for material composition</li>
              <li>Hardness tester (HRC/HB)</li>
              <li>Verniers, micrometers, height gauges</li>
              <li>Go/No-Go gauges and fixtures</li>
            </ul>
          </div>
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">Process Controls</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Heat treatment cycle records and traceability</li>
              <li>In-process inspection with SPC sampling</li>
              <li>Final dimensional check with batch reports</li>
              <li>Non-conformance handling and CAPA</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
