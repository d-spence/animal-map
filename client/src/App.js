import React from 'react';
import Map from './components/Map';
import TopNav from './components/TopNav';
import InfoBar from './components/InfoBar';

function App() {
  return (
    <div className="flex flex-col justify-between w-full h-screen m-0 p-0 font-sans">
      <TopNav />
      <div className="flex w-full h-full">
        <Map />
        <InfoBar />
      </div>
    </div>
  );
}

export default App;
