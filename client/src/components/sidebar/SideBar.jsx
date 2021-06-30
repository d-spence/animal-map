import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IoChevronBack as BackIcon,
} from 'react-icons/io5';
import { show } from './sidebarSlice';
import SideBarDetails from './SideBarDetails';



const SideBar = () => {
  const hidden = useSelector((state) => state.sidebar.hidden);
  const dispatch = useDispatch();

  return (
    <>
    {hidden
      ? <aside 
          className="flex items-center top-0 right-0 bg-gray-50 hover:bg-green-200 hover:text-green-500 cursor-pointer"
          onClick={() => dispatch(show())}
        >
          <BackIcon className="text-lg m-0 p-0"/>
        </aside>
      : <aside className="w-1/2 bg-gray-50 px-4">
          <SideBarDetails />
        </aside>
    }
    </>
  );
}

export default SideBar;
