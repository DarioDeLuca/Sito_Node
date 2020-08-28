const express = require('express')
const app = express()

const mysql = require('mysql')
const { query } = require('express')

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb",
  multipleStatements: true
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the DB!");
})

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))


app.set('views','./views')
app.set('view engine','ejs')


app.get('/login', function(req, res) {
    res.render('login');
})

app.get('/registrazione', function(req, res) {
  res.render('registra');
})

app.get('/', function(req, res) {
  res.render('home');
})


app.listen(8080);
console.log('SERVER AVVIATO!')

con.connect(function(err) {
  if (err) throw err
  con.query(sql, function (err, result) {
    if (err) throw err
  })
})

app.get('/reg',(req,res)=>{
  qry=`INSERT INTO mydb VALUES (${con.escape(user)},${con.escape(password)})`
  if (err) throw err
  con.query(qry, function (err, result) {
    if (err) {throw err;console.log('errore nel salvataggio')}
  })
})
