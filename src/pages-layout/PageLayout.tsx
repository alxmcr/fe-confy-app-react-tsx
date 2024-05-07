import React from 'react';
import AppFooter from '../components/footer/AppFooter';
import AppHeader from '../components/headers/AppHeader';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div>
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <div className="h-screen">
        <div className="w-full p-[16px] md:p-[40px] lg:w-[1028px]">{children}</div>
      </div>
      ;
      <AppFooter />
    </div>
  );
}
