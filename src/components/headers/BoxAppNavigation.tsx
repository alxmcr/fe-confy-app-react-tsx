import { NavLink } from 'react-router-dom';
import AppNavigation from './AppNavigation';
import Icon44x44Code from '../@icons/44x44/Icon44x44Code';
import { NavLinkData } from '../../@types/appTypes';

type Props = {
  navLinks: NavLinkData[];
};

export default function BoxAppNavigation({ navLinks = [] }: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-between  border text-golden-300 md:flex-row lg:w-[1028px]">
      <NavLink to="/" className="flex items-center gap-3">
        <Icon44x44Code />
        <span className="text-[25px] font-bold">Confy</span>
      </NavLink>
      <AppNavigation navLinks={navLinks} />
    </div>
  );
}
