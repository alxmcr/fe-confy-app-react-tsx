import AppFooter from '../components/footer/AppFooter';
import AppHeader from '../components/headers/AppHeader';
import BaseSection from '../components/sections/BaseSection';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2">
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <BaseSection />
      <BaseSection />
      <AppFooter />
    </div>
  );
}
