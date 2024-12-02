const express = require('express');
const posts = require('./data');
const app = express();
const port = 3000;

// Asset Statico per le immagini
app.use(express.static('public'));

// Rotta '/'
app.get('/', (req, res) => {
    res.json('Server del mio blog');
})

// Rotta '/bacheca' per i post
app.get('/bacheca', (req,res) => {
    const result = {
        posts,
        totale : posts.length
    }

    res.json(result);
})

app.listen(port, () => {
    console.log('Server is listening');
})