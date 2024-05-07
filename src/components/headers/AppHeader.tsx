import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon24x24Close from '../@icons/24x24/Icon24x24Close';
import Icon24x24Menu from '../@icons/24x24/Icon24x24Menu';
import Icon44x44Code from '../@icons/44x44/Icon44x44Code';

export default function AppHeader() {
  const [showMenu, setShowMenu] = React.useState(false);

  const handlerShowMenu = () => setShowMenu(true);
  const handlerHiddenMenu = () => setShowMenu(false);

  return (
    <header className="flex w-full justify-center bg-light-950 p-4">
      <div className="flex items-center justify-between  border text-golden-300 lg:w-[1028px]">
        <NavLink to="/" className="flex items-center gap-3">
          <Icon44x44Code />
          <span className="text-[25px] font-bold">Confy</span>
        </NavLink>

        {!showMenu ? (
          <button className="" onClick={handlerShowMenu} aria-label="Hamburger button - Open Menu">
            <Icon24x24Menu />
          </button>
        ) : (
          <button className="" onClick={handlerHiddenMenu} aria-label="X button - Close Menu">
            <Icon24x24Close />
          </button>
        )}
      </div>
    </header>
  );
}
