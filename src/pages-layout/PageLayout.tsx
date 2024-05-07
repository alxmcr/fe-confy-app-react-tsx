import React from 'react';
import AppFooter from '../components/footer/AppFooter';
import AppHeader from '../components/headers/AppHeader';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="h-screen w-screen px-[16px] md:px-[40px] lg:w-[1028px] lg:px-0">
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      {children}
      <AppFooter />
    </div>
  );
}
