'use strict'

var Sequelize = require('sequelize');
var connection = new Sequelize('crud','root','',{
    dialect: "mysql"
});

module.exports = connection;