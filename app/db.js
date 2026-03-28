const mongoose = require('mongoose');

const url = 'mongodb://mongodb:27017/sharkinfo';

mongoose.connect(url)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
