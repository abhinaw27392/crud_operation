'use strict';

const fs = require('fs');
const Sequelize = require('sequelize');
const connection = require('./connection');

let db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return file.indexOf('.') !== 0 && file !== 'connection.js' &&
            file !== 'index.js' && file.slice(-3) === '.js';
    })
    .forEach(function (file) {
        var name = file.replace('.js', '');
        db[name] = require('./' + file);
    });

db.connection = connection;
db.sequelize = Sequelize;


module.exports = db;