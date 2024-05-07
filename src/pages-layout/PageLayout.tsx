import React from 'react';
import AppHeader from '../components/headers/AppHeader';

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div>
      <AppHeader />
      <div>{children}</div>;
    </div>
  );
}
