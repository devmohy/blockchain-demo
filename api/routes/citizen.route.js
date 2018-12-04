module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
  const citizens = require('../controllers/citizen.controller.js');
	
	var path = __basedir + '/pages/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	
	app.get('/', (req,res) => {
		res.sendFile(path + "index.js");
	});
 
  // Save a citizen to MySQL
  app.post('/api/citizens/save', citizens.save);

  // Retrieve all citizens
	app.get('/api/citizens/all', citizens.findAll);
	
	// Retrieve a single Customer by Id
	app.get('/api/citizens/:customerId', citizens.findById);

	// Update a Customer with Id
	app.put('/api/citizens/:customerId', citizens.update);

	// Delete a Customer with Id
	app.delete('/api/citizens/:customerId', citizens.delete);
	
	app.use("/",router);
 
	app.use("*", (req,res) => {
		res.sendFile(path + "404.html");
	});

}