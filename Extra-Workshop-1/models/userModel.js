const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  name: { type: String },
  lastname: { type: String }
});

module.exports = mongoose.model('users', user);