import React from "react";
import cell from "../../cell_tower.png"
import ReactMapGL, { Marker, GeolocateControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { POIs } from "../ConstantesGlobales";


const Mapa = () => {
const TOKENMAPBOX=import.meta.env.VITE_API_TOKENMAPBOX
  return (
    <ReactMapGL
      initialViewState={{
        longitude: -69.9431113,
        latitude: 18.4533871,
        zoom: 11,
        bearing: 0,
        pitch: 0
      }}
      
      mapboxAccessToken= {TOKENMAPBOX}
      style={{ width: 'auto', height:'100vh', marginLeft: 0 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {POIs.map((p) => (
        <Marker
          key={p.name}
          latitude={p.latitude}
          longitude={p.longitude}
        //anchor="bottom"
        >
          <img
            src={cell}
            alt="pin"
            //height="40px" width="30px"
            style={{ height: "35px" }}
          />
          <Popup longitude={p.longitude} latitude={p.latitude}
            //anchor="bottom"
            closeButton={true}
            closeOnClick={false}
            anchor="top"
          >
            {p.name}
          </Popup>
        </Marker>
      ))}
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
    </ReactMapGL>
  );
};

export default Mapa;
