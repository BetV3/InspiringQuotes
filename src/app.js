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

app.use('/api/', quotesRoutes);


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});