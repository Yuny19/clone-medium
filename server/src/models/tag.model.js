const mongoose = require('mongoose');
const schema = mongoose.Schema;


const tagSchema = new schema({
    name: {
        type: String,
        required: 'name is required'
    }
},
    {

        timestamps: true

    });
const Tags = mongoose.model('Tags', tagSchema);

module.exports = Tags;