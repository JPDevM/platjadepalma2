// Dependencies
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


// Middlewares

// Components

// Styles

// Media
import Image404 from '../media/404.png';
import ImageDisconect404 from '../media/404-disconect.png';

const Error404 = () => {
  return (
    <Fragment>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className>
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Parece que has encontrado la puerta a la gran nada
                </h1>
                <p className="my-2 text-gray-800">
                  ¡Lo siento por esto! Visite nuestra página de inicio para
                  llegar a donde necesita ir.
                </p>
                <Link to="/">
                  <button
                    className="focus:ring-blue-700 focus:ring-2 focus:ring-offset-2 focus:outline-none p-4 bg-white text-base font-semibold leading-none border border-blue-500 bg-gradient-to-r from-blue-200 to-blue-100 rounded"
                  >Llévame ahí !
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src={Image404} alt="404 error" />
            </div>
          </div>
        </div>
        <div>
          <img src={ImageDisconect404} alt="disconect" />
        </div>
      </div>
    </Fragment>
  );
};

export default Error404;

