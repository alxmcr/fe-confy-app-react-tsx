import React from 'react';
import AppFooter from '../components/footer/AppFooter';
import AppHeader from '../components/headers/AppHeader';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="size-full border bg-light-950">
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <div className="h-screen px-[16px] md:px-[40px] lg:px-0">{children}</div>
      <AppFooter />
    </div>
  );
}
