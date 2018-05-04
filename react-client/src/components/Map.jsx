import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=" + GOOGLE_API_KEY;

class Map extends Component {
   render() {
   const GoogleMapComponent = withGoogleMap((props) => (
      <GoogleMap
        defaultZoom = { 13 }
        defaultCenter={props.center}
        googleMapURL={googleMapURL}
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapComponent
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

// const Map = withGoogleMap((props) => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={11}
//     defaultCenter={props.center}
//     googleMapURL={googleMapURL}
//   >
//     { props.markers }
//   </GoogleMap>
// ));

// const MapContainer = (props) => {
//   const getMarkers = () => {
//     return props.data.map((location, i) => {
//       return (
//         <Marker
//           key={i}
//           position={{
//             lat: location.coordinates.latitude,
//             lng: location.coordinates.longitude
//           }}
//         />
//       );
//     });
//   };

// const getCenter = () => {
//     let minLat, maxLat, minLng, maxLng;

//     props.data.forEach((location, i) => {
//       if (i === 0) {
//         [minLat, maxLat, minLng, maxLng] = [
//           location.coordinates.latitude,
//           location.coordinates.latitude,
//           location.coordinates.longitude,
//           location.coordinates.longitude
//         ];
//       } else {
//         minLat = Math.min(minLat, location.coordinates.latitude);
//         maxLat = Math.max(maxLat, location.coordinates.latitude);
//         minLng = Math.min(minLng, location.coordinates.longitude);
//         maxLat = Math.max(maxLat, location.coordinates.longitude);
//       }
//     });
//     return {
//       lat: ( minLat + maxLat ) / 2,
//       lng: ( minLng + maxLng ) / 2
//     }
//   };

export default Map;
