// server.js
// load the things we need
var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/paginaHome'))
app.use(express.static(__dirname + '/views/paginaLogin'))
app.use(express.static(__dirname + '/views/paginaRegistrazione'))
// use res.render to load up an ejs view file

// index page 



app.get('/login', function(req, res) {
<<<<<<< HEAD
 
    res.render('paginaLogin/login.ejs');
    

=======
    res.render(__dirname + '/views/paginaLogin/login');
>>>>>>> 5d007366b284526671238697182bac9ea5df25a1
});

app.get('/registrazione', function(req, res) {
  res.render('paginaRegistrazione/registra.ejs');
 
});

app.get('/', function(req, res) {
  res.render(__dirname + '/views/paginaHome/home');
});



app.listen(8080);
console.log('SERVER AVVIATO!');