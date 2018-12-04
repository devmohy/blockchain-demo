const db = require('../config/db.config.js');
const citizen = db.citizens;
 
// Post a citizen
exports.save = (req, res) => {	
	// Save to MySQL database
	Citizen.create({  
    username: req.body.username,
    phonenumber: req.body.phonenumber,
	  firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    state: req.body.state,
    city: req.body.city
	}).then(citizen => {		
		// Send created citizen to client
		res.send(citizen);
	});
};
 
// FETCH all citizens
exports.findAll = (req, res) => {
	Citizen.findAll().then(citizens => {
	  // Send all citizens to Client
	  res.send(citizens);
	});
};
 
// Find a citizen by Id
exports.findById = (req, res) => {	
	Citizen.findById(req.params.citizenId).then(citizen => {
		res.send(citizen);
	})
};
 
// Update a citizen
exports.update = (req, res) => {
	const id = req.params.citizenId;
	Citizen.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
					 { where: {id: req.params.citizenId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a citizen with id = " + id);
				   });
};
 
// Delete a citizen by Id
exports.delete = (req, res) => {
	const id = req.params.citizenId;
	Citizen.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a citizen with id = ' + id);
	});
};