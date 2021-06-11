import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'Maps API Key',
    googleMapsApiKey: process.env.MAPS_API_KEY
  })

  return (
    <div>
      
    </div>
  );
}

export default Map;
