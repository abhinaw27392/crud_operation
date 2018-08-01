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
const setEmpData = (formData) => {
    return db.employee.create({
        empId: formData.empId,
        empName: formData.empName,
        mob: formData.mob,
        email: formData.email
    })
}

module.exports = {
    "getEmpData": Promise.method(getEmpData),
    "setEmpData": Promise.method(setEmpData)
}