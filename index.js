const express=require("express")
const app=express()
const port=3000

app.use(express.static('public'))
const pgp = require('pg-promise')();
const connection={
    host: 'localhost',
    port: 5432,
    database: 'test',
    user: 'postgres',
    password: 'Eii6@lthf',
    max: 30
};
const db = pgp(connection);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
  })
app.post('/', function (req, res) {
    db.none('INSERT INTO test(id,   full_name ) VALUES($1, $2 )', ['1', 'Farzana Mirdadi'])
    .then(() => {
        res.redirect('/') 
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    });

  })

  app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
  })

