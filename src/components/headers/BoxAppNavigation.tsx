import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkData } from '../../@types/appTypes';
import Icon24x24Close from '../@icons/24x24/Icon24x24Close';
import Icon24x24Menu from '../@icons/24x24/Icon24x24Menu';
import Icon44x44Code from '../@icons/44x44/Icon44x44Code';
import AppNavigation from './AppNavigation';

type Props = {
  navLinks: NavLinkData[];
};

export default function BoxAppNavigation({ navLinks = [] }: Props) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-between  border text-golden-300 md:flex-row lg:w-[1028px]">
      <div>
        <NavLink to="/" className="flex items-center gap-3">
          <Icon44x44Code />
          <span className="text-[25px] font-bold">Confy</span>
        </NavLink>
        <button className="flex md:hidden" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <Icon24x24Close /> : <Icon24x24Menu />}
        </button>
      </div>
      <AppNavigation navLinks={navLinks} />
      {showMenu ? <AppNavigation navLinks={navLinks} /> : null}
    </div>
  );
}
