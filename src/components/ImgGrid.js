// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components

// Styles

// Media

const ImgGrid = ({ data }) => {
  const { url, imgGrid } = data;
  // console.log('imgGrid: ',imgGrid[0]);
  return (
    <Fragment>
      <div className="my-4 grid grid-cols-1 md:grid-cols-5 md:px-4 lg:grid-cols-7 gap-2 h-72 lg:h-96">
        {/* Image 1  */}
        <div className=" md:col-span-2">
          <img
            src={process.env.PUBLIC_URL + '/images' + url + '/' + imgGrid[0]}
            alt="404 error"
            className="w-full object-cover h-72 max-h-72 lg:h-96 lg:max-h-96 md:rounded-tl-xl md:rounded-bl-xl"
          />
        </div>
        {/* Image 2 */}
        <div className="hidden md:inline-block col-span-2 ">
          <img
            src={process.env.PUBLIC_URL + '/images' + url + '/' + imgGrid[1]}
            alt="404 error"
            className="w-full object-cover h-72 max-h-72 lg:h-96 lg:max-h-96"
          />
        </div>
        {/* Image 3 & 4 */}
        <div className="hidden md:flex flex-col ">
          <div className="">
            <img
              src={process.env.PUBLIC_URL + '/images' + url + '/' + imgGrid[2]}
              alt="404 error"
              className="w-full object-cover h-36 max-h-36 lg:h-48 lg:max-h-48 pb-1 rounded-tr-xl lg:rounded-none"
            />
          </div>
          <div className="">
            <img
              src={process.env.PUBLIC_URL + '/images' + url + '/' + imgGrid[3]}
              alt="404 error"
              className="w-full object-cover h-36 max-h-36 lg:h-48 lg:max-h-48 pt-1 rounded-br-xl lg:rounded-none"
            />
          </div>
        </div>
        {/* Image 5 */}
        <div className="hidden lg:inline-block col-span-2">
          <img
            src={process.env.PUBLIC_URL + '/images' + url + '/' + imgGrid[4]}
            alt="404 error"
            className="w-full object-cover h-72 max-h-72 lg:h-96 lg:max-h-96 rounded-tr-xl rounded-br-xl"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default ImgGrid;