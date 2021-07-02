import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { setLocation } from './mapSlice';
import { show } from '../sidebar/sidebarSlice';

const Map = ({ center, zoom }) => {
  const dispatch = useDispatch();
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
  });

  const getGeocoderData = async (latLng) => {
    let locationData = {};

    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      const geoRequest = {
        location: latLng,
      }

      await geocoder.geocode(geoRequest, (results, status) => {
        if (status === 'OK') {
          if (results.length > 0) {
            locationData = filterGeocoderData(results[0].address_components); // pass first array item as address component
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert(`Geocoder failed due to: ${status}`);
        }
      });
    } else {
      console.log('Cannot get geocoder data, map is not loaded.');
    }

    console.log(`${locationData?.state?.long_name || ''}, ${locationData?.country?.short_name || ''}`);
    return locationData;
  }

  const filterGeocoderData = (addressComponents) => {
    // Takes a google.maps.GeocoderAddressComponent object as its addressComponents parameter
    const addressFilters = ['country', 'administrative_area_level_1'];
    const addressType = ['country', 'state']; // the returned object will use these as keys
    let locationData = {};

    addressFilters.forEach((type, i) => {
      locationData[addressType[i]] = addressComponents.filter(component => {
        return component.types.includes(type);
      })[0];
    });

    // console.log(locationData);
    return locationData;
  }

  const handleMapClick = (e) => {
    // console.log(window.google.maps);
    const locationPromise = getGeocoderData(e.latLng);
    locationPromise.then(locationData => {
      dispatch(setLocation(locationData));
      dispatch(show()); // show the sidebar if hidden
    });
  }

  const initMap = () => {
    const options = {
      mapId: '68772a9c3c544499',
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: true,
      // zoomControlOptions: {
      //   position: window.google.maps.ControlPosition.TOP_LEFT,
      // }
    }

    const containerStyle = {
      width: '100%',
      height: '100%'
    };

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

  return isLoaded ? initMap() : <></>; // TODO: Add spinner component when loading
}

Map.defaultProps = {
  center: { 
    lat: 40.000,
    lng: -99.000
  },
  zoom: 4
}

export default Map;
