var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/images/footer_images'));
app.use(express.static('public/images/project_images'));
app.use(express.static('public/javascript'));


app.set('view engine','ejs');
app.set('views','./views');

var home = require('./home.js');
var contact = require('./contact.js');

app.use('/',home);
app.use('/contact',contact);

app.listen(8080);