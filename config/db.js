const mongoose = require('mongoose');
const config = require('config');

const db = async () => {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
