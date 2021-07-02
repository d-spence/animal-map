# Animal Map - Notes

## Short Description

Animal Map is an app designed to show details about various animal species based on geographic location. The user can select a location by clicking on the map and details will be displayed in the sidebar. For instance, if a user clicks on California, US, they might see an image and description of a Mountain Lion with links to other animals in that region.

## Long Description

The app uses React and Redux for it's front-end framework and state management. The main interface element is provided via google maps API, with hooks from the @react-google-maps/api package. The map uses custom styling to present a clean, uncluttered view down to the state/province level.

Clicking on the map will return latitude/longitude coordinates, which is sent to the google maps geocoder service. This returns a precise address of the click location, but only the country and state are needed.

## Planned Features

- Interactive map
- Sidebar info display
    - Animal image
    - Description
    - Details (Scientific name, weight/height, lifespan, etc.)
    - Links to other animals in the region
- MongoDB for animal details storage/retrieval

## Possible Features

- Search bar
- Ability to add/edit animals
    - Interface for submitting new animals
    - Possibly require user login to submit
- User login/registration
- Highlight map location on click
- Expand animal image on click