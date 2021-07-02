import React from 'react';
import Map from './components/map/Map';
import TopNav from './components/topnav/TopNav';
import SideBar from './components/sidebar/SideBar';

function App() {
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
