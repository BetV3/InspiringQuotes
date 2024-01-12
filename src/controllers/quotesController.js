const Quote = require('../models/quote');


const getRandomQuote = async (req, res) => {
    // logic to get random quote from the database
    try {
        const randomQuoteAggregate = await Quote.aggregate([
            { $sample: { size: 1 }}, 
            { $project: { _id: 0, __v: 0 }} ]);
        const randomQuote = randomQuoteAggregate[0];
        if (!randomQuote) {
            return res.status(404).send('No quote found');
        }
        res.json(randomQuote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const getQuoteById = async (req, res) => {
    // logic to get quote by id from the database
    try {
        const quote = await Quote.findOne({ id: req.params.id });
        if (!quote) {
            return res.status(404).send('No quote found');
        }
        res.json(quote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getRandomQuote,
    getQuoteById,
};