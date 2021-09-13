// const logger = require('./logger');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const http = require("http");

// Set .env for heroku
require('dotenv').config({path: '.env'});
const port = process.env.PORT || 3000;
const portKing = process.env.PORTKING || 3000;

// Set body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Static files
app.use(express.static('public'));

// Templating engine engine
app.set('views', './fonte/views');
app.set('view engine', 'ejs')

// Routes
const lojaRotas = require('./fonte/rotas/loja');
app.use('/', lojaRotas);

// KingHost TEST
app.listen(portKing, () => {
    console.log('KingHost listening on port %s', portKing);
});
