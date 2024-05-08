import HeroSection from '../components/sections/HeroSection';
import SpeakersSection from '../components/sections/SpeakersSection';
import PageLayout from '../pages-layout/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <SpeakersSection />
    </PageLayout>
  );
}
