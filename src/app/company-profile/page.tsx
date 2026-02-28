import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, ArrowRight } from 'lucide-react';

const COMPANY_PROFILE_PDF =
  '/BFL_COMPANY%20PROFILE%20With%20Edited%20email%20and%20phone%20number%20.pdf';

export const metadata: Metadata = {
  title: 'Company Profile | BELANARO FORGE LLP',
  description:
    'Download the BELANARO FORGE LLP company profile. Precision forging manufacturer and exporter of bearing rings, auto components, and forged parts from Rajkot, India.',
  alternates: {
    canonical: '/company-profile',
  },
  openGraph: {
    title: 'Company Profile | BELANARO FORGE LLP',
    description:
      'Download the BELANARO FORGE LLP company profile. Precision forging manufacturer and exporter from India.',
    url: 'https://www.belanaroforge.com/company-profile',
    type: 'website',
  },
};

export default function CompanyProfilePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-steel-950 border-b border-steel-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Company Profile
          </h1>
          <p className="mt-4 text-steel-300 max-w-3xl">
            BELANARO FORGE LLP is a professionally managed manufacturer and exporter of forged
            bearing rings, automotive components, flanges, and precision-engineered forging parts
            from Rajkot, Gujarat, India. Download our company profile for a complete overview of
            our capabilities, facilities, and product range.
          </p>
        </div>
      </section>

      {/* Download section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-steel-800 bg-steel-900/50 p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-xl bg-forge-500/20 flex items-center justify-center mb-6">
              <FileText className="text-forge-400" size={32} />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
              BELANARO FORGE LLP – Company Profile
            </h2>
            <p className="text-steel-400 mb-8">
              Our company profile includes details about our manufacturing facilities, quality
              systems, product range, and contact information. Ideal for partners, clients, and
              stakeholders.
            </p>
            <a
              href={COMPANY_PROFILE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-forge-500 to-forge-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-forge-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={20} />
              Download Company Profile (PDF)
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-steel-600 text-steel-300 hover:text-white hover:border-forge-500 rounded-lg transition-colors"
            >
              About Us
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-steel-600 text-steel-300 hover:text-white hover:border-forge-500 rounded-lg transition-colors"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
