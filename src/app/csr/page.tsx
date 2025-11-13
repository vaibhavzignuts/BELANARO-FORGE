'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryGrid from '@/app/components/shared/GalleryGrid';
import { csrPhotosImages } from '@/data/belanaroGalleries';

gsap.registerPlugin(ScrollTrigger);

export default function CSRPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.csr-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.csr-card', {
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
      {/* Hero */}
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="csr-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Corporate Social Responsibility
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            At BELANARO FORGE LLP, we believe in giving back to the community
            and making a positive impact on society. Our Corporate Social
            Responsibility initiatives reflect our commitment to sustainable
            development, social welfare, and environmental stewardship.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="csr-title space-y-6 text-steel-300">
            <p>
              Our CSR programs focus on multiple areas including education,
              healthcare, environmental conservation, rural development, women
              empowerment, and farmer support. We are dedicated to creating
              meaningful change in the communities we serve, ensuring that our
              business growth goes hand-in-hand with social progress.
            </p>
            <p>
              Through various initiatives, we support educational programs,
              provide healthcare services, promote environmental sustainability,
              empower women and rural communities, and assist farmers in their
              agricultural endeavors. These efforts are a testament to our
              values and our commitment to being a responsible corporate
              citizen.
            </p>
            <p>
              Below are some highlights from our CSR activities, showcasing the
              positive impact we strive to make in the lives of people and the
              environment around us.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <h2 className="csr-title text-2xl md:text-3xl font-heading font-bold text-white mb-6">
          CSR Activities Gallery
        </h2>
        <GalleryGrid
          images={csrPhotosImages.slice(4, 15)}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          className="mt-6"
          itemClassName="csr-card"
        />
      </section>
    </div>
  );
}
