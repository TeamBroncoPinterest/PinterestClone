
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');

var app = module.exports = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/..//')));

var conn = massive.connectSync({
  connectionString : server.serverURL
});

app.set('db', conn);
var ctrl = require('./serverCtrl.js')
var db = app.get('db');








var port = 3030;
app.listen(port, function() {
  console.log("Started server on port", port);
});
