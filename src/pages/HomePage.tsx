import AppFooter from '../components/footer/AppFooter';
import AppHeader from '../components/headers/AppHeader';
import HeroSection from '../components/sections/HeroSection';
import SpeakersSection from '../components/sections/SpeakersSection';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 bg-light-950">
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <HeroSection />
      <SpeakersSection />
      <AppFooter />
    </div>
  );
}
