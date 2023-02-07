const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    
    title: {
        type: String,
        required: true
    },

    
});

module.exports = {category: mongoose.model('category', categorySchema )};