import { NavLinkData } from '../../@types/appTypes';
import BoxAppNavigation from './BoxAppNavigation';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppHeader({ navLinks = [] }: Props) {
  return (
    <header className="flex w-full justify-center bg-light-950">
      <BoxAppNavigation navLinks={navLinks} />
    </header>
  );
}
