import React from 'react';
import ReactDOM from 'react-dom';
import styles from './googlemap.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
//'https://maps.googleapis.com/maps/api/js?key=AIzaSyBPxvLFi1p2GpgJ2BsZ_KVx3qURUHG40ZA&callback=initMap';

const AnyReactComponent = ({text}) => <div>{text}</div>;






class GoogleMap extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    function createOptions() {
      return {
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#777777"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      }
    }


    return (
      <div id='map' styleName='map' ref={(map)=>this.map=map}>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom} style={{
          height: '500px'
        }}
        options={createOptions}>
          <AnyReactComponent lat={51.510357} lng={-0.116773} text={'Google Map'}/>
        </GoogleMapReact>
      </div>
    )
  }
}

GoogleMap.defaultProps = {
  center: {
    lat: 55.510357,
    lng: 10.416773
  },
  zoom:5
}
export default CSSModules(GoogleMap, styles, {allowMultiple: true})
