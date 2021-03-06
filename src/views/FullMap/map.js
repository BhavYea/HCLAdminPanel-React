import React, { useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import * as Towers from '../../custom/data/TowerLocs';
import * as plots from '../../custom/data/plots';
import { Line } from 'react-chartjs-2';
// import DrawGraph from './DrawGraph';
// import DrawGraph from './DrawGraph';

// function makeMarker(props) {
//   return <Marker key={props.id} position={props.coords} />
// }

const Map = () => {
  var id = 0;
  const [selTower, setTower] = useState(Towers.TowerList[0]);

  return <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 28.5526, lng: 77.5548 }}
  >

    {Towers.TowerList.map((tower) => (
      <Marker key={tower.id}
        position={tower.coords}
        icon={{
          url: 'https://image.flaticon.com/icons/png/512/62/62501.png',
          scaledSize: new window.google.maps.Size(32, 32)
        }}

        onClick={() => {
          setTower(tower);
          // console.log("Clicked "+selTower.title);
          // else console.log("Empty");
        }}
      />
    ))};

    {selTower && (
      <div>
      <InfoWindow
        position={{ lat: selTower.coords.lat + 0.006, lng: selTower.coords.lng }}
        onCloseClick={() => {
          setTower(null);
        }}
      >
        <div>
          {selTower.title}
        </div>
      </InfoWindow>
      {/* <DrawGraph 
        towerID={selTower.id}
        name={selTower.title}
      /> */}
      </div>
    )}
  </GoogleMap>
}

// export var PLOT = plot;
// export var selectedTower=selectedTower;

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return <div style={{ width: "100vh", height: "100vh", position: "relative", overflow: "hidden" }}>
    <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'}
      loadingElement={<div style={{ height: "100%", width: "100%" }} />}
      containerElement={<div style={{ height: "100%", width: "100%" }} />}
      mapElement={<div style={{ height: "100%", width: "100%" }} />}
    />
  </div>
}