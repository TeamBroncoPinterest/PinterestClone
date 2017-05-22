var app = require('./server.js');
var db = app.get('db');
var stripeKey = require('./stripeSK.js');
var stripe = require('stripe')(stripeKey.secretKey);

module.exports = {


create_temple: function(req, res, next){
  var name = req.body.name;
  var loc = req.body.location;
  var desc = req.body.descript;
  var img = req.body.imageurl;
  var large = req.body.price_large;
  var medium = req.body.price_medium;
  var small = req.body.price_small;


  db.create_temples([name, loc, desc, img, large, medium, small], function(err){
    console.log(name);
      res.status(202).send("Item Created");
  });
},

create_watercolor: function(req, res, next){
  console.log(req.body);
  var name = req.body.name;
  var desc = req.body.descript;
  var img = req.body.imageurl;
  var large = req.body.price_large;
  var medium = req.body.price_medium;
  var small = req.body.price_small;


  db.create_watercolors([name, desc, img, large, medium, small], function(err){
    console.log(name);
      res.status(202).send("Item Created");
  });
},


getTemples: function(req, res, next){

  db.get_templepaintings(function(err, temple_paintings) {
      res.status(200).send(temple_paintings);
  });
},

getWatercolors: function(req, res, next){

  db.get_watercolors(function(err, watercolors) {
      res.status(200).send(watercolors);
  });
},

getOrders: function(req, res, next){

  db.get_orders(function(err, orders) {


      res.status(200).send(orders);
  });
},

getContact: function(req, res, next){

  db.get_contact(function(err, contact) {
      res.status(200).send(contact);
  });
},

updateTemple: function(req, res, next){
  var name = req.body.name;
  var descr = req.body.descript;
  var loc = req.body.location;
  var img = req.body.imageURL;
  var large = req.body.price_large;
  var medium = req.body.price_medium;
  var small = req.body.price_small;
  var id = req.body.id;

  db.update_temple([name, loc, descr, img, large, medium, small, id], function(err) {
    console.log(img);
      res.status(202).send("updated");

  });
},

updateWater: function(req, res, next){
  var name = req.body.name;
  var descr = req.body.descript;
  var img = req.body.imageurl;
  var large = req.body.price_large;
  var medium = req.body.price_medium;
  var small = req.body.price_small;
  var id = req.body.id;

  db.update_watercolors([name, descr, img, large, medium, small, id], function(err) {
    console.log(name);
      res.status(202).send("item updated");

  });
},

deletetemples: function(req, res, next){
  var id = req.params.id;
  console.log("sdfsdfdsf", id);
  db.delete_temples([id], function(err) {
      res.status(200).send('Item deleted');
  });
},

deletewatercolor: function(req, res, next){
  var id = req.params.id;
  console.log("asdfasfddsa", id);
  db.delete_watercolors([id], function(err) {
      console.log('asdfasfd');
      res.status(200).send('Item deleted')

  });
},

deleteorder: function(req, res, next){
  console.log(req.params.id);
  var id = req.params.id;
  db.delete_order([id], function(err) {
    console.log('work', id);
      res.status(200).send('Order deleted');
  });
},

processPayment: function(req, res, next) {

    //convert amount to pennies
    var chargeAmt = req.body.amount;
    var amountArray = chargeAmt.toString().split('');
    var pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
                pennies.push(amountArray[i + 1]);
            } else {
                pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push("0");
            }
            break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    const convertedAmt = parseInt(pennies.join(''));
    var token = req.body.payment.token;
    var amount_paid = req.body.payment.amount_paid;
    var payment = req.body.payment.payment;
    var name = req.body.payment.name;
    var address = req.body.payment.address + ', ' + req.body.payment.city + ', ' + req.body.payment.state + ' ' + req.body.payment.zipcode;
    var email = req.body.payment.email;
    var cart = JSON.stringify(req.body.payment.cart);
    var charge = stripe.charges.create({
        amount: convertedAmt, // amount in cents, again
        currency: 'usd',
        source: req.body.payment.token,
        description: 'Watercolors by Debbie'
    }, function(err, charge) {
      db.new_order([token, name, email, address, cart, amount_paid], function(err2, response){
        console.log(err2);
        res.sendStatus(200);
      })
    }
)


}

};
