// Dependencies
import React, { Fragment, useState, useEffect, useRef } from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  // XIcon,
} from '@heroicons/react/outline';

// Middlewares

// Components
// import AnimationFramePopUp from './AnimationFramePopUp';

// Styles
import './_heroSlider.css';

// Media
import PlaceholderImg from '../media/placeholderImg.png';

const HeroSlider = ({ media }) => {
  const containerID = 'a' + Date.now();
  const widthID = 'b' + Date.now();
  const containerRef = useRef('');
  const anchoRef = useRef('');
  const [galeryArray, setGaleryArray] = useState([]);
  const [indexMedia, setIndexMedia] = useState(0);
  let position = 0;
  // const [showModal, setShowModal] = useState(false);
  var RegexFileFormat = /(?:\.([^.]+))?$/;

  useEffect(() => {
    if (media && media.length > 0 && media[0] !== '') {
      let array = [];
      media.map((mediaLink) => {
        let extension = RegexFileFormat.exec(mediaLink)[1];
        let type;
        switch (extension) {
          case 'avi':
          case 'mp4':
          case 'mpg':
          case 'mov':
          case 'mkv':
            type = 'video';
            break;
          default:
            type = 'image';
            break;
        }
        array.push({ link: mediaLink, fileType: type, ext: extension });
      });
      setGaleryArray(array);
    } else {
      setGaleryArray([{ link: PlaceholderImg, fileType: 'image', ext: 'jpg' }]);
    }
  }, [media]);

  // Right and Left when the galery is not in fullscreen
  const right = () => {
    if (position + 1 < galeryArray.length) {
      position++;
      setIndexMedia(position);
    } else {
      position = 0;
      setIndexMedia(position);
    }
    const container = document.getElementById(containerID);
    const imgWidth = document.getElementById(widthID).clientWidth;
    container.scrollLeft = position * imgWidth;
  };

  const left = () => {
    if (position - 1 >= 0) {
      position--;
      setIndexMedia(position);
    } else {
      position = galeryArray.length;
      setIndexMedia(position);
    }
    const container = document.getElementById(containerID);
    const imgWidth = document.getElementById(widthID).clientWidth;
    container.scrollLeft = position * imgWidth;
  };

  const scroll = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    const imgWidth = anchoRef.current.clientWidth;
    position = Math.round(scrollLeft / imgWidth);
  };

  return (
    <Fragment>
      <div
        className="w-full h-48 sm:h-64 lg:h-96 bg-gray-100"
        style={{ zIndex: -1 }}
      >
        {/* Galery */}
        <div
          id={widthID}
          ref={anchoRef}
          className="relative h-full w-full flex items-center	justify-between flex-col flex-nowrap"
        >
          {/* View Port */}
          <div
            id={containerID}
            ref={containerRef}
            onScroll={() => scroll()}
            className="flex overflow-hidden flex-none w-full h-full flex-row flex-nowrap ScrollbarsOut ScrollContainerX"
          >
            {/* Content */}
            {galeryArray.map((media, index) =>
              media.fileType === 'image' ? (
                // Images
                <div
                  key={index + 'mediaMinimizada'}
                  className="relative text text-center flex-none w-full h-full ScrollObjectSnap bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${media.link || PlaceholderImg})`,
                  }}
                />
              ) : (
                // Video
                <div
                  key={index + 'mediaMinimizada'}
                  className="text text-center flex-none w-full h-full ScrollObjectSnap"
                >
                  <video
                    className="w-full h-auto"
                    autoPlay="autoplay"
                    muted
                    loop="loop"
                  >
                    <source src={media.link} type={'video/' + media.ext} />
                  </video>
                </div>
              )
            )}
            {/* Controls */}
            <div className="absolute bottom-2 right-2 flex flex-wrap content-center space-x-2">
              <button
                onClick={() => left()}
                className="text-white transform-gpu hover:scale-150 duration-200 rounded-full border border-white"
              >
                <ArrowLeftIcon className="w-4 h-4 m-2" />
              </button>
              <button
                onClick={() => right()}
                className="text-white transform-gpu hover:scale-150 duration-200 rounded-full border border-white"
              >
                <ArrowRightIcon className="w-4 h-4 m-2" />
              </button>
              <div className="h-1 w-24 border-b-2 border-white self-center" />
              <p className="text-white self-center">
                {indexMedia + 1} | {galeryArray.length}
              </p>
            </div>
            {/* End Controls */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSlider;
