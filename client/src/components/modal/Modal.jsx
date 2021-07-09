import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IoClose as CloseIcon,
} from 'react-icons/io5';
import { hide, setStrictClose } from './modalSlice';
import ModalImage from './ModalImage';

const Modal = () => {
  const { hidden, strictClose, type, data } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  let modalContent = null;
  switch (type) {
    case 'image':
      modalContent = <ModalImage data={data} />; break;
    default: 
      modalContent = <ModalImage data={data} />;
  }

  const handleModalClose = (wasClosedStrictly) => {
    if (!strictClose) {
      console.log('closed modal')
      dispatch(hide());
    } else if (strictClose && wasClosedStrictly) {
      console.log('closed modal strictly')
      dispatch(hide());
      dispatch(setStrictClose(false));
    }
  }

  return (
    <>
      {!hidden &&
        <div className="fixed h-screen w-screen flex items-center justify-center top-0 left-0 z-20">
          <div
            className="fixed h-full w-full bg-black opacity-50 z-30"
            onClick={() => handleModalClose(false)}
          ></div>

          <div className="relative h-3/4 w-full bg-gray-50 rounded mx-10 z-40">
            <header className="absolute top-0 right-0 flex justify-end">
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
