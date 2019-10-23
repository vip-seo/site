var express = require('express');
var bodyParser = require('body-parser');
var courses = require('./data/courses.json');
var app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));