//creates express app
var express = require('express');
var app = express();
var db = require('./database');
var md5 = require('md5');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

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

//Get all users
app.get('/api/users', (req, res, next) => {
    var sql = 'SELECT * FROM user';
    var params = [];
    db.all(sql, params, (err, rows) => {
        if(err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data": rows
        })
    })
})

//get a single user by id
app.get("/api/user/:id", (req, res, next) => {
    var sql = 'select * from user where id = ?'
    params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if(err){
            res.status(400).json({"error":err.message})
            return
        }
        res.json({
            "message":"success",
            "data":row
        })
    })
})

//add new user
app.post('/api/user', (req, res, next) => {
    var errors = []
    if(!req.body.password){
        errors.push("No password specified");
    }
    if(!req.body.email){
        errors.push("No email specified");
    }
    if(!req.body.name){
        errors.push("No name especified");
    }
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password)
    }
    var sql = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
    var params = [data.name, data.email, data.password]
    db.run(sql, params, function (err, result){
        if(err){
            res.status(400).json({"error":err.message})
            return
        }
        res.json({
            "message":'success',
            "data": data,
            "id" : this.lastIdD
        })
    })
})

//default response for any other request
app.use(function (req, res){
    res.status(404);
})
