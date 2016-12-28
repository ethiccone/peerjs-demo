'use strict';

const path = require('path');
const express = require('express');
const hbs  = require('express-handlebars');

const routes = require('./routes');
const config = require('./config').server;

const app = express();
const server = require('http').createServer(app);



app.set('views', path.join(__dirname, '../frontend/views'));
app.use(express.static(path.join(__dirname, '../frontend')));
// setup view engine
app.engine('handlebars', hbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, '../frontend/views/layouts'),
  partialsDir: path.join(__dirname, '../frontend/views/partials')
}));
app.set('view engine', 'handlebars');

routes.root(app);
routes.peerjs(app, server);

server.listen(config.PORT, config.HOST);
console.log(`Server listening on ${ config.HOST }:${ config.PORT }`);