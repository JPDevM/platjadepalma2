// Dependencies
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// import { ChevronDoubleRightIcon } from '@heroicons/react/outline';

// Middlewares

// Components

// Styles

// Media
import placeholderImg from '../media/placeholderImg.png';
import activity1 from '../media/tren-turistico.jpg';
import activity2 from '../media/activity2.jpg';
import activity3 from '../media/activity3.png';
import activity4 from '../media/activity4.png';
import activity5 from '../media/activity5.png';
import activity6 from '../media/activity6.png';

const Deals = () => {
  return (
    <Fragment>
      <div className="mx-auto container px-6 pt-24 lg:pt-32 xl:px-0">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-x-8">
          <div className="xl:mt-8">
            <div className="text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold leading-relaxed">
              <h1 className="mt-3 lg:mt-4">
                Encuentra cosas increíbles para hacer en las playas de Mallorca.
              </h1>
            </div>
            <h2 className="text-base lg:text-lg tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
              Reserva sin preocupaciones. ¿Cambio de planes? No te preocupes.
              Cancela de forma gratuita hasta 24 horas antes del comienzo de tu
              actividad y recibe un reembolso completo.
            </h2>
            {/* <div className="my-2 flex space-x-4">
              <a
                href={
                  'https://www.instagram.com/explore/tags/playadecanpastilla/?hl=es'
                }
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <button className="focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none mt-5 lg:mt-10 bg-white text-base font-semibold leading-none text-indigo-600 border-2 border-indigo-600 bg-gradient-to-r hover:from-blue-200 hover:to-blue-100 p-4 rounded">
                  Can Pastlla
                </button>
              </a>
              <a
                href={
                  'https://www.instagram.com/explore/tags/playaciudadjardin/?hl=es'
                }
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <button className="focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none mt-5 lg:mt-10 bg-white text-base font-semibold leading-none text-indigo-600 border-2 border-indigo-600 bg-gradient-to-r hover:from-blue-200 hover:to-blue-100 p-4 rounded">
                  Ciudad Jardin
                </button>
              </a>
              <a
                href={
                  'https://www.instagram.com/explore/tags/playadelarenal/?hl=es'
                }
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                <button className="focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none mt-5 lg:mt-10 bg-white text-base font-semibold leading-none text-indigo-600 border-2 border-indigo-600 bg-gradient-to-r hover:from-blue-200 hover:to-blue-100 p-4 rounded">
                  El Arenal
                </button>
              </a>
            </div> */}
          </div>
          <div className="w-full custom-height mt-8 lg:mt-0 rounded-3xl">
            <div className="flex flex-row flex-nowrap justify-between h-auto space-x-4 sm:space-x-8 md:space-x-4 lg:space-x-8">
              <div className="flex-grow flex flex-col space-y-4 sm:space-y-8 pt-28">
                <div
                  className="h-36 sm:h-72 md:h-48 lg:h-56 xl:h-72 2xl:h-96 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${activity1 || placeholderImg})`,
                  }}
                />
                <div
                  className="h-36 sm:h-72 md:h-48 lg:h-56 xl:h-72 2xl:h-96 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${activity2 || placeholderImg})`,
                  }}
                />
              </div>
              <div className="flex-grow flex flex-col space-y-4 sm:space-y-8">
                <div
                  className="h-36 sm:h-72 md:h-48 lg:h-56 xl:h-72 2xl:h-96 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${activity3 || placeholderImg})`,
                  }}
                />
                <div
                  className="h-36 sm:h-72 md:h-48 lg:h-56 xl:h-72 2xl:h-96 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${activity4 || placeholderImg})`,
                  }}
                />
              </div>
              <div className="flex-grow flex flex-col space-y-4 sm:space-y-8 pt-14">
                <div
                  className="h-36 sm:h-72 md:h-48 lg:h-56 xl:h-72 2xl:h-96 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${activity5 || placeholderImg})`,
                  }}
                />
                <div
                  className="h-36 sm:h-72 md:h-48 lg:h-56 xl:h-72 2xl:h-96 rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${activity6 || placeholderImg})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Deals;
