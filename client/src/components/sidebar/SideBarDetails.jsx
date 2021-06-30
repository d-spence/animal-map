import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  hide
} from './sidebarSlice';
import {
  IoClose as CloseIcon,
  IoChevronBack as BackIcon,
} from 'react-icons/io5';

const SideBarDetails = () => {
  const location = useSelector((state) => state.map.currentLocation);
  const dispatch = useDispatch();

  return (
    <>
      <header className="flex flex-row justify-between text-xl py-2">
        <div className="flex items-center hover:text-green-500 cursor-pointer">
          <BackIcon />Back
        </div>
        <div className="flex items-center hover:text-green-500 cursor-pointer">
          <CloseIcon onClick={() => dispatch(hide())} />
        </div>
      </header>

      <img className="rounded"
        src="https://www.wildlifeonline.me.uk/assets/ugc/gallery/fallow_buck_resting.jpg" alt="animal" 
      />

      <h2 className="text-xl mt-4">Fallow Deer</h2>
      
      <h4 className="text-lg mt-4">Description</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non provident magnam unde corrupti hic beatae exercitationem est earum quia.</p>

      <h4 className="text-lg mt-8">Details</h4>
      <p>Common Name: Fallow Deer</p>
      <p>Species Name: Cervus dama</p>
      <p>Weight: 80lbs</p>
      <p>Location: {location?.state?.long_name}, {location?.country?.long_name}</p>
    </>
  );
}

export default SideBarDetails;
