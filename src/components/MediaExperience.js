// Dependencies
import React, { Fragment } from 'react';
import { StarIcon } from '@heroicons/react/solid';

// Middlewares

// Components
import ImgGrid from './ImgGrid';
import GoogleMap from './GoogleMap';
import Slider from '../media/slider.png';

// Styles

// Media

const renderStar = (stars) => {

  let content = [];
  for (let i = 0; i < 5; i++) {
    // console.log('i', i, 'stars', stars);
    if (i < stars)
      content.push(
        <StarIcon key={stars + 'star'} className="w-5 h-5 text-yellow-500" />
      );
    else
      content.push(
        <StarIcon key={stars + 'star'} className="w-5 h-5 text-gray-500" />
      );
  }
  return content;
};

const MediaExperience = ({ data }) => {
  const { image, title, description, star, price, url } = data;
  const hashtag = url.replace('/', '#').concat('-mallorca');
  const tag = url.concat('-mallorca');

  return (
    <Fragment>
      {/* <div className="w-full flex justify-between items-center"></div> */}
      <ImgGrid data={data} />

      <div className="flex flex-col px-4">
        <div className="py-4 border-b border-gray-300">
          <div className="font-bold text-2xl text-gray-700">{title}</div>
          <div className="flex flex-wrap content-center">
            {renderStar(star)}
          </div>
        </div>
        <div className="py-4 border-b border-gray-300">
          <div className="font-semibold text-2xl text-gray-700">
            Sobre la experiencia
          </div>
          <div className="font-normal text-base text-gray-700 pt-2 text-justify">
            {description}
          </div>
        </div>
        <div className="py-4 border-b border-gray-300">
          <div className="font-semibold text-2xl text-gray-700">
            Comparte tu experiencia
          </div>
          <div className="cursor-pointer pt-2">
            {/* Instagram Icon Solid */}
            <a
              href={`https://www.instagram.com/explore/tags${tag}/?hl=es`}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className="flex justify-start items-center"
            >
              <svg
                className="fill-current text-gray-800 hover:text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2969 12C14.2969 13.2686 13.2686 14.2969 12 14.2969C10.7314 14.2969 9.70312 13.2686 9.70312 12C9.70312 10.7314 10.7314 9.70312 12 9.70312C13.2686 9.70312 14.2969 10.7314 14.2969 12Z"
                  fill="currentColor"
                />
                <path
                  d="M17.3716 7.93616C17.2612 7.63696 17.085 7.36615 16.8561 7.14386C16.6339 6.91498 16.3632 6.73883 16.0638 6.62842C15.821 6.53412 15.4563 6.42188 14.7845 6.3913C14.0577 6.35815 13.8398 6.35101 12 6.35101C10.16 6.35101 9.94208 6.35797 9.21552 6.39111C8.5437 6.42188 8.17877 6.53412 7.93616 6.62842C7.63678 6.73883 7.36597 6.91498 7.14386 7.14386C6.91498 7.36615 6.73883 7.63678 6.62823 7.93616C6.53394 8.17896 6.42169 8.54388 6.39111 9.2157C6.35797 9.94226 6.35083 10.1602 6.35083 12.0002C6.35083 13.84 6.35797 14.0579 6.39111 14.7847C6.42169 15.4565 6.53394 15.8212 6.62823 16.064C6.73883 16.3634 6.91479 16.634 7.14368 16.8563C7.36597 17.0852 7.6366 17.2614 7.93597 17.3718C8.17877 17.4662 8.5437 17.5785 9.21552 17.6091C9.94208 17.6422 10.1598 17.6492 11.9998 17.6492C13.84 17.6492 14.0579 17.6422 14.7843 17.6091C15.4561 17.5785 15.821 17.4662 16.0638 17.3718C16.6648 17.14 17.1398 16.665 17.3716 16.064C17.4659 15.8212 17.5781 15.4565 17.6089 14.7847C17.642 14.0579 17.649 13.84 17.649 12.0002C17.649 10.1602 17.642 9.94226 17.6089 9.2157C17.5783 8.54388 17.4661 8.17896 17.3716 7.93616ZM12 15.5383C10.0457 15.5383 8.46149 13.9543 8.46149 12C8.46149 10.0457 10.0457 8.46167 12 8.46167C13.9541 8.46167 15.5383 10.0457 15.5383 12C15.5383 13.9543 13.9541 15.5383 12 15.5383ZM15.6782 9.14868C15.2216 9.14868 14.8513 8.77844 14.8513 8.32178C14.8513 7.86511 15.2216 7.49487 15.6782 7.49487C16.1349 7.49487 16.5051 7.86511 16.5051 8.32178C16.5049 8.77844 16.1349 9.14868 15.6782 9.14868Z"
                  fill="currentColor"
                />
                <path
                  d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM18.8491 14.8409C18.8157 15.5744 18.6991 16.0752 18.5288 16.5135C18.1708 17.4391 17.4391 18.1708 16.5135 18.5288C16.0754 18.6991 15.5744 18.8156 14.8411 18.8491C14.1063 18.8826 13.8715 18.8906 12.0002 18.8906C10.1287 18.8906 9.8941 18.8826 9.15912 18.8491C8.42578 18.8156 7.9248 18.6991 7.48663 18.5288C7.02667 18.3558 6.61029 18.0846 6.26605 17.7339C5.91559 17.3899 5.64441 16.9733 5.47137 16.5135C5.30109 16.0754 5.18445 15.5744 5.15112 14.8411C5.11725 14.1061 5.10938 13.8713 5.10938 12C5.10938 10.1287 5.11725 9.89392 5.15094 9.15912C5.18427 8.4256 5.30072 7.9248 5.47101 7.48645C5.64404 7.02667 5.91541 6.61011 6.26605 6.26605C6.61011 5.91541 7.02667 5.64423 7.48645 5.47119C7.9248 5.3009 8.4256 5.18445 9.15912 5.15094C9.89392 5.11743 10.1287 5.10938 12 5.10938C13.8713 5.10938 14.1061 5.11743 14.8409 5.15112C15.5744 5.18445 16.0752 5.3009 16.5135 5.47101C16.9733 5.64404 17.3899 5.91541 17.7341 6.26605C18.0846 6.61029 18.356 7.02667 18.5288 7.48645C18.6993 7.9248 18.8157 8.4256 18.8492 9.15912C18.8828 9.89392 18.8906 10.1287 18.8906 12C18.8906 13.8713 18.8828 14.1061 18.8491 14.8409Z"
                  fill="currentColor"
                />
              </svg>
              <div className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 pl-2">
                {hashtag}
              </div>
            </a>
          </div>
        </div>
        <div className="">
          <GoogleMap data={data}></GoogleMap>
          {/* <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: -1.2884,
              lng: 36.8233,
            }}
          /> */}
          {/* <GoogleMapReact
            bootstrapURLKeys={{
              // remove the key if you want to fork
              key: 'AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo',
              language: 'es',
              region: 'ES',
            }}
            defaultCenter={{ lat: 39.53917132519, lng: 2.713705281023331 }}
            defaultZoom={14}
            distanceToMouse={distanceToMouse}
          >
            {points.map(({ lat, lng, id, title }) => {
              return (
                <MyMarker
                  key={id}
                  lat={lat}
                  lng={lng}
                  text={id}
                  tooltip={title}
                />
              );
            })}
          </GoogleMapReact> */}
        </div>
      </div>
    </Fragment>
  );
};
export default MediaExperience;
