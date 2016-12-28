'use strict';

const path = require('path');

module.exports = (app) => {
  app
    .route('/')
    .get((req, res) => {
      res.render('peerjs');
    });
};