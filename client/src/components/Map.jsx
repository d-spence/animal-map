import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const Map = ({ center, zoom }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
  });

  const handleMapClick = (e) => {
    console.log(e);
    console.log(window.google);
  }

  const options = {
    mapId: '68772a9c3c544499'
  }

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        clickableIcons={true}
        center={center}
        zoom={zoom}
        options={options}
        onClick={handleMapClick}
        >
      </GoogleMap>
    );
  }

  if (loadError) {
    return <div>Map cannot be loaded right now.</div>;
  }

  return isLoaded ? renderMap() : <></>; // TODO: Add spinner component when loading
}

Map.defaultProps = {
  center: { 
    lat: 40.000,
    lng: -99.000
  },
  zoom: 4
}

export default Map;
