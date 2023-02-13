/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   28 January 2023
; Description: Server and route file for hello-world app
;===========================================
*/

// Express and Node.js import statements

// const express = require('express');
// const path = require('path');

// const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, 'public')));

// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.render('index', {
//         title: 'FMS: Landing',
//         pageTitle: 'Landing Page'
//     })
// });

// app.get('/about', (req, res) => {
//     res.render('grooming', {
//         title: 'FMS: About',
//         pageTitle: 'Our Story!'
//     })
// })

// app.listen(PORT, () => {
//     console.log('Application started and listening on PORT ' + PORT);
// });
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
            title: 'FMS: Landing',
            pageTitle: 'Landing Page'
        });
});

app.get('/grooming', (req, res) => {
  res.render('grooming', {
            title: 'FMS: About',
            pageTitle: 'Our Story!'
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
