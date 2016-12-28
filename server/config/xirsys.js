'use strict';

const config = {
  CREDENTIALS: {
    ident: process.env.XIRSYS_IDENT || 'ethiccone',
    secret: process.env.XIRSYS_SECRET || '7e503b0a-cce1-11e6-8084-9bedfe5ede71',
    domain: process.env.XIRSYS_DOMAIN || 'peerjsdemo',
    application: process.env.XIRSYS_APP || 'peerjsdemo',
    room: process.env.XIRSYS_ROOM || 'peerjsdemo',
    secure: process.env.XIRSYS_SECURE || '1'
  },
  OPTIONS: {
    host: process.env.XIRSYS_HOST || 'service.xirsys.com',
    port: process.env.XIRSYS_PORT || 443,
    path: process.env.XIRSYS_PATH || '/ice',
    method: process.env.XIRSYS_METHOD || 'GET',
    headers: {
      'Content-Type': process.env.XIRSYS_CONTENT_TYPE || 'application/json'
    }
  }
};

config.CREDENTIALS_STR = JSON.stringify(config.CREDENTIALS);
config.OPTIONS.headers['Content-Length'] = config.CREDENTIALS_STR.length;

module.exports = config;