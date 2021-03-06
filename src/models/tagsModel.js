const mongoose = require('mongoose')

const tagsSchema = new mongoose.Schema({

    clothing:{},
    food:{}
})

const tags = mongoose.model('tags', tagsSchema)