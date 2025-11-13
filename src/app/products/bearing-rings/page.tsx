'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryGrid from '@/app/components/shared/GalleryGrid';
import { bearingsAndRingsImages } from '@/data/belanaroGalleries';

gsap.registerPlugin(ScrollTrigger);

export default function BearingRingsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.br-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
      });
      gsap.from('.br-card', {
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
          <h1 className="br-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Bearing Rings
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            High roundness accuracy and superior surface finish. Each ring is
            forged, heat-treated, and precision-machined in-house to ensure
            exceptional durability and performance under demanding applications.
          </p>
          <p className="mt-4 text-steel-300 max-w-3xl">
            Our bearing rings are engineered to minimize friction and wear,
            enhancing the reliability and lifespan of industrial machinery. With
            rigorous quality control and advanced manufacturing techniques, we
            meet global standards for consistency and precision.
          </p>
          <p className="mt-4 text-steel-400 text-sm">
            Size Range: 25 mm to 500+ mm • Materials: Carbon, Alloy, Stainless &
            Duplex Steel • Applications: Automotive, Wind Energy, Heavy
            Machinery, and Industrial Equipment
          </p>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <GalleryGrid
          images={bearingsAndRingsImages}
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          className="mt-8"
          itemClassName="br-card"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="br-card rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-200">
            <h3 className="text-white font-semibold mb-2">Applications</h3>
            <ul className="list-disc list-inside space-y-1 text-steel-300">
              <li>Ball & Roller Bearings</li>
              <li>High-speed & heavy-load systems</li>
              <li>Slewing and cylindrical bearings</li>
            </ul>
          </div>
          <div className="br-card rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-200">
            <h3 className="text-white font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-steel-300">
              <li>Tight tolerances and concentricity</li>
              <li>Heat-treated and machined in-house</li>
              <li>Ready for direct bearing assembly</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
