// Utility functions

export const formatAnimalLocationsArray = (locations, maxLength=4) => {
  // Format an array of countries or states depending on it's length, returned as a string
  if (locations.length === 1) {
    return locations[0];
  } else if (locations.length === 2) {
    return `${locations[0]} and ${locations[1]}`;
  } else if (locations.length > 3) {
    let locationsString = '';

    for (let i = 0; i < locations.length; i++) {
      if (i === locations.length - 1 || i === maxLength - 1) {
        locationsString += `and ${locations[i]}`;
        break; // break if last item or maxLength is reached
      } else {
        locationsString += `${locations[i]}, `;
      }
    };

    return locationsString;
  }
}
