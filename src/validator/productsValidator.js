const joi = require('joi')

const productDetail = joi.object().keys({

    title: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().integer().required(),
    image: joi.string()

})

module.exports = {productDetail}