var app = require("./server");
var db = app.get('db');

module.exports = {
    createuser: function (req, res) {
        let username = req.body.username;
        let first = req.body.first;
        let last = req.body.last;
        let bio = req.body.bio;
        let img = req.body.img;
        db.create_user([username, first, last, bio, img], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },

    updateuser: function (req, res) {
        let username = req.body.username;
        let first = req.body.first;
        let last = req.body.last;
        let bio = req.body.bio;
        let img = req.body.img;

        db.update_user([username, first, last, bio, img], function (err, response) {
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
        db.delete_user([req.params.id], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        })

    },

    createboard: function (req, res) {
        let user_id = req.body.user_id;
        let name = req.body.name;
        let description = req.body.description;
        db.create_board([user_id, name, description], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },

    updateboard: function (req, res) {
        let user_id = req.body.user_id;
        let name = req.body.name;
        let description = req.body.description;
        db.update_board([user_id, name, description], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })

    },

    getboard: function (req, res) {
        db.get_board([req.params.id], function (err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })
    },

    deleteboard: function (req, res) {
        db.delete_board([req.params.id], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        })
    },

    createpin: function (req, res) {
        let link = req.body.link
        let pinterest_id = req.body.pinterest_id;
        let metadata = JSON.stringify(req.body.metadata);
        let imageurl = JSON.stringify(req.body.imageurl);
        db.create_pin([link, pinterest_id, metadata, imageurl], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send(response);
            }
        })
    },

    updatepin: function (req, res) {
        let link = req.body.link
        let pinterest_id = req.body.pinterest_id;
        let metadata = JSON.stringify(req.body.metadata);
        let imageurl = JSON.stringify(req.body.imageurl);
        db.update_pin([link, pinterest_id, metadata, imageurl], function (err, response) {
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
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
//TODO: make sure the JSON.parse works                
                response.data.metadata = JSON.parse(response.data.metadata);
                res.status(200).send(response);
            } 
        })
    },

    deletepin: function (req, res) {
        db.delete_pin([req.params.id], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        })
    },

    createboardpin: function (req, res) {
        let pin_id = req.body.pin_id;
        let board_id = req.body.board_id;
        db.create_board_pin([pin_id, board_id], function(err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })
    },

    getboardpin: function (req, res) {
        db.get_boardpin([req.params.id], function (err, response) {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log(response)
                res.status(200).send(response);
            }
        })
    },

    deleteboardpin: function (req, res) {
        db.delete_boardpin([req.params.id], function (err, response) {
            if (err) {
                res.send(err);
            } else {
                res.send(response);
            }
        })
    }


}