const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController.js');

// quotes listing will match first route and go to the callback function
router.get('/random', quotesController.getRandomQuote);
router.get('/id/:id', quotesController.getQuoteById);
router.get('/search', quotesController.search);
router.get('/:limit', quotesController.getQuotesByLimit);

module.exports = router;