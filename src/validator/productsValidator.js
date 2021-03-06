const joi = require('joi')

const productDetail = joi.object().keys({

    title: joi.string().required(),
    description: joi.string().required(),
    price: joi.string().required(),
    tags: joi.array()

})

module.exports = {productDetail}