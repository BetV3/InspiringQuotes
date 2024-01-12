const mongoose = require('mongoose'); 

const quoteSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        default: 'Unknown',
    },
    quote: {
        type: String,
        required: true
    },
    tags: [String],
    id: {
        type: Number,
        required: true,
        unique: true,
        index: true
    }
});
quoteSchema.set('timestamps', true);

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;