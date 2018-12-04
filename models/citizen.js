'use strict';
module.exports = (sequelize, DataTypes) => {
  const Citizen = sequelize.define('Citizen', {
    username: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Citizen.associate = function(models) {
    // associations can be defined here
  };
  return Citizen;
};