const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ReviewSchema = new Schema({
    address1:{
        type: String,
        required: true
    },
    address2:{
        type: String
    },
    province:{
        type: String,
        required: true
    },
    pcode:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = Review = mongoose.model('review', ReviewSchema);