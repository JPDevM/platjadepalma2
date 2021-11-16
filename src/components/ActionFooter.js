// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components

// Styles

// Media


const ActionFooter = () => {
  return (
    <Fragment>
      <div className="lg:hidden w-full flex justify-between items-center fixed bottom-0 p-4 border-t border-gray-500 bg-white">
        <div className="">
          <span className="font-bold">€ 5</span> por persona
        </div>
        <div className="">
          <button className="focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none text-white text-base font-semibold leading-none border-2 border-indigo-600 bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-600 p-4 rounded">
            Reservar ahora
          </button>
        </div>
      </div>
    </Fragment>
  );
}
export default ActionFooter