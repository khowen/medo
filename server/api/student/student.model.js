'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var StudentSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  user: { type: mongoose.Schema.ObjectId, ref: 'user' }
});

export default mongoose.model('Student', StudentSchema);
