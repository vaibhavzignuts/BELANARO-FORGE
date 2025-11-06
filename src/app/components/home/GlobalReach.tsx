'use client';

import { useEffect, useRef } from 'react';
import { Globe2, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlobalReach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  const regions = [
    { name: 'Europe', count: '15+', position: 'top-1/4 left-1/4', delay: 0 },
    { name: 'USA', count: '8+', position: 'top-1/3 left-1/6', delay: 0.2 },
    {
      name: 'Middle East',
      count: '12+',
      position: 'top-1/2 left-1/2',
      delay: 0.4,
    },
    { name: 'Asia', count: '20+', position: 'top-2/3 right-1/4', delay: 0.6 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section elements
      gsap.from('.global-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate region markers
      gsap.from('.region-marker', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      });

      // Rotate globe continuously
      if (globeRef.current) {
        gsap.to(globeRef.current, {
          rotation: 360,
          duration: 50,
          repeat: -1,
          ease: 'none',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-steel-900 overflow-hidden"
    >
      {/* Background Globe Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div ref={globeRef} className="w-[800px] h-[800px]">
          <Globe2 className="w-full h-full text-forge-500" strokeWidth={0.5} />
        </div>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-forge-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 left-20 w-80 h-80 bg-brand-secondary rounded-full filter blur-3xl opacity-20 animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="global-title">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forge-500/10 border border-forge-500/30 rounded-full mb-6">
              <Globe2 size={16} className="text-forge-400" />
              <span className="text-forge-400 text-sm font-semibold">
                GLOBAL PRESENCE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Delivering Quality
              <span className="block mt-2 bg-gradient-to-r from-forge-400 to-brand-secondary bg-clip-text text-transparent">
                Beyond Borders
              </span>
            </h2>

            <p className="text-xl text-steel-400 mb-8 leading-relaxed">
              With exports spanning across Europe, the USA, the Middle East, and
              Asia, BELANARO FORGE LLP has established itself as a reliable name
              in the international forging industry.
            </p>

            {/* Quote Box */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-forge-500 to-brand-secondary rounded-full"></div>
              <blockquote className="pl-8 py-4 italic text-steel-300 text-lg">
                &quot;Our strength lies not only in the metal we forge — but in
                the relationships we build.&quot;
              </blockquote>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-sm text-steel-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-steel-400">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-steel-400">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right - Interactive Map */}
          <div className="relative">
            {/* Map Container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Center Circle - Base */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Animated Rings */}
                  <div className="absolute inset-0 w-64 h-64 border-2 border-forge-500/30 rounded-full animate-ping"></div>
                  <div
                    className="absolute inset-0 w-64 h-64 border-2 border-forge-500/20 rounded-full animate-ping"
                    style={{ animationDelay: '1s' }}
                  ></div>

                  {/* Main Circle */}
                  <div className="relative w-64 h-64 bg-gradient-to-br from-forge-500 to-brand-secondary rounded-full flex items-center justify-center shadow-2xl shadow-forge-500/50">
                    <div className="text-center">
                      <Globe2 className="w-24 h-24 text-white mx-auto mb-4" />
                      <div className="text-white font-heading font-bold text-2xl">
                        INDIA
                      </div>
                      <div className="text-steel-100 text-sm">
                        Rajkot, Gujarat
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Region Markers */}
              {regions.map((region, index) => (
                <div
                  key={index}
                  className={`region-marker absolute ${region.position} transform -translate-x-1/2 -translate-y-1/2`}
                >
                  {/* Connection Line */}
                  <svg
                    className="absolute w-full h-full pointer-events-none"
                    style={{ left: '50%', top: '50%' }}
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="50%"
                      y2="50%"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="lineGradient">
                        <stop
                          offset="0%"
                          stopColor="#f97316"
                          stopOpacity="0.5"
                        />
                        <stop
                          offset="100%"
                          stopColor="#f97316"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Marker */}
                  <div className="relative group cursor-pointer">
                    {/* Pulse Effect */}
                    <div className="absolute -inset-4 bg-forge-500 rounded-full opacity-20 group-hover:opacity-40 animate-pulse"></div>

                    {/* Marker Circle */}
                    <div className="relative w-16 h-16 bg-steel-900 border-2 border-forge-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-forge-500/50">
                      <MapPin className="w-8 h-8 text-forge-400" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-steel-900 border border-forge-500 rounded-lg px-4 py-2 whitespace-nowrap shadow-xl">
                        <div className="text-white font-semibold">
                          {region.name}
                        </div>
                        <div className="text-forge-400 text-sm">
                          {region.count} Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Region Cards */}
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="bg-steel-950/50 backdrop-blur-sm border border-steel-800 rounded-xl p-4 hover:border-forge-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">
                        {region.name}
                      </div>
                      <div className="text-steel-400 text-sm">
                        Active Clients
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-forge-400">
                      {region.count}
                    </div>
                  </div>
                  <div className="mt-2 h-1 bg-steel-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-forge-500 to-brand-secondary rounded-full group-hover:w-full transition-all duration-1000"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
