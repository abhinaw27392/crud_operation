'use strict'

var Promise = require('bluebird');
var crudService = require('../services/crud_service');

const getEmpData = (req, res) => {
    // console.log(req);
    return crudService.getEmpData(req.params.empId)
    .then((data) => {
        // console.log(data);
        res.send(data);
    }).catch((err) => {
        res.send(err.message);
    });
}

const setEmpData = (req, res) => {
    console.log("req.body is:");
    console.log(req.body);
    return crudService.setEmpData(req.body)
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err.message);
    });
}

const updateData = (req, res) => {
    return crudService.updateData(req.body)
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err.message);
    });
}

const delData = (req, res) => {
    return crudService.delData(req.params.empId)
    .then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.send(err.message);
    });
}
module.exports = {
    "getEmpData": Promise.method(getEmpData),
    "setEmpData": Promise.method(setEmpData),
    "updateData": Promise.method(updateData),
    "delData": Promise.method(delData)
};