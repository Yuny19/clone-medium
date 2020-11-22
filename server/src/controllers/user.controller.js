const User = require('../models/user.model');
const jwt = require('../helpers/jwt-sign.helpers');
const bcrypt = require('bcrypt');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
    static create(req, res) {
        let role = req.body.role;
        let token = jwt(req.body.email.toLowerCase(), role);
        User.create({
            name: req.body.name,
            email: req.body.email.toLowerCase(),
            password: req.body.password,
            role: role,
            token: token
        })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json({
                    message: err.message
                })
            })
    }

    static loginGoogle(req, res) {
        let logged = "";
        client.verifyIdToken({
            idToken: req.body.idToken,
            audience: process.env.CLIENT_ID
        })
            .then(response => {
                logged = response.payload;
                return User.findOne({ email: logged.email.toLowerCase() })
            })
            .then((user) => {
                if (user == null) {
                    let token = jwt(logged.email.toLowerCase(), 'customer');
                    return User.create({
                        name: logged.name,
                        email: logged.email.toLowerCase(),
                        process: 'google',
                        token: token
                    });
                } else if (user.process === 'google') {
                    res.status(200).json(user);
                }
            })
            .then((data) => {
                res.status(200).json({
                    name: data.name,
                    token: data.token
                });
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                })
            })
    }

    static loginAdmin(req, res) {
        User.findOne({ email: req.body.email.toLowerCase() })
            .then((data) => {
                if (data.role === 'admin') {
                    const pass = bcrypt.compareSync(req.body.password, data.password);
                    if (pass) {
                        res.status(200).json({
                            name: data.name,
                            token: data.token
                        });
                    } else {
                        res.status(403).json({
                            message: 'not authorized'
                        });
                    }

                } else {
                    console.log('else')
                    res.status(403).json({
                        message: "not authorized"
                    });
                }
            })
            .catch(err => {
                console.log(err)
                res.status(401).json({
                    message: 'please register'
                })
            })
    }

    static read(req, res) {
        const { page, limit } = req.query;
        const options = {
          page: parseInt(page, 10) || 1,
          limit: parseInt(limit, 10) || 10,
        };
        User.paginate({}, options)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(404).json({
                    message: err.message
                });
            })
    }

    static findId(req, res) {
        User
            .findById(req.params.id)
            .then((data) => {
                res.status(200).json({
                    message: data
                })
            })
            .catch((err) => {
                res.status(404).json(err.message);
            })
    }
}

module.exports = UserController;