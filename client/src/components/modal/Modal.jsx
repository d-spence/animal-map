import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IoClose as CloseIcon,
} from 'react-icons/io5';
import { hide, setStrictClose } from './modalSlice';
import ModalImage from './ModalImage';
import ModalAddAnimal from './ModalAddAnimal';

const Modal = () => {
  const { hidden, strictClose, type, data } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  let modalContent = null;
  switch (type) {
    case 'image':
      modalContent = <ModalImage data={data} />; break;
    case 'addAnimal':
      modalContent = <ModalAddAnimal data={data} />; break;
    default: 
      modalContent = <ModalAddAnimal data={data} />;
  }

  const handleModalClose = (wasClosedStrictly) => {
    if (!strictClose) {
      dispatch(hide());
    } else if (strictClose && wasClosedStrictly) {
      dispatch(hide());
      dispatch(setStrictClose(false));
    }
  }

  return (
    <>
      {!hidden &&
        <div className="fixed h-screen w-screen flex items-center justify-center top-0 left-0 z-20">
          {/* Overlay */}
          <div
            className="fixed h-full w-full bg-black opacity-50 z-30"
            onClick={() => handleModalClose(false)}
          ></div>

          {/* Content Section */}
          <div className="relative h-3/4 w-full max-w-screen-lg bg-gray-50 rounded mx-10 z-40">
            <header className="absolute top-1 right-3 flex justify-end">
              <CloseIcon 
                className="text-2xl hover:text-gray-500 cursor-pointer"
                onClick={() => handleModalClose(true)}
              />
            </header>

            {modalContent}
          </div>
        </div>
      }
    </>
  );
}

export default Modal;
