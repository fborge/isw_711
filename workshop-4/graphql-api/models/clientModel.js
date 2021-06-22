const mongoose=require('mongoose')
const Schema = mongoose.Schema;

const client = new Schema({
    name:{type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String },
    website: { type: String }
})

module.exports = mongoose.model('clients', client);
