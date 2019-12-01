const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountListSchema = new Schema({
    price: {
        type: String,
        required: true
    },
    category: String,
    description: String,
    date: {
        type: Number
    },
    payment: String,
    monthlyCheck: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true
    }
});

module.exports = mongoose.model('accountlist', accountListSchema)
