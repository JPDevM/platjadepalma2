// Dependencies
import React, { Fragment, useState, useEffect, useRef } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
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
    if (position + 1 < galeryArray.length) position++;
    else position = 0;
    const container = document.getElementById(containerID);
    const imgWidth = document.getElementById(widthID).clientWidth;
    container.scrollLeft = position * imgWidth;
  };

  const left = () => {
    if (position - 1 >= 0) position--;
    else position = galeryArray.length;
    const container = document.getElementById(containerID);
    const imgWidth = document.getElementById(widthID).clientWidth;
    container.scrollLeft = position * imgWidth;
  };

  // Right and Left when the galery is in fullscreen
  // const right2 = () => {
  //   if (position + 1 < galeryArray.length) position++;
  //   else position = 0;
  //   const container = document.getElementById('container');
  //   const imgWidth = document.getElementById('ref').clientWidth;
  //   container.scrollLeft = position * imgWidth;
  // };

  // const left2 = () => {
  //   if (position - 1 >= 0) position--;
  //   else position = galeryArray.length;
  //   const container = document.getElementById('container');
  //   const imgWidth = document.getElementById('ref').clientWidth;
  //   container.scrollLeft = position * imgWidth;
  // };

  const scroll = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    const imgWidth = anchoRef.current.clientWidth;
    position = Math.round(scrollLeft / imgWidth);
  };

  return (
    <Fragment>
      <div className="relative w-full h-96 bg-gray-100">
        {/* Galery */}
        <div
          // onClick={() => setShowModal(true)}
          id={widthID}
          ref={anchoRef}
          className="relative h-full w-full flex items-center	justify-between flex-col flex-nowrap"
        >
          {/* View Port */}
          <div
            id={containerID}
            ref={containerRef}
            onScroll={() => scroll()}
            className="flex overflow-auto flex-none w-full h-full flex-row flex-nowrap ScrollbarsOut ScrollContainerX"
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
                >
                  <div className="absolute inline-block bottom-1 right-14 px-2 py-1 text-xl text-black bg-gray-200 bg-opacity-70 rounded-lg">
                    {/* <p>
                      {index + 1} / {galeryArray.length}
                    </p> */}
                  </div>
                </div>
              ) : (
                // Video
                <div
                  key={index + 'mediaMinimizada'}
                  className="text text-center flex-none w-full h-full ScrollObjectSnap"
                >
                  <video
                      className="w-full h-full"
                      autoPlay="autoplay"
                      muted
                      loop="loop"
                      poster={media}
                    >
                      {console.log(media)}
                    <source src={media.link} type={'video/' + media.ext} />
                  </video>
                </div>
              )
            )}
          </div>
        </div>

        <button
          onClick={() => left()}
          className="absolute bottom-1 left-1 px-2 py-1 text-xl text-gray-600 hover:text-black bg-gray-200 bg-opacity-70 rounded-lg"
        >
          <ChevronLeftIcon className="w-7 h-7" />
        </button>

        <button
          onClick={() => right()}
          className="absolute bottom-1 right-1 px-2 py-1 text-xl text-gray-600 hover:text-black bg-gray-200 bg-opacity-70 rounded-lg"
        >
          <ChevronRightIcon className="w-7 h-7" />
        </button>
      </div>

      {/* FullScreen */}
      {/* <AnimationFramePopUp
        showModal={showModal}
        showOrHide={() => setShowModal(false)}
      >
        <div
          className="overflow-y-auto no-scrollbar inline-block w-4/4 min-w-full lg:w-3/4 h-custom overflow-hidden align-middle transition-all transform shadow-xl rounded-md
        bg-gradient-to-r from-primary  to-primaryGradient"
        > */}
      {/* Galery */}
      {/* <div
            id="ref"
            className="relative h-full w-full flex items-center	justify-between flex-col flex-nowrap"
          >
            {/* View Port */}
      {/*<div
              id="container"
              className="flex overflow-auto flex-none w-full h-full flex-row flex-nowrap ScrollbarsOut ScrollContainerX"
            > */}
      {/* Content */}
      {/* {galeryArray.map((media, index) =>
                media.fileType === 'image' ? (
                  // Imágenes Slider
                  <div
                    key={index + 'mediaMaximizada'}
                    className="relative text text-center flex-none w-full h-full ScrollObjectSnap bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${media.link || PlaceholderImg})`,
                    }}
                  >
                    <div className="absolute inline-block bottom-1 right-14 px-2 py-1 text-xl text-black bg-gray-200">
                      <p>
                        {index + 1} / {galeryArray.length}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Video Slider
                  <div className="text text-center flex-none w-full h-full ScrollObjectSnap">
                    <video className="w-full h-full" controls>
                      <source src={media.link} type={'video/' + media.ext} />
                    </video>
                    <div className="absolute inline-block bottom-1 right-14 px-2 py-1 text-xl text-black bg-gray-200">
                      <p>
                        {index + 1} / {galeryArray.length}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div> */}

      {/* Buttons */}
      {/* <button
              onClick={() => left2()}
              className="absolute bottom-1 left-1 px-2 py-1 text-xl text-gray-600 hover:text-black bg-gray-200 bg-opacity-70 rounded-lg"
            >
              <ChevronLeftIcon className="w-7 h-7" />
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="absolute bottom-1 left-14 px-2 py-1 text-xl text-gray-600 hover:text-black bg-gray-200 bg-opacity-70 rounded-lg"
            >
              <XIcon className="w-7 h-7" />
            </button>

            <button
              onClick={() => right2()}
              className="absolute bottom-1 right-1 px-2 py-1 text-xl text-gray-600 hover:text-black bg-gray-200 bg-opacity-70 rounded-lg"
            >
              <ChevronRightIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </AnimationFramePopUp> */}
    </Fragment>
  );
};

export default HeroSlider;
