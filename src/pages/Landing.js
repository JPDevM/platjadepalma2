// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components
import NavBar from '../components/NavBar';
import HeroSlider from '../components/HeroSlider';
import Deals from '../components/Deals';
import MonthlyOffers from '../components/offers/MonthlyOffers';
import AboutUs from '../components/AboutUs.js';
import FacebookChat from '../components/FacebookChat';
import Footer from '../components/Footer';

// Styles

// Media (Hero)
import slider1 from '../media/slider1.jpg';
import slider2 from '../media/slider2.jpg';
import aquarium from '../media/aquarium.mp4';
import sea from '../media/sea.mp4';
import yacht from '../media/yacht.mp4';
const media = [aquarium, sea, yacht, slider1, slider2];

const Landing = () => {
  return (
    <Fragment>
      <NavBar />
      <HeroSlider media={media} />
      <Deals />
      <MonthlyOffers />
      <AboutUs />
      <FacebookChat />
      <Footer />
    </Fragment>
  );
};

export default Landing;
