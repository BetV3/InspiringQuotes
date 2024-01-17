const Quote = require('../models/quote');



const getRandomQuote = async (req, res) => {
    // logic to get random quote from the database
    // handles the /random route
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
    // function for the /id/:id route
    try {
        const quote = await Quote.findOne({ id: req.params.id}, {_id: 0, __v: 0} );
        if (!quote) {
            return res.status(404).send('No quote found');
        }
        res.json(quote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const getQuotesByLimit = async (req, res) => {
    // handles the /:limit route
    try {
        console.log("Inside the getQuotesByLimit function")
        const quotes = await Quote.find({}, {_id: 0, __v: 0}).limit(parseInt(req.params.limit));
        if (!quotes) {
            return res.status(404).send('No quote found');
        }
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const search = async (req, res) => {
    // handles the /search route
    try {
        if (req.query.quote) {
            await getQuotesByString(req, res);
            return;
        } else if (req.query.author) {
            await getQuotesByAuthor(req, res);
            return;
        }
        res.status(404).send('Invalid search query. Please search by quote or author');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getQuotesByString = async (req, res) => {
    try {
        const quotes = await Quote.find({quote: new RegExp(req.query.quote, 'i')}, {_id: 0, __v: 0});
        if (!quotes) {
            return res.status(404).send('No quote found');
        }
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const getQuotesByAuthor = async (req, res) => {
    try {
        const quotes = await Quote.find({author: new RegExp(req.query.author, 'i')}, {_id: 0, __v: 0});
        if (!quotes) {
            return res.status(404).send('No quote found under that author');
        }
        res.json(quotes);
        } catch (err) {
            res.status(500).json({ message: err.message});
        }
    }
module.exports = {
    getRandomQuote,
    getQuoteById,
    getQuotesByLimit,
    search,
};