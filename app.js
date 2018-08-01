const express = require('express');
const bodyParser = require('body-parser');
var router = require('./routes/routes')

//initialise our express app
const app = express();

let port = 3000;
app.listen(port, () => {
    console.log("server is running on the port:"+port);
});
app.use('/', router);

module.exports = app;



