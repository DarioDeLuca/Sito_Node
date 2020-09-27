const express = require('express')
const app = express()
const mysql = require('mysql')
const crypto = require ('crypto') //serve per l'hash
const url= require ('url')


const salt="hdhbvndjvlelabjla dduhebvlbnvòf zvui plgbu48rphu334icdr 43jvqr"//viene concatenata alla password

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pippoplut0",
  database: "utenti",
  multipleStatements: true
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



app.post('/reg',(req,res)=>{
  const user = url.parse(req.url, true).query.user
  const password= url.parse(req.url, true).query.password
  const hash = crypto.createHash('md5').update(password+salt).digest("hex")
  const qry=`INSERT INTO elenco_utenti (utente, pwd) VALUES (${con.escape(user)},${con.escape(hash)})`
    con.query(qry, function (err, result) {
      if (err) {throw err; res.send({status : 800})}
      else{res.send({status : 200})}
    })
  })

 const middleware = function(req,res,next) {
  const user = url.parse(req.url, true).query.user 
  const qry=`SELECT * FROM elenco_utenti WHERE utente= ${con.escape(user)}}`
  con.query(qry, function (err, result) {
      if (err) {throw err;console.log('errore nel salvataggio')}  
  if (result.length()===0){
  	next()
  }
  else{res.send({status:700})}	 		
 }

app.get('/val',middleware,(req,res)=>{
  const user = url.parse(req.url, true).query.user //scrivere nell'url ?user= valore & password=valore


app.get('/val',(req,res)=>{
<<<<<<< HEAD
  const user = url.parse(req.url, true).query.user 
=======
  const user = url.parse(req.url, true).query.user //scrivere nell'url ?user=valore & password=valore
>>>>>>> ca092caad827dcc77cc85cccfa86d9e189501326
>>>>>>> e1ad7642b33b08cba1e45998318f893f7c730ac1
  const password= url.parse(req.url, true).query.password
  const hash = crypto.createHash('md5').update(password+salt).digest("hex")
  const qry=`SELECT * FROM elenco_utenti WHERE utente= ${con.escape(user)} AND pwd=${con.escape(hash)}`
  con.query(qry, function (err, result) {
<<<<<<< HEAD
    if (err) {throw err;console.log('errore nel salvataggio')}
    if (result.length<1) {res.send({statusCode: 800}); console.log('error')}
    else {res.send({status : 200});console.log('login')}
    console.log(res.json())
=======
      if (err) {throw err;console.log('errore nel salvataggio')}
    console.log(result)
    if (result.length>0) {console.log("login")}
    else {res.send({status : 800})}
    /*QUANDO SI RICEVE STATUS CODE 800, RESTARE SULLA PAGINA MANDANDO L'ALLERT USER O PASSWORD ERRATE*/
>>>>>>> e1ad7642b33b08cba1e45998318f893f7c730ac1
    })
  })



