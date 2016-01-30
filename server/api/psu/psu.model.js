'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PsuSchema = new mongoose.Schema({
  dni: String,
  name: {
    first_name: String,
    last_name: String
  },
  gender: String,
  score: [{
    year: Number,
    scores: [{
      id: String,
      name: String,
      value: Number
    }]
  }],
  active: Boolean
});

export default mongoose.model('Psu', PsuSchema);
