const mongoose = require('mongoose');
const schema = mongoose.Schema;


const contentSchema = new schema({
    title: {
        type: String,
        required: 'name is required'
    },
    gambar: {
        type: String
    },
    content: {
        type: String
    },
    creator: {
        type: schema.Types.ObjectId,
        ref: 'Users'
    },
    tag: [{
        type: schema.Types.ObjectId,
        ref:'Tags'
    }]
},
    {

        timestamps: true

    });

const Contents = mongoose.model('Contents', contentSchema);

module.exports = Contents;