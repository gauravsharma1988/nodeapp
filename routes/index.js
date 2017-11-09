var exp = require('express');
var router = exp.Router();

var passdata = {site_name:'App with EJS',site_author:'Gaurav Sharma',curryear:(new Date()).getFullYear()}
//When the user visits the home page ('/') we want to render 
//the index.ejs template and send the result(html) back to the client using the res.render()
router.get('/', function(req, res){
	res.render('index',passdata);
});

module.exports = router;