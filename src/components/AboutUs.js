// Dependencies
import React, { Fragment } from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
// import { StarIcon } from '@heroicons/react/solid';

// Components

// Styles

// Media
import compass from '../media/compass.png';
import check from '../media/check.png';

const AboutUs = () => {
  return (
    <Fragment>
      <div className="mx-auto container px-6 pt-24 lg:pt-32 pb-212 lg:pb-16 xl:px-0 my-12">
        <p className="text-center text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold leading-relaxed">
          Actividades filtradas por{' '}
          <span className="text-blue-500">residentes</span> de Palma de
          Mallorca.
        </p>
        <p className="text-justify text-md lg:text-lg xl:text-xl text-gray-600 tracking-1px font-normal leading-relaxed py-8">
          Encuentre experiencias excepcionales de la vida real seleccionadas por
          expertos. Aquí solo encontrarás las mejores actividades para hacer en
          tu viaje. <span className="text-blue-500">Somos la respuesta a:</span>
          <ul className="space-y-8 pt-8 text-md lg:text-2xl xl:text-3xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-500 to-pink-600">
            <li className="flex justify-start items-center space-x-4">
              <img src={check} alt="check" className="w-6 xl:w-10" />
              <p>¿Cuales son las mejores actividades para hacer en Palma?</p>
            </li>
            <li className="flex justify-start items-center space-x-4">
              <img src={check} alt="check" className="w-6 xl:w-10" />
              <p>¿Horarios, precio, nesesito saber algo más?</p>
            </li>
          </ul>
        </p>
        <div className="bg-black rounded-xl p-4 mt-8 md:mt-12 xl:mt-20 shadow border-2 border-white">
          <div className="">
            <div
              className="bg-repeat p-4 space-y-4 md:p-8 md:space-y-8 xl:p-12 xl:space-y-12"
              style={{
                backgroundImage: `url(${compass})`,
              }}
            >
              <p className="text-center text-xl lg:text-2xl xl:text-3xl text-gray-100 tracking-1px font-semibold leading-relaxed">
                ¿No tienes claro dónde ir?
              </p>
              <p className="text-center text-xl lg:text-2xl xl:text-3xl text-gray-100 tracking-1px font-semibold leading-relaxed">
                ¡Te hacemos de brújula!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AboutUs;
