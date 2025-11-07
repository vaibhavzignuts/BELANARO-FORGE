'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Workshop | BELANARO FORGE LLP',
//   description:
//     'Explore BELANARO FORGE LLP workshop capabilities. Space reserved for photo gallery and a quick overview of facilities and processes.',
// };

export default function WorkshopPage() {
  // To add photos: put images in public/catalog (e.g., /public/catalog/workshop-1.jpg)
  // and replace the placeholders below with actual <img> or Next <Image> components referencing those paths.
  const placeholders = Array.from({ length: 12 });
  const sectionRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wk-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.wk-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24">
      {/* offset for fixed header */}
      {/* Hero */}
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="wk-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Workshop
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            A glimpse into our forging, heat treatment, and machining
            facilities. Below is a reserved space for your workshop photo
            gallery.
          </p>
        </div>
      </section>

      {/* Photo Grid Placeholder */}
      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <h2 className="wk-title text-2xl md:text-3xl font-heading font-bold text-white">
          Photo Gallery
        </h2>
        <p className="mt-2 text-steel-400 text-sm">
          Add your photos in the reserved spaces below. Recommended size:
          1600×1200 or higher. Place files under{' '}
          <code className="text-steel-200">public/catalog</code> and update as
          needed.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((_, idx) => (
            <div
              key={idx}
              className="wk-card relative overflow-hidden rounded-xl border border-dashed border-steel-700 bg-steel-950"
            >
              {/* 4:3 aspect ratio space */}
              <div className="pt-[75%]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-steel-400 text-sm">
                    Photo space #{idx + 1}
                  </div>
                  <div className="text-steel-500 text-xs mt-1">
                    Add image here
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brief Details */}
      <section className="bg-steel-950 border-t border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
            Capabilities at a Glance
          </h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-steel-300">
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">
              Pneumatic Forging Hammers (0.75 – 3 Ton)
            </li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">
              Hydraulic Presses up to 1600 Ton
            </li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">
              Ring Rolling Machines
            </li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">
              CNC Turning & Machining Centers
            </li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">
              Heat Treatment Furnaces
            </li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">
              Spectrometer & Hardness Testing
            </li>
          </ul>
          <div className="mt-8 rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-2">Facility Overview</h3>
            <p>
              The workshop integrates forging cells, heat-treatment furnaces,
              and machining bays in a streamlined layout for efficient part
              flow. Each bay follows standard operating procedures and 5S
              practices to maintain quality and safety.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
