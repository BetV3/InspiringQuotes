const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController.js');

console.log("inside quoteRoutes.js");
router.get('/', quotesController.getRandomQuote);

module.exports = router;