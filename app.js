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
app.set('views', './views');




   
// Your handlers go here

app.get('/signin', function(req, res) {
  res.sendFile(__dirname + '/public/form.html');
});

app.get('/bye', function(req, res) {
  res.render('bye.html',{'name_bye':req.query.pseudo} );
});

app.get('/hello', function(req, res) {
res.render('hello.html', {'name':req.query.pseudo, 'red':req.query.rouge,
'colors': [
'Cherry',
	'Strawberry',
'Blood'
],'link': '/bye?pseudo='+req.query.pseudo , 
                          
'yellow':req.query.jaune,
'colors2': [
'Sun',
	'Banana',
'Lemon'
]});

});

app.post('/hello', function(req, res) {
res.render('hello.html', {'name': req.body.pseudo})

});

app.post('/bye', function(req, res) {
  res.render('bye.html',{'name_bye':req.body.pseudo} );
});

app.get('/:name/counter/',function(req, res) {
  res.render('counter.html',{'name':req.params.name+", this is your first visit"
              
,'link': '/'+req.params.name+'/counter/1'} );

});

app.all('/:name/counter/:cnt',function(req, res) {
  res.render('counter.html',{'name':req.params.name+", you have visited this page "+ parseInt(req.params.cnt) +" times"
                            
,'link':'/'+req.params.name+'/counter/'+(parseInt(req.params.cnt)+1)} ); 

});
   
app.listen(process.env.PORT);


