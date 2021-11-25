// Docs
// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications

// Dependencies
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// Middlewares

// Components

// Styles
const mapStyles = {
  // width: '100%',
  width: '100%',
  height: '100%',
};

// Media

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    // console.log('location:', this.props.data.map.lat, this.props.data.map.lng, this.props.data.map.zoom);
    // console.log('title:', this.props.data.title );
    return (
      <Map
        google={this.props.google}
        zoom={this.props.data.map.zoom}
        style={mapStyles}
        initialCenter={{
          lat: this.props.data.map.lat,
          lng: this.props.data.map.lng,
        }}
      >
        <Marker onClick={this.onMarkerClick} name={this.props.data.title} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDPb3WLrZbyZ52CCuayoT4P77ZxHDN0Sw0',
})(MapContainer);
