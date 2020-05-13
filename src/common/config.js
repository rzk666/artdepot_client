module.exports = {
  app: {
    port: process.env.REACT_APP_PORT,
    env: process.env.NODE_ENV,
    url: process.env.REACT_APP_URL,
    cdn: process.env.REACT_APP_CDN,
  },
  server: {
    host: process.env.REACT_APP_SERVER_HOST,
    protocol: process.env.REACT_APP_SERVER_PROTOCOL,
  },
  api: {
    endpoint: process.env.REACT_APP_API_ENDPOINT,
    url: `${process.env.REACT_APP_SERVER_PROTOCOL}://${process.env.REACT_APP_SERVER_HOST}/${process.env.REACT_APP_API_ENDPOINT}`,
    admin: `${process.env.REACT_APP_SERVER_PROTOCOL}://${process.env.REACT_APP_SERVER_HOST}/${process.env.REACT_APP_API_ENDPOINT}/admin`,
  },
  credentials: {
  },
};
