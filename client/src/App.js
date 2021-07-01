import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Map from './components/map/Map';
import TopNav from './components/topnav/TopNav';
import SideBar from './components/sidebar/SideBar';
import { useGetAnimalsQuery } from './app/animalMapApiSlice';

function App() {
  const animalQueryData = {
    country: useSelector((state) => state?.map?.currentLocation?.country?.long_name) || '',
    state: useSelector((state) => state?.map?.currentLocation?.state?.long_name) || ''
  }
  const { data, error, isLoading } = useGetAnimalsQuery(animalQueryData);

  return (
    <div className="flex flex-col justify-between w-full h-screen m-0 p-0 font-sans">
      <TopNav />
      <div className="flex w-full h-full">
        <Map />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
