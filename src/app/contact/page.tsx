'use client';

import type { Metadata } from 'next';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// export const metadata: Metadata = {
//   title: 'Contact | BELANARO FORGE LLP',
//   description:
//     "Let's build a strong partnership. Contact BELANARO FORGE LLP for inquiries, collaboration, or partnerships.",
// };

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ct-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.ct-card', {
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <h1 className="ct-title text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Let's Build a Strong Partnership
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            We'd love to hear from you! Reach out for inquiries, collaboration,
            or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section
        ref={sectionRef}
        className="container mx-auto px-4 py-12 md:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="ct-card rounded-xl border border-steel-800 bg-steel-950 p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-forge-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-forge-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <a
                    href="tel:+918735030126"
                    className="text-steel-300 hover:text-forge-400 transition-colors"
                  >
                    +91 8735030126
                  </a>
                </div>
              </div>
            </div>

            <div className="ct-card rounded-xl border border-steel-800 bg-steel-950 p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-forge-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-forge-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a
                    href="mailto:jayom@belanaro.com"
                    className="text-steel-300 hover:text-forge-400 transition-colors"
                  >
                    jayom@belanaro.com
                  </a>
                </div>
              </div>
            </div>

            <div className="ct-card rounded-xl border border-steel-800 bg-steel-950 p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-forge-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-forge-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-steel-300">
                    Padavala, Veraval-Shapar, Rajkot, Gujarat, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="ct-card rounded-2xl border border-steel-800 bg-steel-950 p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-steel-400 mb-2">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg bg-steel-900 border border-steel-800 text-white px-4 py-3 outline-none focus:border-forge-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-steel-400 mb-2">
                    Company
                  </label>
                  <input
                    className="w-full rounded-lg bg-steel-900 border border-steel-800 text-white px-4 py-3 outline-none focus:border-forge-500 transition-colors"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-steel-400 mb-2">
                    Country
                  </label>
                  <input
                    className="w-full rounded-lg bg-steel-900 border border-steel-800 text-white px-4 py-3 outline-none focus:border-forge-500 transition-colors"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <label className="block text-sm text-steel-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-steel-900 border border-steel-800 text-white px-4 py-3 outline-none focus:border-forge-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-steel-400 mb-2">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg bg-steel-900 border border-steel-800 text-white px-4 py-3 outline-none focus:border-forge-500 transition-colors"
                    placeholder="Phone"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-steel-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg bg-steel-900 border border-steel-800 text-white px-4 py-3 outline-none focus:border-forge-500 transition-colors"
                    placeholder="Tell us about your requirements"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-forge-500 to-forge-600 text-white font-semibold hover:shadow-lg hover:shadow-forge-500/40 transition-all"
                >
                  <Send
                    size={18}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
          <h3 className="text-white font-semibold mb-2">Office Hours</h3>
          <p>Monday to Saturday: 9:30 AM – 6:30 PM IST • Sunday: Closed</p>
        </div>
      </section>
    </div>
  );
}
