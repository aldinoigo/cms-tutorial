const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passowrd: {
        type: String,
        required: true
    },

  
});

module.exports = {user: mongoose.model('user', userSchema )};