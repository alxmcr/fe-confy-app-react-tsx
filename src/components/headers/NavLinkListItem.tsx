import { NavLinkData } from '../../@types/appTypes';

type Props = {
  navLink: NavLinkData;
};

export default function NavLinkListItem({ navLink }: Props) {
  return (
    <li id={navLink.id}>
      <a href={navLink.href}>{navLink.text}</a>
    </li>
  );
}
