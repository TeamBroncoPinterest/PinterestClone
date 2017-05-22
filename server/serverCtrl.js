var app = require('./server.js');
var db = app.get('db');
var stripeKey = require('./stripeSK.js');
var stripe = require('stripe')(stripeKey.secretKey);

module.exports = {




};
