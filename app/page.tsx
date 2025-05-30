import { HeroSection } from '@/components/landing/hero-section';
import { MissionSection } from '@/components/landing/mission-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { ImpactSection } from '@/components/landing/impact-section';
import { CTASection } from '@/components/landing/cta-section';
import { SafetySection } from '@/components/landing/safety-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <MissionSection />
      <HowItWorksSection />
      <SafetySection />
      <TestimonialsSection />
      <ImpactSection />
      <CTASection />
    </div>
  );
}