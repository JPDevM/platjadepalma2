// Dependencies
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  MenuAlt1Icon,
  SearchIcon,
  ArrowNarrowRightIcon,
  XIcon,
} from '@heroicons/react/outline';

// Middlewares

// Components

// Styles

// Media
import Logo from '../media/Logo.png';

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <div className="z-100 sticky z-10 top-0 bg-white">
        <div className="2xl:container 2xl:mx-auto">
          {/* Menú LG  */}
          <nav
            id="Navigation"
            className={` ${
              showSearch ? 'hidden' : 'flex'
            } justify-between items-center md:py-8 lg:px-20 md:px-6 p-4`}
          >
            {/* Logo */}
            <div className=" cursor-pointer">
              <img alt="logo" src={Logo} className="w-1/2 h-1/2" />
            </div>
            <Router>
              <ul className="hidden lg:flex justify-center items-center space-x-10 cursor-pointer text-gray-800 text-base leading-4">
                <li>
                  <Link to={'experiencias/tren-turistico'}>Actividades</Link>
                </li>
                <li>
                  <Link to={'experiencias/palma-aquarium'}>Palma de Mallorca</Link>
                </li>
                <li>
                  <Link to={'experiencias/paddle-surf'}>Sobre nosotros</Link>
                </li>
                {/* <li>
                <Link to="">Sobre Nosotros</Link>
              </li> */}
                {/* <li>
                <button
                  aria-label="show"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <SearchIcon className="w-6 h-6 text-gray-700" />
                </button>
              </li> */}
              </ul>
            </Router>
            <div className=" lg:hidden block">
              {/* <button onClick={() => setShowSearch(!showSearch)} className="mr-6">
              <SearchIcon className="w-6 h-6 text-gray-700" />
            </button> */}
              <button onClick={() => setShowMenu(!showMenu)}>
                <MenuAlt1Icon className="transform rotate-180 w-6 h-6 text-gray-700" />
              </button>
            </div>
            {/* Social Media */}
            {/* <Router>
            <ul className="hidden lg:flex space-x-10 justify-center items-center cursor-pointer text-gray-800 text-base leading-4">
              <li>
                <Link to="">Community</Link>
              </li>
              <li>
                <Link to="">Login</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
            </ul>
          </Router> */}
          </nav>
          {/* Social Media */}
          <Router>
            <ul
              id="DropMenu"
              className={` flex-col space-y-5 items-start text-gray-800  text-base leading-4 md:px-6 p-4 ${
                showMenu ? 'flex' : 'hidden'
              } `}
            >
              <li>
                <Link to={'experiencias/tren-turistico'}>Tren turístico</Link>
              </li>
              <li>
                <Link to={'experiencias/palma-aquarium'}>Palma aquarium</Link>
              </li>
              <li>
                <Link to={'experiencias/paddle-surf'}>Pddle surf</Link>
              </li>
            </ul>
          </Router>
          {/* <div id="Search" className={`${showSearch ? 'block' : 'hidden'}`}>
          <div className="relative py-14 lg:px-40 lg:py-16 md:px-12 md:py-28 px-6 bg-gray-50">
            <div
              onClick={() => setShowSearch(!showSearch)}
              className=" absolute right-0 top-0 lg:py-20 lg:px-28 p-6 cursor-pointer flex justify-end items-center"
            >
              <p className="text-base leading-4 text-gray-800 mr-2">Cerrar</p>
              <XIcon className="w-5 h-5" />
            </div>
            <div className=" flex justify-center flex-col items-center lg:px-40 px-0">
              <div className=" relative focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border-b-2 border-gray-800 flex justify-between w-full">
                <input
                  type="text"
                  className=" appearance-none focus:none bg-gray-50 p-2 text-gray-800 text-base leading-4 placeholder-gray-800 w-full"
                  placeholder="¿ Que estás buscando ?"
                />
                <ArrowNarrowRightIcon className="w-7 h-7 absolute top-0 right-0 cursor-pointer" />
              </div>
              <Router>
                <div className=" flex  justify-between w-full mt-6">
                  <div className=" flex space-x-6">
                    <p className=" text-gray-600 text-base leading-4">
                      <Link to="">Instagram</Link>
                    </p>
                    <p className=" text-gray-600 text-base leading-4">
                      <Link to="">Palma Aquarium</Link>
                    </p>
                    <p className=" text-gray-600 text-base leading-4">
                      <Link to="">Tren turístico</Link>
                    </p>
                    <p className=" text-gray-600 text-base leading-4">
                      <Link to="">Sobre Nosotros</Link>
                    </p>
                  </div>
                </div>
              </Router>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
