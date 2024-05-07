import { NavLinkData } from '../../@types/appTypes';

type Props = {
  navLink: NavLinkData;
};

export default function NavLinkListItem({ navLink }: Props) {
  return (
    <li id={navLink.id} className="w-full">
      <a href={navLink.href} className="w-full">
        {navLink.text}
      </a>
    </li>
  );
}
