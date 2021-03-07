const { string } = require('joi')
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
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref:'user',
        required: true
    },
    image:{
        type: String
           },
},
{
    timestamps: true
})

const prodcut = mongoose.model('product', productSchema)

module.exports = prodcut