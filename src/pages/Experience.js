// Dependencies
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

// Data
import data from '../data/experiences.json';

// Components
import Header from '../components/Header';
import MediaExperience from '../components/MediaExperience.js';
import ActionFooter from '../components/ActionFooter.js';
import Footer from '../components/Footer';

// Styles

// Media

const Experience = () => {
  let { id } = useParams();

  return (
    <Fragment>
      {data.map((dataElement, index) =>
        dataElement.url === '/' + id ? (
          <div key={index}>
            <Header src={'./'} />
            <MediaExperience data={data[index]} />
            <Footer />
            <ActionFooter data={data[index]} />
          </div>
        ) : (
          ''
        )
      )}
    </Fragment>
  );
};
export default Experience;
