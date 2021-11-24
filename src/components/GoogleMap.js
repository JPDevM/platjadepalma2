// Dependencies
import React, { Fragment, Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// Middlewares

// Components

// Styles
const mapStyles = {
  width: '100%',
  height: '100%',
};

// Media

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 39.53917132519,
          lng: 2.713705281023331,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDPb3WLrZbyZ52CCuayoT4P77ZxHDN0Sw0',
})(MapContainer);
