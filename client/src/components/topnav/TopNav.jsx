import React from 'react';
import { useSelector } from 'react-redux';

const TopNav = () => {
  const location = useSelector((state) => state?.map?.currentLocation)
  // console.log(location);
  const locationString = (location.state || location.country)
    ? `${location.state.long_name}, ${location.country.short_name}`
    : 'Species Explorer';

  return (
    <nav className="bg-gray-400">
      <h1 className="text-xl md:text-2xl ml-3 my-2">
        <span className="text-gray-200 font-bold">Animal Map | </span>
        <span className="text-gray-500">{locationString}</span>
      </h1>
    </nav>
  );
}

export default TopNav;
