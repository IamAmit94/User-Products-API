const { Mongoose } = require('mongoose')

const mongoose =  require('mongoose')

const productSchema = new mongoose.Schema({

    title:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: String
    },
    userId:{},
    tags:{
        type: Array,
        require: true
    },
    image:{
        type: String
    },

},
{timestamps: true})

const prodcut = mongoose.model('product', productSchema)

module.exports = prodcut