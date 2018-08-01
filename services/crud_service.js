'use strict'

var Promise = require('bluebird');
var db = require('../models');

const getEmpData = (empId) => {
    // console.log("empId is:"+empId);
    return db.employee.findAll({
        where: {
            empId : empId
        }
    })
}

module.exports = {
    "getEmpData": Promise.method(getEmpData)
}