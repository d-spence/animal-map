import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const Map = ({ center, zoom }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
  });

  useEffect(() => {
    console.log({isLoaded});
  }, [isLoaded])

  const getGeocoderInfo = (latLng) => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();

      const geoRequest = {
        location: latLng,
      }

      geocoder.geocode(geoRequest, (res) => {
        // console.log(res[0]);
        filterGeocoderData(res[0].address_components); // pass first array item as address component
      });
    } else {
      console.log('Function aborted, map is not loaded.');
      return;
    }
  }

  const filterGeocoderData = (addressComponent) => {
    // Takes a google.maps.GeocoderAddressComponent object as its addressComponent parameter
    const addressFilters = ['country', 'administrative_area_level_1'];
    let address = {};

    addressFilters.forEach(type => {
      address[type] = addressComponent.filter(component => {
        return component.types.includes(type);
      })[0];
    });

    console.log(`${address.administrative_area_level_1.long_name}, ${address.country.short_name}`);
    return address;
  }

  const handleMapClick = (e) => {
    // console.log(e.latLng);
    getGeocoderInfo(e.latLng);

    // console.log(window.google.maps);
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
