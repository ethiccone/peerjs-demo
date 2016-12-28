'use strict';

const https = require('https');
const Promise = require('bluebird');

const config = require('../config').xirsys;

module.exports = () => {
  return new Promise((resolve, reject) => {
    https
      .request(config.OPTIONS, (xsRes) => {
        var str = '';
        xsRes.on('data', (data) => str += data);
        xsRes.on('error', reject);
        xsRes.on('end', () => {
          try {
            resolve(JSON.parse(str));
          } catch (err) {
            reject(err);
          }
        });
      })
      .write(config.CREDENTIALS_STR);
  });
};