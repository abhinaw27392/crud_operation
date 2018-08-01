'use strict'

var Sequelize = require('sequelize');
var connection = require('./connection');

var Employee = connection.define('employee', {
    empId: {type: Sequelize.INTEGER, primaryKey: true},
    empName: {type: Sequelize.STRING},
    mob: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING}
},{
    timestamps: false,
    tableName: 'employee'
});

module.exports = Employee;