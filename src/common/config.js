const APP_PORT = process.env.REACT_APP_PORT || process.env.PORT;
const APP_URL = process.env.REACT_APP_URL
|| (process.env.REACT_APP_ENV === 'staging'
  ? 'creative-hands.co.il'
  : 'staging.creative-hands.co.il');
const APP_CDN = process.env.REACT_APP_CDN || 'cdn.address.com';

const SERVER_PROTOCOL = process.env.REACT_APP_SERVER_PROTOCOL || 'http';
const SERVER_HOST = process.env.REACT_APP_SERVER_HOST
|| (process.env.NODE_ENV === 'staging'
  ? 'server.creative-hands.co.il'
  : 'staging.server.creative-hands.co.il');
const API_ENDPOINT = 'api';

module.exports = {
  app: {
    port: APP_PORT,
    env: process.env.NODE_ENV,
    url: APP_URL,
    cdn: APP_CDN,
  },
  server: {
    host: SERVER_HOST,
    protocol: SERVER_PROTOCOL,
  },
  api: {
    endpoint: API_ENDPOINT,
    url: `${SERVER_PROTOCOL}://${SERVER_HOST}/${API_ENDPOINT}`,
    admin: `${SERVER_PROTOCOL}://${SERVER_HOST}/${API_ENDPOINT}/admin`,
  },
  credentials: {
  },
};
