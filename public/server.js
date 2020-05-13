const express = require('express');
require('dotenv/config');

const app = express();

const { REACT_APP_PORT, REACT_APP_URL } = process.env;

app.use('/static', express.static(`${__dirname}/static`));
app.listen(REACT_APP_PORT, () => console.log(`Client ready on ${REACT_APP_URL}:${REACT_APP_PORT}`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
