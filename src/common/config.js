module.exports = {
  app: {
    port       : process.env.PORT,
    env        : process.env.NODE_ENV,
    url        : process.env.URL,
    cdn        : process.env.CDN
  },
  server: {
    host    : process.env.SERVER_HOST,
    protocol: process.env.SERVER_PROTOCOL,
  },
  api: {
    endpoint: process.env.API_ENDPOINT,
    url     : `${process.env.SERVER_PROTOCOL}://${process.env.SERVER_HOST}/${process.env.API_ENDPOINT}`,
  },
  credentials: {
  },
};
