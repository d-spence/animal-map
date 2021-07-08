import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IoChevronBack as BackIcon,
} from 'react-icons/io5';
import { show } from './sidebarSlice';
import { useGetAnimalsQuery } from '../../app/animalMapApiSlice';
import SideBarDetails from './SideBarDetails';

const SideBar = () => {
  const hidden = useSelector((state) => state.sidebar.hidden);
  const dispatch = useDispatch();

  // Retrieve the currentLocation from state and query the API whenever it changes
  const animalQueryData = {
    country: useSelector((state) => state?.map?.currentLocation?.country?.long_name) || 'United States',
    state: useSelector((state) => state?.map?.currentLocation?.state?.long_name) || 'Texas'
  }
  const { data, error, isLoading, isFetching } = useGetAnimalsQuery(animalQueryData);

  const getAnimalDetails = (data) => {
    // Use the first item from the animalsByState array if there is one, else use the first from animalsByCountry
    if (data.animalsByState.length > 0) {
      return data.animalsByState;
    } else if (data.animalsByCountry.length > 0) {
      return data.animalsByCountry;
    }
  }

  let animalDetailsArr = [];
  if (!isFetching) {
    animalDetailsArr = getAnimalDetails(data.data) || null;
    console.log(animalDetailsArr);
  } else if (error) {
    console.log(error);
  }

  return (
    <>
    {hidden
      ? <aside 
          className="flex items-center top-0 right-0 bg-gray-50 hover:bg-gray-200 hover:text-gray-500 cursor-pointer"
          onClick={() => dispatch(show())}
        >
          <BackIcon className="text-lg m-0 p-0"/>
        </aside>
      : <aside className="w-1/2 h-screen bg-gray-50 px-4">
          {isLoading
            ? <h2>Loading...</h2>
            : <SideBarDetails detailsArr={animalDetailsArr} />
          }
        </aside>
    }
    </>
  );
}

export default SideBar;
