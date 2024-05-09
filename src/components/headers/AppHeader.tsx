import { NavLinkData } from '../../@types/appTypes';
import BoxAppNavigation from './BoxAppNavigation';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppHeader({ navLinks = [] }: Props) {
  return (
    <header className="flex h-[70px] w-full justify-center px-4 md:px-10">
      <BoxAppNavigation navLinks={navLinks} />
    </header>
  );
}
