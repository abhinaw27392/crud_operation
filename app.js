const express = require('express');
const bodyParser = require('body-parser');
var router = require('./routes/routes')

//initialise our express app
const app = express();


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



