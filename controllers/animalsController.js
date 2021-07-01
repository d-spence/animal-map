
const testData = [
  {
    countries: ['United States'],
    states: ['Texas', 'New Mexico'],
    name: 'Fallow Deer',
    sciName: 'Cervus dama',
    weight: 40,
    height: 1.4,
    length: 2,
    lifespan: 14,
    imageUrl: 'https://www.wildlifeonline.me.uk/assets/ugc/gallery/fallow_buck_resting.jpg'
  },
  {
    countries: ['United States', 'Canada'],
    states: ['California', 'Nevada', 'Oregon', 'Washington'],
    name: 'Mountain Lion',
    sciName: 'Puma concolor',
    weight: 68,
    height: 0.75,
    length: 2.4,
    lifespan: 14,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Torres_del_Paine_puma_JF2.jpg/1024px-Torres_del_Paine_puma_JF2.jpg'
  },
];

// @ desc   Get filtered list of animals based on req body
// @route   GET /api/v1/animals
// @access  Public
exports.getAnimals = async (req, res, next) => {
  let animalsByState = [];
  let animalsByCountry = [];

  try {
    // attempt to get all animals who match the req state name
    if (req.query.state) {
      animalsByState = testData.filter(item => (
        item.states.some(name => (
          name.toLowerCase() === req.query.state.toLowerCase()
        ))
      ));

      // also get animals by country name if no results for state
      if (animalsByState.length < 1) {
        animalsByCountry = testData.filter(item => (
          item.countries.some(name => (
            name.toLowerCase() === req.query.country.toLowerCase()
          ))
        ));
      }
    }

    return res.status(200).json({
      success: true,
      count: animalsByCountry.length + animalsByState.length,
      data: {
        animalsByCountry,
        animalsByState
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: `Server Error: Could not load animals: ${err}`
    });
  }
}

// @ desc   Add an animal to the database
// @route   PUT /api/v1/animals
// @access  Public
exports.addAnimal = async (req, res, next) => {
  return res.status(200).json({
    success: false,
    error: 'NOT IMPLEMENTED: addAnimal'
  });
}