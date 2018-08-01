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

const updateData = (formData) => {
    return db.employee.find({
        where: {
            empId: formData.empId
        }
    })
    .then((data) => {
        if(data) {
            return db.employee.update({
                empName: formData.empName,
                mob: formData.mob,
                email: formData.email
            },
            {
                where:{empId: data.empId}
            })
        }
        else {
            res.send("empId does not exist");
        }
    });
}

module.exports = {
    "getEmpData": Promise.method(getEmpData),
    "setEmpData": Promise.method(setEmpData),
    "updateData": Promise.method(updateData)
}