// Dependencies
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { MenuAlt1Icon } from '@heroicons/react/outline';

// Middlewares

// Components

// Styles

// Media
import Logo from '../media/Logo.png';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <div className="z-100 sticky z-10 top-0 bg-white">
        <div className="2xl:container 2xl:mx-auto">
          {/* Menú LG  */}
          <nav
            id="Navigation"
            className={'flex justify-between items-center md:py-8 lg:px-20 md:px-6 p-4'}
          >
            {/* Logo */}
            <div className=" cursor-pointer">
              <img alt="logo" src={Logo} className="w-1/2 h-1/2" />
            </div>
            <Router>
              <ul className="hidden lg:flex justify-center items-center space-x-10 cursor-pointer text-gray-800 text-base leading-4">
                <li onClick={() => window.location.replace('#actividades')}>
                  Actividades
                </li>
                <li onClick={() => window.location.replace('#sobre-nosotros')}>
                  Sobre Nosotros
                </li>
              </ul>
            </Router>
            <div className=" lg:hidden block">
              <button onClick={() => setShowMenu(!showMenu)}>
                <MenuAlt1Icon className="transform rotate-180 w-6 h-6 text-gray-700" />
              </button>
            </div>
          </nav>
          <Router>
            <ul
              id="DropMenu"
              className={` flex-col space-y-5 items-start text-gray-800  text-base leading-4 md:px-6 p-4 ${
                showMenu ? 'flex' : 'hidden'
              } `}
            >
              <li>
                <Link to={'#actividades'}>Actividades</Link>
              </li>
              <li>
                <Link to={'#about'}>Sobre nosotros</Link>
              </li>
            </ul>
          </Router>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
