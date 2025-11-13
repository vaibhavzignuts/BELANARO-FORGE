'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryGrid from '@/app/components/shared/GalleryGrid';
import {
  cncMachinesImages,
  dieStorageAreaImages,
  finishGoodsStorageAreaImages,
  generalPlantImages,
  heatTreatmentPlantImages,
  hydraulicPowerPressImages,
  labImages,
  lathAreaImages,
  preTurnedAreaImages,
  rawMaterialStockAreaImages,
  ringRollingImages,
  screwPressImages,
  vmcMachineImages,
} from '@/data/belanaroGalleries';

// export const metadata: Metadata = {
//   title: 'Workshop | BELANARO FORGE LLP',
//   description:
//     'Explore BELANARO FORGE LLP workshop capabilities. Space reserved for photo gallery and a quick overview of facilities and processes.',
// };

export default function WorkshopPage() {
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

      {/* Photo Grid */}
      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <div className="space-y-12">
          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              CNC machines
            </h3>
            <GalleryGrid
              images={cncMachinesImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Die Storage area
            </h3>
            <GalleryGrid
              images={dieStorageAreaImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Finish Goods storage area
            </h3>
            <GalleryGrid
              images={finishGoodsStorageAreaImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              General plant photo
            </h3>
            <GalleryGrid
              images={generalPlantImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Heat Treatment plant
            </h3>
            <GalleryGrid
              images={heatTreatmentPlantImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Hydraulic Power Press
            </h3>
            <GalleryGrid
              images={hydraulicPowerPressImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Lab
            </h3>
            <GalleryGrid
              images={labImages}
              columns={{ base: 1, sm: 2, md: 2, lg: 2 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              lath Area
            </h3>
            <GalleryGrid
              images={lathAreaImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Pre-Turned Area
            </h3>
            <GalleryGrid
              images={preTurnedAreaImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Raw material stock area
            </h3>
            <GalleryGrid
              images={rawMaterialStockAreaImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Ring Rolling
            </h3>
            <GalleryGrid
              images={ringRollingImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              Screw Press
            </h3>
            <GalleryGrid
              images={screwPressImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>

          <section>
            <h3 className="wk-title text-xl md:text-2xl font-heading font-semibold text-white">
              VMC machine
            </h3>
            <GalleryGrid
              images={vmcMachineImages}
              columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
              className="mt-6"
              itemClassName="wk-card"
            />
          </section>
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
