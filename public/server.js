const express = require('express');
require('dotenv/config');

const app = express();

const { PORT, APP_URL } = process.env;

app.use('/static', express.static(`${__dirname}/static`));
app.listen(PORT, () => console.log(`Client ready on ${APP_URL}:${PORT}`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
