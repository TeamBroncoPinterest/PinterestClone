var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');
var config = require('./config');
var session = require ('express-session');

var app = module.exports = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../public/')));

var conn = massive.connectSync({
  connectionString : config.databasestring
});

app.set('db', conn);

var ctrl = require('./serverCtrl.js')
var db = app.get('db');


//USER
app.post('/api/create_user', ctrl.createuser); //good
app.post('/api/login', ctrl.validatelogin); //good
  app.get('/api/get_user/:id', ctrl.getuser); //good

app.put('/api/update_user/:id', ctrl.updateuser); //good
app.delete('/api/delete_user/:id', ctrl.deleteuser); //good
app.put('/api/update_board/:id',ctrl.updateboard); //good

//PINS
//feed
app.get('/api/feed', ctrl.getFeed) //good
//search
app.get('/api/feed/:term', ctrl.searchFeed)
//user pins
app.post('/api/create_pin', ctrl.createPin);
app.put('/api/edit_pin', ctrl.editPin);
app.delete('/api/delete_pin', ctrl.deletePin);

// app.post('/api/pins', ctrl.storePins)


var port = 3030;
app.listen(port, function() {
  console.log("Started server on port", port);
});
