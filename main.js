var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/images/footer_images'));
app.use(express.static('public/images/project_images'));
app.use(express.static('public/javascript'));


app.set('view engine','ejs');
app.set('views','./views');

app.get('/',function(req,res){
    res.render('home');
});


app.get('/contact',function(req,res){
    res.render('contact',{
        name: "Aadhil Node",
        rollNumber: "210101"  
    });
});

app.listen(8080);