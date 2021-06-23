import React from 'react';

const InfoBar = () => {
  return (
    <aside className="w-1/2 bg-green-50 p-4">
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
      <p>Location: Texas, US</p>
    </aside>
  );
}

export default InfoBar;
