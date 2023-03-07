const express = require('express');
const database = require('./infra/database');
const data = require('./data/namesData')
const app = express();
const port = 3000;

database.createTable();
database.insertName('Fulano');

app.get('/', (req, res, next) => {
  data.getNames((listOfNames) => {
    res.send(listOfNames)
  })
})


app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})