module.exports = (sequelize, Sequelize) => {
	const Citizen = sequelize.define('citizen', {
    username: {
		  type: Sequelize.STRING
    },
    phonenumber: {
		  type: Sequelize.STRING
	  },
	  firstname: {
		  type: Sequelize.STRING
	  },
	  lastname: {
		  type: Sequelize.STRING
    },
    address: {
		  type: Sequelize.STRING
    },
    state: {
		  type: Sequelize.STRING
    },
    city: {
		  type: Sequelize.STRING
    }
	});
	
	return Citizen;
}