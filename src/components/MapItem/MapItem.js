import React, { Component, useEffect, useState } from "react";
import { Map, Marker } from "google-maps-react";

const MapItem = ({ coordinates }) => {
  const mapStyles = {
    width: "130px",
    height: "130px",
  };
  const renderMap = (coordinates) => {
    return (
      <Map
        google={google}
        style={mapStyles}
        zoom={12}
        initialCenter={{ lat: coordinates?.lat, lng: coordinates?.lng }}
      >
        <Marker position={{ lat: coordinates?.lat, lng: coordinates?.lng }} />
      </Map>
    );
  };
  
  console.log(coordinates);
  return renderMap(coordinates);
};

export default MapItem;