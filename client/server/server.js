var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');

var app = module.exports = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../public/')));

var conn = massive.connectSync({
  connectionString : server.serverURL
});

app.set('db', conn, );

var ctrl = require('./serverCtrl.js')
var db = app.get('db');

app.post('/api/create_user', ctrl.createuser);
app.put('./api/update_user', ctrl.updateuser);
app.get('./api/get_user', ctrl.getuser);
app.delete('./api/delete_user', ctrl.deleteuser);
app.post('/api/create_board', ctrl.createboard);
app.put('./api/update_board', ctrl.updateboard);
app.get('./api/get_board', ctrl.getboard);
app.delete('./api/delete_board', ctrl.deletboard);
app.post('/api/create_pin', ctrl.createpin);
app.put('./api/update_pin', ctrl.updatepin);
app.get('./api/get_pin', ctrl.getpin);
app.delete('./api/delete_pin', ctrl.deletepin);
app.post('./api/create_board_pin', ctrl.createboardpin);
app.get('./api/get_board_pin', ctrl.getboardpin);
app.delete('./api/delete_board_pin', ctrl.deleteboardpin);

var port = 3030;
app.listen(port, function() {
  console.log("Started server on port", port);
}); 

