var express = require('express');
var app = express();
app.get('/login', function(req, res) {
    res.render(__dirname + '/views/paginaLogin/login.ejs');
});

app.get('/registrazione', function(req, res) {
  res.render(__dirname + '/views/paginaRegistrazione/registra.ejs');
});

app.get('/', function(req, res) {
  res.render(__dirname + '/views/paginaHome/home.ejs');
});


app.listen(8080);
console.log('SERVER AVVIATO!');