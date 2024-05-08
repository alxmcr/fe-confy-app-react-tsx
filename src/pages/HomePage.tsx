import AppFooter from '../components/footer/AppFooter';
import BoxGridSpeakers from '../components/grids/speakers/BoxGridSpeakers';
import AppHeader from '../components/headers/AppHeader';
import BaseSection from '../components/sections/BaseSection';
import HeroSection from '../components/sections/HeroSection';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 bg-light-950">
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <HeroSection />
      <BaseSection id="speakers">
        <div className="flex flex-col gap-4">
          <h2 className="font-bungee-inline text-[34px] text-golden-300">Speakers</h2>
          <BoxGridSpeakers />
        </div>
      </BaseSection>
      <AppFooter />
    </div>
  );
}
