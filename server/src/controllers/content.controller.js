const Content = require('../models/content.model');
const User = require('../models/user.model');

class ContentController {
    static create(req, res) {
        Content.create(req.body)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json({
                    message: 'cant create content'
                })
            })
    }

    static update(req, res) {
        Content.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json({
                    message: 'cant create content'
                })
            })
    }

    static delete(req, res) {
        Content.findOneAndRemove({ _id: req.params.id })
            .then((data) => {
                res.status(200).json({
                    message: 'delete succesfully'
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'cant delete content'
                })
            })
    }

    static readbyUser(req, res) {
        User.findOne({ email: req.user.email })
            .then((user) => {
                return Content.find({ creator: user._id })
            })
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static readAll(req, res) {
        Content.find()
            .populate('tag', 'name')
            .populate('creator')
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static readByUser(req, res) {

        Content.find()
            .populate('tag', 'name')
            .populate('creator')
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(404).json(err.message)
            })
    }

    static detail(req, res) {
        Content.findOne({ _id: req.params.id })
            .populate('tag', 'name')
            .populate('creator')
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(404).json(err.message);
            })
    }

}

module.exports = ContentController;