/* eslint-disable prettier/prettier */
var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', //empty for window
  database: 'react_php_crud',
});

var server = app.listen(4200, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('start');
});

con.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('connected');
  }
});

app.get('/user', function (req, res) {
  con.query('select * from users', function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log(rows);
      res.send(rows);
    }
  });
});

app.get('/shops', function (req, res) {
    con.query('select * from shops',  (error, shops, fields)=> {
      if (error) {
        console.log(error);
      } else {
        console.log(shops);
        res.send(shops);
      }
    });
  });
  app.get('/shops/area', function (req, res) {
    con.query('select area from shops',  (error, shops, fields)=> {
      if (error) {
        console.log(error);
      } else {
        console.log(shops);
        res.send(shops);
      }
    });
  });
