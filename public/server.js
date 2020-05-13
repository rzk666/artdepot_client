const express = require('express');
require('dotenv/config');

const app = express();

const { PORT, REACT_APP_PORT, REACT_APP_URL } = process.env;
const APP_PORT = REACT_APP_PORT || PORT;
app.use('/static', express.static(`${__dirname}/static`));
app.listen(APP_PORT, () => console.log(`Client ready on ${REACT_APP_URL}:${APP_PORT}`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
