import React from 'react';

const ModalImage = ({ data }) => {
  const { imageUrl } = data;

  return (
    <div className="flex flex-col align-center w-full h-full">
      <img className="flex-1 object-contain w-full h-full" src={imageUrl} alt="animal"></img>
      <span className="text-gray-800 text-xs">
        Source: <a href={imageUrl} target="_blank" rel="noreferrer">{imageUrl}</a>
      </span>
    </div>
  );
}

export default ModalImage;
