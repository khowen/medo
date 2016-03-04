'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var StudentSchema = new mongoose.Schema({
  studentName: {type: String, required: true},
  parentName: String,
  address: String,
  phoneNumber: String,
  email: String,
  lessonDay: String,
  lessonTime: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'user' }
});

export default mongoose.model('Student', StudentSchema);
