const joi = require('joi')
const user = require('../models/userModel')
const productModel = require('../models/productModel')
const {productDetail} = require('../validator/productsValidator')



const createProduct = async (req, res) => { 
 try {
        // let  productForm = await productDetail.validateAsync(req.body)
        let productForm  =  await productDetail.validateAsync(req.body)
        productForm.userId = req.user._id
        console.log(productForm)

    const product = await new productModel(productForm).save()
        res.status(200).send({data: product})
    } catch (error) {
        
        res.status(400).json({ message: error.message})
    }
}

const readProduct = async (req, res) => {
    try {
        let search = req.query.search
        let searchQuery = {}

        if (search) {
            searchQuery = { title: { $regex: search, $options: "i" } }
        }
        const productList = await productModel.find(searchQuery).select(['title', 'description', 'price']).sort({ price: -1 })

        const productList1 = await productModel.countDocuments({})

        let data1 = {
            product : productList1,
            productData: productList
        }
        res.send(data1).json({ data: data })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.productId
        const product =  await productModel.findOne({ _id: productId, userId: req.user._id})

        if (product) {
            const updateProduct = await productModel.findByIdAndUpdate(productId, req.body, { new: true })
            return res.status(200).send(updateProduct)
        }
        else {
            throw Error('Product not found ')
        }
    } catch (error) {
        
        res.status(400).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {

    try {
        const id = req.params.delId
        const product = await productModel.findByIdAndDelete({ _id: id })

        res.status(200).send('Product Item Deleted Successfully ')

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {

    createProduct,
    readProduct,
    updateProduct,
    deleteProduct
}