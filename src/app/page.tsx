import Hero from '@/app/components/home/Hero';
import KeyHighlights from '@/app/components/home/KeyHighlights';
import ProductShowcase from '@/app/components/home/ProductShowcase';
import GlobalReach from '@/app/components/home/GlobalReach';
import CTASection from '@/app/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <KeyHighlights />
      <ProductShowcase />
      <GlobalReach />
      <CTASection />
    </>
  );
}
