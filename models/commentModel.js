const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  
    body: {
        type: String,
        required: true
        
    }, user: {
        type: Schema.Types.ObjectId,
        ref : "user"

    }, title: {
        type: Date,
        default : Date.now()

    }, commentIsApproved: {
        type: boolean,
        default: false
    },
    
});

module.exports = {comment: mongoose.model('comment', commentSchema )};