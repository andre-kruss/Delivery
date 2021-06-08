const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Set .env for heroku
require('dotenv').config({path: '.env'});
const port = process.env.PORT || 3000;

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

// Umbler TEST
app.listen(port, () => {
    console.log('Umbler listening on port %s', port);
});