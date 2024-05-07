import React from 'react';
import AppHeader from '../components/headers/AppHeader';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div>
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <div>{children}</div>;
    </div>
  );
}
