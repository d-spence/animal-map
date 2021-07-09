import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IoClose as CloseIcon,
  IoChevronBack as BackIcon,
  IoChevronForward as ForwardIcon,
} from 'react-icons/io5';
import { formatAnimalLocationsArray } from '../../app/utils';
import { hide } from './sidebarSlice';
import { 
  show as showModal,
  setType as setModalType,
  setData as setModalData
} from '../modal/modalSlice';

const SideBarDetails = ({ detailsArr }) => {
  // const [details, setDetails] = useState({});
  const [detailsIndex, setDetailsIndex] = useState(0);
  const dispatch = useDispatch();

  // Tailwind styles for next and back buttons
  const changeDetailsBtnEnabled = "flex items-center text-xl hover:text-gray-500 mr-2 cursor-pointer";
  const changeDetailsBtnDisabled = "flex items-center text-xl text-gray-300 mr-2 cursor-default";

  let details = {};
  let countriesString, statesString, locationDesc;
  if (detailsArr[detailsIndex]) {
    details = detailsArr[detailsIndex];
    // console.log(details);

    countriesString = formatAnimalLocationsArray(details.countries);
    statesString = formatAnimalLocationsArray(details.states);

    locationDesc = (
      `Can be found ${(countriesString) ? `within ${countriesString}` : ''}` +
      ` in the ${(statesString) ?  statesString : 'nearby'} region${(details.states.length > 1) ? 's' : ''}.`
    );
  }

  const handleChangeDetails = (next) => {
    if (next + detailsIndex >= 0 && next + detailsIndex < detailsArr.length ) {
      setDetailsIndex(detailsIndex + next);
    } else {
      return;
    }
  }

  const handleImageClick = () => {
    dispatch(setModalType('image'));
    dispatch(setModalData({ imageUrl: details.imageUrl }));
    dispatch(showModal());
  }

  return (
    <>
      <header className="flex flex-row justify-between py-2">
        <span>{detailsIndex + 1}/{detailsArr.length}</span>

        <div className="flex">
          <div
            className={(detailsIndex <= 0) ? changeDetailsBtnDisabled : changeDetailsBtnEnabled}
            onClick={() => handleChangeDetails(-1)}
          >
            <BackIcon />Back
          </div>
          <div 
            className={(detailsIndex >= detailsArr.length - 1) ? changeDetailsBtnDisabled : changeDetailsBtnEnabled}
            onClick={() => handleChangeDetails(1)}
          >
            Next<ForwardIcon />
          </div>
        </div>
        
        <div className="flex items-center text-2xl hover:text-gray-500 cursor-pointer">
          <CloseIcon onClick={() => dispatch(hide())} />
        </div>
      </header>

      {!details.name
        ? <h2 className="text-center mt-4">No details found...</h2>
        : <div>
            <div className="flex flex-col justify-center bg-blue-200 border border-black rounded">
              <img 
                className="border-b border-black rounded-t w-full max-h-72 object-cover cursor-pointer"
                src={details.imageUrl}
                alt="animal"
                onClick={handleImageClick}
              />
              <h2 className="text-2xl font-bold text-center m-2">{details.name}</h2>
            </div>
            
            <h4 className="text-lg mt-2">Description</h4>
            <p>{details.desc}</p>

            <h4 className="text-lg mt-2">Location</h4>
            <p>
              {locationDesc}
            </p>

            <h4 className="text-lg mt-4">Details</h4>
            <p>Species Name: {details.sciName}</p>
            <p>Weight: {details.weight} kgs</p>
            <p>Lifespan: {details.lifespan} yrs</p>
          </div>
      }
    </>
  );
}

export default SideBarDetails;
