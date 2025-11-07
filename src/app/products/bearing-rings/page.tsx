'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const gallery = Array.from({ length: 9 });

  return (
    <div className="pt-24">
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="br-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Bearing Rings
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            High roundness accuracy and superior surface finish. Forged,
            heat-treated, and precision-machined in-house.
          </p>
          <p className="mt-2 text-steel-400 text-sm">
            Size Range: 25 mm to 500+ mm • Materials: Carbon, Alloy, Stainless &
            Duplex Steel
          </p>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <h2 className="br-title text-2xl md:text-3xl font-heading font-bold text-white">
          Photo Gallery
        </h2>
        <p className="mt-2 text-steel-400 text-sm">
          Place images under public/catalog/bearing-rings and swap placeholders
          when ready.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((_, i) => (
            <div
              key={i}
              className="br-card relative rounded-xl border border-dashed border-steel-700 bg-steel-950"
            >
              <div className="pt-[75%]" />
              <div className="absolute inset-0 flex items-center justify-center text-steel-400 text-sm">
                Photo {i + 1}
              </div>
            </div>
          ))}
        </div>

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

