// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components
import Offer from './Offer';

// Styles

// Media
import activity1 from '../../media/tren-turistico2.jpg';
import activity2 from '../../media/aquarium2.jpg';
import activity3 from '../../media/activity6.jpg';

// Data
const data1 = {
  image: activity1,
  title: 'TREN TURÍSTICO',
  description:
    'El tren turístico de City Sightseeing en Platja de Palma ofrece la mejor forma de recorrer y visitar la Platja de Palma. Contemple las vistas panorámicas la bahía de Palma dándose un agradable paseo con el tren.',
  star: 5,
  price: '€ 5',
  url: '/tren-turistico',
};
const data2 = {
  image: activity2,
  title: 'PALMA AQUARIUM',
  description:
    'La visita a Palma Aquarium es apta para todos los públicos, tanto adultos como familias y se puede complementar con otras actividades dentro del recinto que hacen de ésta, una experiencia aún más inolvidable.',
  star: 5,
  price: '€ 22',
  url: '/palma-aquarium',
};
const data3 = {
  image: activity3,
  title: 'Paddle Surf',
  description:
    'Completa tu experiencia con la posibilidad de navegar en el paddle surf y pasear por las calas de la zona.  Puedes navegar de pie o sentado con el modo kayak.',
  star: 4,
  price: '€ 10',
  url: '/paddle-surf',
};

const MonthlyOffers = () => {
  // Returns current month name.
  const monthName = () => {
    const monthNames = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    var date = new Date();
    return monthNames[date.getMonth()];
  };

  return (
    <Fragment>
      <div className="mx-auto container px-6 pt-24 lg:pt-32 pb-212 lg:pb-16 xl:px-0 my-12 text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold leading-relaxed">
        <p className="text-center">
          Mejores atracciones para{' '}
          <span className="text-blue-500">{monthName()}</span>
        </p>
      </div>
      <div className="w-full h-full space-y-10 px-4 sm:px-28 flex flex-col md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8 xl:space-x-12 2xl:space-x-16">
        <Offer data={data1} />
        <Offer data={data2} />
        <Offer data={data3} />
      </div>
    </Fragment>
  );
};

export default MonthlyOffers;
