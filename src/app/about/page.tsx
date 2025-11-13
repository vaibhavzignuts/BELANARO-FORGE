import type { Metadata } from 'next';
import GalleryGrid from '@/app/components/shared/GalleryGrid';
import {
  autoForgingImages,
  flangesAndShaftsImages,
  generalPlantImages,
  labAndQualityImages,
} from '@/data/belanaroGalleries';

export const metadata: Metadata = {
  title: 'About Us | BELANARO FORGE LLP',
  description:
    'BELANARO FORGE LLP – manufacturer and exporter of forged bearing rings, automotive components, flanges, and precision-engineered forging parts from Rajkot, India.',
};

export default function AboutPage() {
  const plantShowcase = generalPlantImages.slice(0, 6);
  const forgingHighlights = autoForgingImages.slice(0, 4);
  const machiningHighlights = flangesAndShaftsImages.slice(0, 4);
  const qualityHighlights = labAndQualityImages;

  return (
    <div className="pt-24">{/* offset for fixed header */}
      {/* Hero */}
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Precision in Every Forging
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            BELANARO FORGE LLP is a professionally managed manufacturer and exporter of forged
            bearing rings, automotive components, flanges, and precision-engineered forging parts.
            Located in Rajkot, Gujarat, India, we serve Europe, the USA, the Middle East, and Asia
            with high-performance, dimensionally accurate, defect-free forged products.
          </p>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl font-heading font-bold text-white mb-6">
          Inside Belanaro Forge LLP
        </h2>
        <p className="text-steel-300 max-w-3xl">
          A quick look at our integrated forging facility — from forging bays
          and machining cells to quality labs that keep every batch traceable.
        </p>
        <GalleryGrid
          images={plantShowcase}
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
          className="mt-8"
        />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">
              Forging Highlights
            </h3>
            <GalleryGrid
              images={forgingHighlights}
              columns={{ base: 1, sm: 2, md: 2, lg: 2 }}
              className="mt-4"
            />
          </div>
          <div className="lg:col-span-1 rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">
              Machining & Tool Room
            </h3>
            <GalleryGrid
              images={machiningHighlights}
              columns={{ base: 1, sm: 2, md: 2, lg: 2 }}
              className="mt-4"
            />
          </div>
          <div className="lg:col-span-1 rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">
              Quality & Inspection
            </h3>
            <GalleryGrid
              images={qualityHighlights}
              columns={{ base: 1, sm: 2, md: 2, lg: 2 }}
              className="mt-4"
            />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">Company Overview</h2>
            <p>
              Since inception, BELANARO FORGE LLP has focused on engineering discipline and
              manufacturing rigor. We invest in process stability, skilled talent, and quality
              systems to ensure every forging meets global benchmarks for performance and
              reliability.
            </p>
            <p className="mt-4">
              Our integrated ecosystem — from raw material inspection and forging to heat treatment
              and CNC machining — allows complete traceability and faster time-to-market for both
              standard and customized parts. This 360° ownership translates into predictable
              deliveries and repeatable quality.
            </p>
          </div>
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">Key Metrics</h3>
            <ul className="space-y-2">
              <li>• Diameter range: 25 mm to 500+ mm</li>
              <li>• Prototype to mass production</li>
              <li>• 50 MT/month capacity</li>
              <li>• ISO 9001:2015 systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Heritage & Values */}
      <section className="bg-steel-950 border-y border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-300">
              <h3 className="text-white font-semibold mb-3">Heritage</h3>
              <p>
                Built by a team of forging professionals, our culture prioritizes precision,
                safety, and continuous improvement. We continually modernize equipment and
                upskill our workforce to stay ahead of demanding application requirements.
              </p>
            </div>
            <div className="rounded-xl border border-steel-800 bg-steel-900 p-6 text-steel-300">
              <h3 className="text-white font-semibold mb-3">Values</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Integrity in commitments and documentation</li>
                <li>Customer-first engineering</li>
                <li>Zero-defect mindset</li>
                <li>Sustainable operations and safe workplace</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Markets */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">Materials & Grades</h3>
            <p>
              Carbon and alloy steels for strength-critical parts; stainless steels (SS304/SS316)
              and duplex for corrosion resistance; tool steels for wear-critical dies. Material
              selection is validated through spectro analysis and heat-treatment trials.
            </p>
          </div>
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-300">
            <h3 className="text-white font-semibold mb-3">Markets Served</h3>
            <p>
              OEMs and importers across Europe, the Middle East, Asia, and the Americas in bearing,
              automotive, transmission, construction equipment, railways, and general engineering.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-steel-950 border-y border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">FAQs</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-steel-800 bg-steel-900 p-6">
              <h4 className="text-white font-semibold mb-2">What drawings do you accept?</h4>
              <p className="text-steel-300">STEP/IGES, PDF, and 2D/3D CAD with tolerances and material specifications.</p>
            </div>
            <div className="rounded-xl border border-steel-800 bg-steel-900 p-6">
              <h4 className="text-white font-semibold mb-2">Do you support prototypes?</h4>
              <p className="text-steel-300">Yes, from single-piece prototyping to bulk production with the same QA rigor.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Core Strengths */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Core Strengths</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'In-house Forging, Heat Treatment & Machining',
            'ISO / IATF Ready Infrastructure',
            'Precision, Consistency & Durability',
            'Timely Global Delivery',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-200">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-steel-800 bg-steel-950 p-6 text-steel-200">
          Custom Engineering Based on Client Drawings
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="bg-steel-950 border-y border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Forged Range of Excellence</h2>
          <p className="mt-3 text-steel-300 max-w-3xl">
            We forge and machine components from 25 mm to 500+ mm in diameter, supporting both
            mass production and custom engineering requirements.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 1. Bearing Rings */}
            <div className="rounded-xl border border-steel-800 p-6 bg-steel-900">
              <h3 className="text-xl font-semibold text-white">1. Bearing Rings (Inner & Outer)</h3>
              <p className="mt-2 text-steel-300">
                High roundness accuracy and superior surface finish. Forged, heat-treated, and
                precision-machined in-house. Ready for direct bearing assembly.
              </p>
              <p className="mt-3 text-steel-400 text-sm">
                Size Range: 25 mm to 500+ mm • Materials: Carbon, Alloy, Stainless & Duplex Steel
              </p>
            </div>

            {/* 2. Automotive Forgings */}
            <div className="rounded-xl border border-steel-800 p-6 bg-steel-900">
              <h3 className="text-xl font-semibold text-white">2. Automotive Forgings</h3>
              <p className="mt-2 text-steel-300">
                Closed-die and ring-rolling forgings designed for optimum mechanical strength and
                reliability under dynamic loads.
              </p>
              <ul className="mt-3 list-disc list-inside text-steel-400 text-sm space-y-1">
                <li>Steering Knuckles & Suspension Arms</li>
                <li>Differential & Gear Components</li>
                <li>Engine Flanges & Yokes</li>
                <li>Axle Components and Coupling Rings</li>
              </ul>
            </div>

            {/* 3. Flanges & Shafts */}
            <div className="rounded-xl border border-steel-800 p-6 bg-steel-900">
              <h3 className="text-xl font-semibold text-white">3. Flanges & Shafts</h3>
              <p className="mt-2 text-steel-300">
                Industrial and automotive flanges and shafts with perfect concentricity and balance.
                100% crack-free and ultrasonic tested.
              </p>
            </div>

            {/* 4. Precision Forged Parts */}
            <div className="rounded-xl border border-steel-800 p-6 bg-steel-900">
              <h3 className="text-xl font-semibold text-white">4. Precision Forged Parts</h3>
              <p className="mt-2 text-steel-300">
                Custom-engineered precision forgings produced as per client specifications and
                tolerances with batch-to-batch repeatability.
              </p>
            </div>

            {/* 5. Custom Closed & Open Die Forgings */}
            <div className="rounded-xl border border-steel-800 p-6 bg-steel-900 lg:col-span-2">
              <h3 className="text-xl font-semibold text-white">5. Custom Closed & Open Die Forgings</h3>
              <p className="mt-2 text-steel-300">
                Bespoke solutions up to 50 kg per piece with controlled grain flow and precise heat
                treatment for maximum performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Manufacturing Excellence</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-steel-300">
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6">
            <h4 className="text-white font-semibold">Infrastructure Includes</h4>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Pneumatic Forging Hammers (0.75 – 3 Ton)</li>
              <li>Hydraulic Presses up to 1600 Ton</li>
              <li>Ring Rolling Machines</li>
              <li>CNC Turning & Machining Centers</li>
              <li>Heat Treatment Furnaces</li>
              <li>Tool Room and Measuring Instruments</li>
              <li>Spectrometer & Hardness Tester</li>
            </ul>
          </div>
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6">
            <h4 className="text-white font-semibold">Manufacturing Process Flow</h4>
            <ol className="mt-3 list-decimal list-inside space-y-1">
              <li>Raw Material Inspection</li>
              <li>Cutting & Billet Preparation</li>
              <li>Forging (Hammer/Press/Ring Rolling)</li>
              <li>Heat Treatment</li>
              <li>Shot Blasting & Grinding</li>
              <li>CNC Machining</li>
              <li>Dimensional & Metallurgical Testing</li>
              <li>Final Inspection & Packing</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Quality & Innovation */}
      <section className="bg-steel-950 border-y border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Quality & Innovation</h2>
          <p className="mt-3 text-steel-300 max-w-3xl">
            Zero-defect manufacturing philosophy with multi-stage quality control and international
            standards compliance.
          </p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-steel-300">
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">Material Composition Testing</li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">Dimensional Accuracy Check</li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">Hardness & Metallurgical Testing</li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">Surface Finish Verification</li>
            <li className="rounded-xl border border-steel-800 bg-steel-900 p-4">Traceable Batch Reports</li>
          </ul>
        </div>
      </section>

      {/* Global Presence & Sustainability */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6">
            <h3 className="text-xl font-semibold text-white">Global Presence</h3>
            <p className="mt-2 text-steel-300">
              Exporting to Europe, the Middle East, Asia, and the Americas. Known for timely
              delivery, product traceability, and transparent communication.
            </p>
          </div>
          <div className="rounded-xl border border-steel-800 bg-steel-950 p-6">
            <h3 className="text-xl font-semibold text-white">Sustainability & CSR</h3>
            <ul className="mt-2 list-disc list-inside text-steel-300 space-y-1">
              <li>Waste heat recovery systems</li>
              <li>Recyclable packaging materials</li>
              <li>Employee safety and skill development programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partnerships & Contact */}
      <section className="bg-steel-950 border-t border-steel-800">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-steel-800 bg-steel-900 p-6">
              <h3 className="text-xl font-semibold text-white">Dealership & Partnerships</h3>
              <ul className="mt-2 list-disc list-inside text-steel-300 space-y-1">
                <li>Competitive Pricing</li>
                <li>Consistent Supply</li>
                <li>Exclusive Territory Support</li>
                <li>Technical & Marketing Assistance</li>
              </ul>
            </div>
            <div className="rounded-xl border border-steel-800 bg-steel-900 p-6">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              <p className="mt-2 text-steel-300">
                BELANARO FORGE LLP • Padavala, Veraval-Shapar, Rajkot, Gujarat, India
              </p>
              <p className="mt-1 text-steel-300">Phone: +91 8735030126</p>
              <p className="mt-1 text-steel-300">Email: jayom@belanaro.com</p>
              <p className="mt-1 text-steel-300">Web: www.belanaro.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


