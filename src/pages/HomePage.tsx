import AppFooter from '../components/footer/AppFooter';
import AppHeader from '../components/headers/AppHeader';
import BaseSection from '../components/sections/BaseSection';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 bg-light-950">
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <BaseSection id="hero">
        <p>Hola!</p>
      </BaseSection>
      <BaseSection id="speakers">
        <p>Hola!</p>
      </BaseSection>
      <AppFooter />
    </div>
  );
}
