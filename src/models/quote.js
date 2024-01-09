const mongoose = require('mongoose'); 

const quoteSchema = new mongoose.Schema({
    author: String,
    quote: String,
    tags: [String]
});

const Quote = mongoose.model('Quote', quoteSchema);
console.log('Quote model created');

module.exports = Quote;