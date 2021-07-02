import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  hide
} from './sidebarSlice';
import {
  IoClose as CloseIcon,
  IoChevronBack as BackIcon,
} from 'react-icons/io5';
import { formatAnimalLocationsArray } from '../../app/utils';

const SideBarDetails = ({ details }) => {
  const dispatch = useDispatch();

  let countriesString, statesString, locationDesc;
  if (details) {
    countriesString = formatAnimalLocationsArray(details.countries);
    statesString = formatAnimalLocationsArray(details.states);

    locationDesc = `Can be found within ${countriesString} in the ${statesString} region${(details.states.length > 1) ? 's' : ''}.`
  }

  return (
    <>
      <header className="flex flex-row justify-between py-2">
        <div className="flex items-center text-xl hover:text-gray-500 cursor-pointer">
          <BackIcon />Back
        </div>
        <div className="flex items-center text-2xl hover:text-gray-500 cursor-pointer">
          <CloseIcon onClick={() => dispatch(hide())} />
        </div>
      </header>

      {!details
        ? <h2 className="text-center mt-4">No details found...</h2>
        : <div>
            <div className="flex flex-col justify-center bg-blue-200 border border-black rounded">
              <img className="border-b border-black rounded-t w-full max-h-72 object-cover cursor-pointer" src={details.imageUrl} alt="animal" />
              <h2 className="text-2xl font-bold text-center m-2">{details.name}</h2>
            </div>
            
            <h4 className="text-lg mt-2">Description</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non provident magnam unde corrupti hic beatae exercitationem est earum quia.</p>

            <h4 className="text-lg mt-2">Location</h4>
            <p>
              {locationDesc}
            </p>

            <h4 className="text-lg mt-4">Details</h4>
            <p>Common Name: {details.name}</p>
            <p>Species Name: {details.sciName}</p>
            <p>Weight: {details.weight} kg</p>
          </div>
      }
    </>
  );
}

export default SideBarDetails;
