//creates express app
var express = require('express');
var app = express();

//server port
var HTTP_PORT = 8000;

//starts server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});

//Root endpoint
app.get('/', (req, res, next) => {
    res.json({'message': 'Ok'})
})

//other API endpoints

//default response for any other request
app.use(function (req, res){
    res.status(404);
})
