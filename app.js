var express = require('express');
var app = express();
var routes = require('./routes/index.js'); // --> this module returning router object

// Set directory to contain the templates ('views')
//Express will automatically look inside the views/ folder for template files
//app.set('views', path.join(__dirname, 'views'));
app.set('views', __dirname + '/views');

//set view engine to use
app.set('view engine', 'ejs');

//Serving static files --> express.static middleware to serve static files,
// including your images, CSS and JavaScript (static() is the only middleware function that is actually part of Express)
//http://localhost:8000/images/dog.jpg
app.use(express.static('public'));

//call use() on the Express application to add the Router to the middleware handling path
app.use('/',routes);   // here we are applying router only on home root path


app.listen(8000);
console.log('server is now launched successfully');


