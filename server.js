import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnect from './config/dbConfig.js';
import hotel from './backendRoutes/hotels.js';
import user from './backendRoutes/users.js';
import bodyParser from 'body-parser';
//config
dotenv.config();
dbConnect();

//declaration
const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//ServerRoutes
app.use('/api/hotels', hotel);
app.use('/api/users', user);

//Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    message: `err ${err.message}`,
  });
});

//ClientRoutes
app.get('/', function (req, res) {
  res.render('foodadda');
});
app.get('/signup.html', function (req, res) {
  res.render('signup');
});

app.listen(process.env.PORT, function () {
  console.log('Connected');
});
