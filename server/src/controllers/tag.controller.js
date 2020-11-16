const Tag = require('../models/tag.model');

class TagController {
    static create(req, res){
        Tag.create(req.body)
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(400).json({
                message: err.message
            })
        })
    }

    static readAll(req, res){
        Tag.find()
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(404).json({
                message: err.message
            })
        })
    }
}

module.exports = TagController;