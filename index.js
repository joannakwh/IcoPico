/**
 * Server database
 *
**/

const express = require('express');
const mysql = require('mysql');
const app = express();

// Create connection
const db = mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'JBLUFDmAIL',
    password : '6g5HLkJiSe',
    database : 'JBLUFDmAIL'
});

// Connect
db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log("MySql connected...");
});

app.use(express.static('./'));
app.use(express.static('src'));
app.use('index.html', express.static('index.html'));
app.use('/css', express.static(__dirname + '/src/css'));
app.use('/scripts', express.static(__dirname + '/src/scripts'));
app.use('/images', express.static(__dirname + '/src/images'));
app.use('login.html', express.static('/src/login/login.html'));
app.use('icopico.html', express.static('/src/icopico/icopico.html'));

app.get('/getinitialinfo/:id', (req, res) => {
    let sql = `SELECT * FROM Player WHERE accountEmail = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        //console.log(JSON.stringify(result));
        // use code above to return a JSON array
        //console.log(result);
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
        //res.write(JSON.stringify(result));
    });
});

//get lastlogin from Account table
app.get('/getlastlogin/:id', (req, res) => {
    let sql = `SELECT * FROM Account WHERE email = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
    });
});

//get info from Player table
app.get('/getinitialinfo/:id', (req, res) => {
    let sql = `SELECT * FROM Player WHERE accountEmail = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        //console.log(JSON.stringify(result));
        // use code above to return a JSON array
        //console.log(result);
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
        //res.write(JSON.stringify(result));
    });
});

//get info from PlayerPet table
app.get('/getplayerpetinfo/:id', (req, res) => {
    let sql = `SELECT * FROM PlayerPet WHERE playerID = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
    });
});

//get info from Inventory table
app.get('/getinventoryinfo/:id', (req, res) => {
    let sql = `SELECT * FROM Inventory WHERE playerID = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
    });
});

//Get info from TaskList table
app.get('/gettasklistinfo/:id', (req, res) => {
    let sql = `SELECT * FROM TaskList WHERE playerID = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//Update tasklist
app.get('/updatetasklist/:id/:taskIDa/:taskIDb/:taskIDc', (req, res) => {

    let sqlA = `UPDATE TaskList SET taskIDa = ${req.params.taskIDa}, taskIDb = ${req.params.taskIDb},
        taskIDc = ${req.params.taskIDc} WHERE playerID = ${req.params.id}`;
    //let data = [1, 2, 3];
    req.body

    let queryA = db.query(sqlA, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        console.log('update success');
        //console.log(req.body);
        //console.log(JSON.parse(JSON.stringify(result)));
        //res.send(JSON.stringify(result));
    });

    let sqlB = `SELECT * FROM TaskList WHERE playerID = ${req.params.id}`;
    let queryB = db.query(sqlB, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        //res.setHeader('Content-Type', 'application/json');
        console.log("Stuff sent to server", req.body);
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
    });
});

//update currency
app.get('/updatecurrency/:id/:newCurrency', (req, res) => {

    let sqlB = `UPDATE Player SET currency = ${req.params.newCurrency} WHERE playerID = ${req.params.id}`;
    let queryB = db.query(sqlB, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
    });
});

//update happiness
app.get('/updatecurrenthappiness/:id/:petID/:newHappiness', (req, res) => {
    let sqlB = `UPDATE PlayerPet SET currentHappiness = ${req.params.newHappiness}
    WHERE PlayerPet.playerID = ${req.params.id} AND petID = ${req.params.petID}`;
    let queryB = db.query(sqlB, (err, result) => {
        if (err) {
            return console.log('error: ' + err.message);
        }
        //console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.stringify(result));
    });
});

var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
