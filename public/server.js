const express = require('express');
require('dotenv/config');
const app = express();

const { PORT, APP_URL } = process.env;
app.get('/', (req, res ) => {
    res.sendFile('./index.html');
});

app.listen(PORT, () => `Client ready on port ${APP_URL}:${PORT}`);