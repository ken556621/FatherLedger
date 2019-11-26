const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountListSchema = new Schema({
    price: {
        type: String,
        required: true
    },
    category: String,
    description: String,
    date: String,
    payment: String,
    monthlyCheck:{
        type: Boolean,
        default: false  
    }    
});

module.exports = mongoose.model('accountlist', accountListSchema)
