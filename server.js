const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

let latestResult = '';

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // za admin panel

app.post('/api/rezultat', (req, res) => {
    const { selectedWord } = req.body;
    console.log('Primljena riječ:', selectedWord);
    latestResult = selectedWord;
    res.status(200).json({ message: 'Primljeno!' });
});

app.post('/api/reset', (req, res) => {
    console.log('Resetiran rezultat.');
    latestResult = '';
    res.status(200).json({ message: 'Resetirano!' });
});

app.get('/api/rezultat', (req, res) => {
    res.json({ selectedWord: latestResult });
});

app.listen(port, () => {
    console.log(`Server radi na portu ${port}`);
});
