import React from 'react';
import AppFooter from '../components/footer/AppFooter';
import AppHeader from '../components/headers/AppHeader';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="border bg-light-950">
      <div className="lg:mx-auto lg:w-[1028px]">
        <AppHeader navLinks={MOCK_NAV_LINKS} />
        <div className="h-screen px-[16px] md:px-[40px] lg:px-0">{children}</div>
        <AppFooter />
      </div>
    </div>
  );
}
