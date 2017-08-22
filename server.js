const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
  res.render("index");
})

app.get('/projects', (req,res) => {
  res.render('project')
})

app.get('/skills', (req,res) => {
  res.render('skill')
})

app.listen(8080, () => {
  console.log("server at 8080")
})
