'use strict';

const fs = require('fs');
const path = require('path');
const ExpressPeerServer = require('peer').ExpressPeerServer;

module.exports = (app, server) => {
  app.use('/peerjs', ExpressPeerServer(server, {
    ssl: {
      key: fs.readFileSync(path.join(__dirname, '../ssl/pjsdemo.key')),
      cert: fs.readFileSync(path.join(__dirname, '../ssl/pjsdemo.crt'))
    }
  }));
};