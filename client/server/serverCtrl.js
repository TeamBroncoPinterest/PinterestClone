var app = require("./server");
var db = app.get('db');

module.exports = {

    searchFeed: function (req, res) {
      const term = `%${req.params.term}%`.toLowerCase()
      db.search_pins([term], function (err, response) {
        if (!err) {
          res.status(200).send(response);
        } else {
          console.log(err);
        }
      })

    },

    getFeed: function (req, res) {
      db.get_feed(function (err, response) {
        if (!err) {
          res.status(200).send(response);
        } else {
          console.log(err);
        }
      })
    },


    validatelogin: function (req, res) {
        const username = req.body.username;
        const password = req.body.password;
        db.validate_user_login([username, password], function (err, response) {
            if (!err && response[0] !== undefined) {
                const id = response[0].id;
                db.get_user([id], function (err, response) {
                    if (err) {
                        console.log(err)
                        res.send(err);
                    } else {
                        console.log(response)
                        res.status(200).send(response);
                    }
                })
            } else {
                res.send(err);
            }
        })
    },

    createuser: function (req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let first = req.body.first;
        let last = req.body.last;

        db.validate_username([username], function (err, response) {
            if (!err && response[0] === undefined) {
                db.create_user_login([username, password], function (err) {
                    if (!err) {
                        db.get_id([username], function (err, response) {
                            console.log(response)
                            if (!err) {
                                const id = response[0].id
                                db.create_user([id, first, last], function (err) {
                                    if (err) {
                                        res.send(err);
                                    } else {
                                        db.get_user([id], function (err, response) {
                                            if (err) {
                                                console.log(err)
                                                res.send(err);
                                            } else {
                                                console.log(response)
                                                res.status(200).send(response);
                                            }
                                        })
                                    }
                                })
                            } else {
                                res.send(err);
                            }
                        })
                    } else {
                        res.send(err);
                    }
                })


            } else {
                res.send(err);
            }
        })
    },

    updateuser: function (req, res) {
        const user_id = req.params.id;
        const first = req.body.first;
        const last = req.body.last;
        const bio = req.body.bio;
        const img = req.body.img;

        db.update_user([user_id, first, last, bio, img], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },

    getuser: function (req, res) {
        db.get_user([req.params.id], function (err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })
    },

    deleteuser: function (req, res) {
        console.log(req.params, req.body);
        db.delete_user([req.params.id], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                db.delete_user_login([req.params.id], function (err, response) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(response);
                    }
                })
            }
        })
    },


    updateboard: function (req, res) {
        console.log(req.params, req.body)
        let user_id = req.params.id;
        let boards = req.body.boards;
        db.update_board([user_id, boards], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },


    getpin: function (req, res) {
        db.get_pin([req.params.id], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },



}




// storePins: function (req, res) {
//   let pins = []
//   for (var i = 0; i < req.body.length; i++) {
//     let { creator, image, original_link, note, board, metadata } = req.body[i];
//     pins.push(0, creator, image, original_link, note, board, metadata);
//   }
//   while (pins.length < 175) {
//     pins.push(0,
//       { url: 'https://www.pinterest.com/virginiawalker/',
//         first_name: 'Virginia',
//         last_name: 'Walker',
//         id: '155796605767778464' },
//       { original:
//          { url: 'https://s-media-cache-ak0.pinimg.com/originals/95/87/32/958732d823b8172ce97a0099144a9897.jpg',
//            width: 500,
//            height: 1033 } },
//       'http://www.creeklinehouse.com/2017/04/pack-organized-suitcase.html',
//       'Amazingly organized suitcase! Love this packing method using packing cubes!',
//       { url: 'https://www.pinterest.com/virginiawalker/travel/',
//         id: '155796537048304755',
//         name: 'Travel' },
//       { article:
//          { published_at: '2017-04-26T00:00:00',
//            description: 'I’ve mentioned before that we travel quite a bit as a family for little mini trips and also (mostly) for Kennedy’s soccer. I’ve always been a little bit of a nervous traveler because of my love of routines and systems, and well, traveling somewhere new is pretty much the opposite of that! I’ve learned quite …',
//            name: 'How I Pack an Organized Suitcase',
//            authors: [] },
//         link:
//          { locale: 'en',
//            title: 'How I Pack an Organized Suitcase - The Creek Line House',
//            site_name: 'The Creek Line House',
//            description: 'I’ve mentioned before that we travel quite a bit as a family for little mini trips and also (mostly) for Kennedy’s soccer. I’ve always been a little bit of a nervous traveler because of my love of routines and systems, and well, traveling somewhere new is pretty much the opposite of that! I’ve learned quite …',
//            favicon: 'https://s-media-cache-ak0.pinimg.com/favicons/5dae634f56128f0f73ad2cb8f1d6738de3e786461a8b44f075e366f3.png?165aba24dd481778956891dc35417b65'
//         }
//       }
//     );
//   }
//   db.temp(pins, function (err) {
//     if(!err) {
//       res.status(200).send('done');
//     } else {
//       console.log(err);
//     }
//   })
//
//
// },
