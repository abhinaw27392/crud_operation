'use strict'

const express = require('express');
var router = express.Router();

var EmployeeObj = require('../controllers/empController');

router.get('/:empId', EmployeeObj.getEmpData);

module.exports = router;