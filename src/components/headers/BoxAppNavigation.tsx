import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkData } from '../../@types/appTypes';
import Icon24x24Close from '../@icons/24x24/Icon24x24Close';
import Icon24x24Menu from '../@icons/24x24/Icon24x24Menu';
import Icon44x44Code from '../@icons/44x44/Icon44x44Code';
import AppNavigation from './AppNavigation';
import NavLinksList from './NavLinksList';

type Props = {
  navLinks: NavLinkData[];
};

export default function BoxAppNavigation({ navLinks = [] }: Props) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="flex w-full items-center justify-between bg-pink-400 text-golden-300 md:flex-row lg:w-[1028px]">
      <div className="flex w-full items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <Icon44x44Code />
          <span className="text-[25px] font-bold">Confy</span>
        </NavLink>
        <button className="flex md:hidden" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <Icon24x24Close /> : <Icon24x24Menu />}
        </button>
      </div>
      <div className="hidden w-full md:flex">
        <AppNavigation>
          <NavLinksList navLinks={navLinks} />
        </AppNavigation>
      </div>
      {showMenu ? (
        <div className="flex w-full md:hidden">
          <AppNavigation>
            <NavLinksList navLinks={navLinks} />
          </AppNavigation>
        </div>
      ) : null}
    </div>
  );
}
