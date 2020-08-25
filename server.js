// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 


app.get('/login', function(req, res) {
 
    res.render('paginaLogin/login.ejs');
    

});

app.get('/registrazione', function(req, res) {
  res.render('paginaRegistrazione/registra.ejs');
 
});



app.listen(8080);
console.log('bene');