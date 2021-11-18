// Dependencies
import React, { Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/solid';

// Components
import Experience from '../../pages/Experience';

// Styles

// Media
import placeholderImg from '../../media/placeholderImg.png';

// Assign the correct ornumber of stars
const renderStar = (stars) => {
  let content = [];
  for (let i = 0; i < 5; i++) {
    // console.log('i', i, 'stars', stars);
    if (i < stars)
      content.push(
        <StarIcon key={stars + 'star'} className="w-6 h-6 text-yellow-500" />
      );
    else
      content.push(
        <StarIcon key={stars + 'star'} className="w-6 h-6 text-gray-500" />
      );
  }
  return content;
};

const Offer = ({ values }) => {
  const { image, title, description, star, price, url } = values;
  // console.log('image:',image)
  // console.log('placeholderImg:',placeholderImg)
  return (
    <Fragment>
      <div className="w-full">
        <Link to={'/experiencias' + url}>
          <div
            className="w-full h-40 sm:h-80 md:h-40 lg:h-60 2xl:h-96 bg-cover bg-center"
            style={
              {
                backgroundImage: `url(${placeholderImg})`,
                // backgroundImage: `url('../../media/${image}')`,
                // backgroundImage: `url(../../media/trenturistico2.jpg)`,
                // backgroundImage: `url(../../../public/images/trenturistico2.jpg)`,
              }
            }
          ></div>
          <div className="flex h-8 -mt-12">
            <div className="bg-white flex-nogrow rounded px-4 py-1 mx-4 text-gray-700">
              {price}
            </div>
            <div className="flex-grow py-auto w-auto min-w-max my-1 mx-4 flex justify-end">
              {renderStar(star)}
            </div>
          </div>
        </Link>
        <p className="text-left text-lg font-semibold mt-8 uppercase">
          {title}
        </p>
        <p className="text-justify text-base font-light text-gray-700 hidden md:inline-block tracking-wider">
          {description}
        </p>
        <Link to={'/experiencias' + url}>
          <p className="text-blue-500 py-4 hover:text-blue-300 text-base underline">
            Ver más
          </p>
        </Link>
      </div>
      {/* Route */}
      <Switch>
        <Route path="experiencias/:id" children={<Experience />} />
      </Switch>
    </Fragment>
  );
};
export default Offer;
