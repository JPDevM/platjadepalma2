// Dependencies
import React, { Fragment } from 'react';

// Data
import data from '../../data/experiences.json'

// Components
import Offer from './Offer';

// Styles

// Media

const MonthlyOffers = () => {
  // console.log('data:',data[1])
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
      <div
        id="actividades"
        className="mx-auto container px-6 pt-24 lg:pt-32 pb-212 lg:pb-16 xl:px-0 my-12 text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold leading-relaxed"
      >
        <p className="text-center">
          Mejores actividades para{' '}
          <span className="text-blue-500">{monthName()}</span>
        </p>
      </div>
      {/* preparado para poner renderizar de a 3 */}
      <div className="space-y-10 mx-auto container px-6 flex flex-col md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8 xl:space-x-12 2xl:space-x-16">
        {data.map((value, index) => (
          <Offer key={index + 'offers'} values={value} />
        ))}
      </div>
    </Fragment>
  );
};

export default MonthlyOffers;
