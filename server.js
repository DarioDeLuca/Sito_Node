
var express = require('express');
var app = express();

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))


app.set('views','./views')
app.set('view engine','ejs')


app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/registrazione', function(req, res) {
  res.render('registra');
});

app.get('/', function(req, res) {
  res.render('home');
});


app.listen(8080);
console.log('SERVER AVVIATO!');