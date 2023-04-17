const express = require('express');
const cors = require('cors');
const serveIndex = require('serve-index');

const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send({
        token: 'test123'
    });
});

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});

app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));