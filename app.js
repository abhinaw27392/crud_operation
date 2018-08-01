const express = require('express');
const bodyParser = require('body-parser');
let router = require('./routes/routes');


//initialise our express app
const app = express();

//declare port and create server
let port = 3000;
app.listen(port, () => {
    console.log("server is running on the port:" + port);
});

//body-parser required for form submission
app.use(bodyParser.json({
    limit: '25mb'
}));

app.use(bodyParser.urlencoded({
    limit: '25mb',
    extended: false
}));

//add router here
app.use('/', router);



module.exports = app;



