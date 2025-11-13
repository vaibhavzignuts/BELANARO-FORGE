'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryGrid from '@/app/components/shared/GalleryGrid';
import { flangesAndShaftsImages } from '@/data/belanaroGalleries';

gsap.registerPlugin(ScrollTrigger);

export default function FlangesShaftsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fs-title', { scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }, y: 40, opacity: 0, duration: 0.8 });
      gsap.from('.fs-card', { scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }, y: 60, opacity: 0, duration: 0.8, stagger: 0.08 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24">
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="fs-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">Flanges & Shafts</h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            Industrial and automotive flanges and shafts capable of handling extreme torque and pressure with perfect concentricity and balance.
          </p>
          <p className="mt-2 text-steel-400 text-sm">Materials: Carbon Steel, Stainless Steel (SS304/SS316), Alloy Steel</p>
        </div>
      </section>

      <section ref={sectionRef} className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="fs-title text-2xl md:text-3xl font-heading font-bold text-white">Photo Gallery</h2>
        <p className="mt-2 text-steel-400 text-sm">CNC machining, VMC finishing, and inspection for flanges and shafts.</p>
        <GalleryGrid
          images={flangesAndShaftsImages}
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          className="mt-8"
          itemClassName="fs-card"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="fs-card rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-200">
            <h3 className="text-white font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-steel-300">
              <li>Close tolerances • Crack-free • Ultrasonic tested</li>
              <li>Excellent balance and concentricity</li>
              <li>Custom sizes and specifications</li>
            </ul>
          </div>
          <div className="fs-card rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-200">
            <h3 className="text-white font-semibold mb-2">Product Range</h3>
            <ul className="list-disc list-inside space-y-1 text-steel-300">
              <li>Slip-On • Blind • Weld Neck Flanges</li>
              <li>Custom Shafts • Collar Flanges</li>
              <li>Standard and bespoke designs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}



