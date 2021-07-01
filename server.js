const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// Load env config
const config = dotenv.config({ path: './config/config.env' });
if (config.error) {
  throw config.error;
} else {
  console.log(`Config loaded!`.green);
  console.log(config.parsed);
}

// Import routes
const animals = require('./routes/animals');

// Initialize express app
const app = express();

// Express middleware
app.use(express.json());

// Use morgan if running in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Route paths
app.use('/api/v1/animals', animals);

// Load client app from build folder if running in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// Start express
const PORT = process.env.PORT || 5001;

app.listen(PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);