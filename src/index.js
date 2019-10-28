const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(3000);