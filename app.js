var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Главня страница'
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        title: 'О нас'
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'Наши контакты'
    });
});

app.post('/send', function (req, res) {

    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'imtjs44@gmail.com',
            pass: 'l;fdfcrhbgn78'
        }
    });

    var mailOptions = {
        from: req.body.email,
        to: 'csat.vip@gmail.com',
        subject: 'Письмо с сайта от ' + req.body.name,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send(error);
        } else {
            res.render('send', {
                title: 'Письмо отправлено'
            });
        }
    });

});

app.listen(3000, function () {
    console.log('app at http://localhost:3000');
});