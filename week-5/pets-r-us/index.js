/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   28 January 2023
; Description: Server and route file for hello-world app
;===========================================
*/

// Express and Node.js import statements
const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'FMS: Landing',
    pageTitle: 'Landing Page',
  });
});

app.get('/grooming', (req, res) => {
  res.render('grooming', {
    title: 'FMS: About',
    pageTitle: 'Grooming',
  });
});

app.get('/boarding', (req, res) => {
  res.render('boarding', {
    title: 'FMS: Boarding',
    cardTitle: 'Boarding',
    message: 'Welcome to Board!'
  });
});

app.get('/training', (req, res) => {
  res.render('training', {
    title: 'FMS: Training',
    cardTitle: 'Training',
    message: 'Welcome to traineng center!'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
