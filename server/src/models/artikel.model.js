const mongoose = require('mongoose');
const schema = mongoose.Schema;


const artikelSchema = new schema({
    judul: {
        type: String
    },
    content:{
        type: String
    },
    tag:[{
        type: schema.Types.ObjectId,
        ref:'Tags'
    }],
    creator: {
        type: schema.Types.ObjectId,
        ref: 'Users'
    }
},
    {

        timestamps: true

    });
const Artikels = mongoose.model('Artikels', artikelSchema);

module.exports = Artikels;