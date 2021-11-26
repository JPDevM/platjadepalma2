// Dependencies
import React, { Fragment, useState } from 'react';
import {
  ArrowLeftIcon,
  ShareIcon,
  ClipboardCopyIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';

// Middlewares

// Components

// Styles

// Media


const Header = () => {
  const [showShared, setShowShared] = useState(false);
  let location = useLocation();
  // console.log('location: ', location);

  return (
    <Fragment>
      <div className="flex justify-between items-center h-16 shadow">
        <Link to="/">
          <div className="flex justify-between items-center">
            <ArrowLeftIcon className="w-4 h-4 m-2" />
            Volver
          </div>
        </Link>
        <div
          className=" cursor-pointer"
          onClick={() => {
            setShowShared(true);
            navigator.clipboard.writeText(
              'https://www.platjadepalma.com'+location.pathname
            );
          }}
        >
          <ShareIcon className="w-5 h-5 m-4" />
        </div>
        {showShared && (
          <div
            class="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0
         justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900"
          >
            <div class="flex flex-col p-4 bg-white shadow-md hover:shodow-lg rounded">
              <div class="flex justify-end">
                <div
                  className="rounded-full w-5 h-5 bg-red-500 p-1 mb-4 cursor-pointer shadow-lg"
                  onClick={() => setShowShared(false)}
                >
                  <XIcon className="w-3 h-3 text-white" />
                </div>
              </div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex flex-col ml-3">
                  <div class="font-medium leading-none">
                    Copiar al portapapeles
                  </div>
                  <p class="text-sm text-gray-600 leading-none my-2">
                    https://www.platjadepalma.com{location.pathname}
                  </p>
                </div>
                <button
                  onClick={() => setShowShared(false)}
                  className="focus:ring-blue-700 focus:ring-2 focus:ring-offset-2 focus:outline-none px-5 ml-4 py-2 bg-white text-base font-semibold leading-none border border-blue-500 bg-gradient-to-r from-blue-200 to-blue-100 p-4 rounded"
                >
                  <ClipboardCopyIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default Header;
