const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const quotesRoutes = require('./routes/quoteRoutes');
const connectDB = require('./config/db');
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.get('/v1/quotes', (req, res) => {
    res.json([
        { author: 'Author 1', quote: 'Quote 1', tags: 'tag1' },
        { author: 'Author 2', quote: 'Quote 2', tags: 'tag2' },
    ]);
});
app.use('/api/', quotesRoutes);


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});