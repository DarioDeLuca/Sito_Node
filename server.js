
var express = require('express');
var app = express();
<<<<<<< HEAD




// use res.render to load up an ejs view file

// index page 


app.get('/login', function(req, res) {
 
    res.render('paginaLogin/login.ejs');
    

});

app.get('/registrazione', function(req, res) {
  res.render('paginaRegistrazione/registra.ejs');
 
});

=======
app.get('/login', function(req, res) {
    res.render(__dirname + '/views/paginaLogin/login.ejs');
});

app.get('/registrazione', function(req, res) {
  res.render(__dirname + '/views/paginaRegistrazione/registra.ejs');
});

app.get('/', function(req, res) {
  res.render(__dirname + '/views/paginaHome/home.ejs');
});
>>>>>>> ad94189ad8541d94a28b0822a7cf00a2185555f5


app.listen(8080);
console.log('bene');