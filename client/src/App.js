import React from 'react';
import Map from './components/map/Map';
import TopNav from './components/topnav/TopNav';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="flex w-full h-screen m-0 p-0 font-sans">
      <div className="flex flex-col w-full h-full">
        <TopNav />
        <Map />
      </div>
      <SideBar />
    </div>
  );
}

export default App;
