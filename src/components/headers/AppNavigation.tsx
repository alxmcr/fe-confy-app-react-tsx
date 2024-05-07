import { NavLinkData } from '../../@types/appTypes';
import NavLinksList from './NavLinksList';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppNavigation({ navLinks = [] }: Props) {
  return (
    <nav>
      <NavLinksList navLinks={navLinks} />
    </nav>
  );
}
