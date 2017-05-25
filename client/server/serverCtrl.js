var app = require("./server");
var db = app.get('db');

module.exports = {

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
                //TODO: make sure the JSON.parse works                
                // response.data.metadata = JSON.parse(response.data.metadata);
                res.status(200).send(response);
            }
        })
    },







}