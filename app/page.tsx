import Hero from '@/components/home/Hero';
import FeaturedExhibits from '@/components/home/FeaturedExhibits';
import StatsRibbon from '@/components/home/StatsRibbon';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import ParticleEffect from '@/components/shared/ParticleEffect';

export default function Home() {
  return (
    <>
      <ParticleEffect count={15} />
      <Hero />
      <StatsRibbon />
      <FeaturedExhibits />
      <UpcomingEvents />
      <Testimonials />
      <CTASection />
    </>
  );
}
