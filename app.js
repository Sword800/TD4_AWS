// app.js
// where your node app starts

const express = require('express');
const bodyP = require('body-parser');
const cookieP = require('cookie-parser');
   
const app = express();
app
    .use(bodyP.urlencoded({ extended: false }))
    .use(cookieP())
    .use('/s', express.static('public'));

const consolidate = require('consolidate');
app.engine('html', consolidate.nunjucks);
app.set('view engine', 'nunjucks');
app.set('views', 'views');




   
// Your handlers go here
   
app.get('/signin', function(req, res) {
  res.sendFile(__dirname + '/public/form.html');
});

app.get('/bye', function(req, res) {
  res.render('bye.html', {'name_bye':req.query.pseudo})
});

app.get('/hello', function(req, res) {
res.render('hello.html', {'name':req.query.pseudo, 'red':req.query.rouge,'colors': [
'Cherry',
	'Strawberry',
'Blood'
],
'yellow':req.query.jaune,'colors2': [
'Sun',
	'Banana',
'Lemon'
]});


});

   
app.listen(process.env.PORT);


