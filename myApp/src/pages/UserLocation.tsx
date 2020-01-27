import * as React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import { GeolocateControl } from "mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiZGZsYXNzbyIsImEiOiJjazV3Z2l3NzQxdXN3M21ubmRsZ3Rlc3kxIn0.nvvOmfaME_uhesO8OJpwoA',
});




class UserLocation extends React.Component {

onMapLoad = (map : any) => { map.addControl(new GeolocateControl()); };

  render() {
    return (
      <Map
        onStyleLoad={this.onMapLoad}
        style='mapbox://styles/mapbox/streets-v8'
      />
    );
  }
}

export default UserLocation;