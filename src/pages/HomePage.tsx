import AppFooter from '../components/footer/AppFooter';
import AppHeader from '../components/headers/AppHeader';
import HeroSection from '../components/sections/HeroSection';
import ScheduleSection from '../components/sections/ScheduleSection';
import SpeakersSection from '../components/sections/SpeakersSection';
import TicketsSection from '../components/sections/TicketsSection';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-light-950">
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <HeroSection />
      <SpeakersSection />
      <ScheduleSection />
      <TicketsSection />
      <AppFooter />
    </div>
  );
}
