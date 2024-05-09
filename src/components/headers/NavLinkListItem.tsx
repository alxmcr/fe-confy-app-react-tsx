import { NavLinkData } from '../../@types/appTypes';

type Props = {
  navLink: NavLinkData;
};

export default function NavLinkListItem({ navLink }: Props) {
  return (
    <li
      id={navLink.id}
      className="flex h-10 w-full items-center justify-center hover:bg-golden-300 hover:text-light-950"
    >
      <a href={navLink.href} className="w-full text-center">
        {navLink.text}
      </a>
    </li>
  );
}
