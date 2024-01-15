const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController.js');


router.get('/random', quotesController.getRandomQuote);
router.get('/id/:id', quotesController.getQuoteById);
router.get('/:limit', quotesController.getQuotesByLimit);




module.exports = router;