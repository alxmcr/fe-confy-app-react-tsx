import { NavLinkData } from '../../@types/appTypes';
import NavLinkListItem from './NavLinkListItem';

type Props = {
  navLinks: NavLinkData[];
};

export default function NavLinksList({ navLinks = [] }: Props) {
  return (
    <ul className="flex w-full flex-col gap-2 py-3 md:flex-row">
      {navLinks.map((navLink) => (
        <NavLinkListItem key={navLink.id} navLink={navLink} />
      ))}
    </ul>
  );
}
