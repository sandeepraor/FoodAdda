import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import dbConnect from './config/dbConfig.js';
import hotel from './backendRoutes/hotels.js';

//config
dotenv.config();
dbConnect();

//declaration
const app = express();

//middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//ServerRoutes
app.use('/hotels', hotel);

//ClientRoutes
app.get('/', function (req, res) {
  res.render('foodadda');
});
app.get('/signup.html', function (req, res) {
  res.render('signup');
});
app.get('/hello.html', function (req, res) {
  res.render('hello');
});

app.listen(3000, function () {
  console.log('Connected');
});
