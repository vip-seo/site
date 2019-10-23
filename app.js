var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function (req, res) {
    res.render('index', {title: 'Главня страница'});
  });

app.get('/about', function (req, res) {
    res.render('about', {title: 'О нас'});
  });

 app.get('/contact', function (req, res) {
    res.render('contact', {title: 'Наши контакты'});
  });

 app.listen(3000, function(){
    console.log('app at http://localhost:3000');
  });