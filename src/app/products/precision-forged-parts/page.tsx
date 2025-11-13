'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryGrid from '@/app/components/shared/GalleryGrid';
import { precisionForgedPartsImages } from '@/data/belanaroGalleries';

gsap.registerPlugin(ScrollTrigger);

export default function PrecisionForgedPartsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pf-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
      });
      gsap.from('.pf-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24">
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="pf-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Precision Forged Parts
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            Custom-engineered precision forgings produced as per client
            specifications and tolerances. From prototypes to bulk volumes.
          </p>
          <p className="mt-2 text-steel-400 text-sm">
            Capabilities: CNC machining, drilling, milling • High metallurgical
            strength • Repeatability in every batch
          </p>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <GalleryGrid
          images={precisionForgedPartsImages}
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          className="mt-8"
          itemClassName="pf-card"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="pf-card rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-200">
            <h3 className="text-white font-semibold mb-2">Applications</h3>
            <ul className="list-disc list-inside space-y-1 text-steel-300">
              <li>Heavy equipment & construction machinery</li>
              <li>Railways & industrial gear systems</li>
              <li>Custom assemblies per drawing</li>
            </ul>
          </div>
          <div className="pf-card rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-200">
            <h3 className="text-white font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-steel-300">
              <li>
                Material grades: Carbon, Alloy, Stainless, Duplex, Tool Steel
              </li>
              <li>Piece weight up to ~50 kg • Capacity ~50 MT/month</li>
              <li>Strict dimensional and metallurgical testing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
