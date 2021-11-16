// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components
import Header from '../components/Header';
import MediaExperience from '../components/MediaExperience.js';
import ActionFooter from '../components/ActionFooter.js';
import Footer from '../components/Footer';

// Styles

// Media
import activity1 from '../media/tren-turistico2.jpg'
const data = {
  image: activity1,
  title: 'TREN TURÍSTICO',
  description:
    'El tren turístico de City Sightseeing en Platja de Palma ofrece la mejor forma de recorrer y visitar la Platja de Palma. Contemple las vistas panorámicas la bahía de Palma dándose un agradable paseo con el tren.',
  star: 5,
  price: '€ 5',
  url: '/tren-turistico',
};


const Experience = () => {
    const { image, title, description, star, price, url } = data;

  return (
    <Fragment>
      <Header src={'./'} />
      <MediaExperience data={ data } />
      <Footer />
      <ActionFooter src={'./'} />
    </Fragment>
  );
};
export default Experience;
