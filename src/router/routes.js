const express =  require('express')
const Router =  express.Router()
const authorized = require('../helpers/middleware')
const accountController = require('../controllers/userAcnt')

const accountController1 = require('../controllers/product')

Router.post('/Signup', accountController.userSignup)

Router.post('/Login', accountController.login)

Router.post('/Logout', authorized.verifyToken, accountController.userLogout)

Router.post('/ChangePassword', authorized.verifyToken ,accountController.changePswd)

Router.get('/UpdateProfile', authorized.verifyToken ,accountController.updateProfile)

Router.get('/UserLists', authorized.verifyToken ,accountController.listUser)




// Routes for the products
Router.post('/CreateProduct',authorized.verifyToken ,accountController1.createProduct)

Router.get('/AllProduct',authorized.verifyToken ,accountController1.readProduct)

Router.put('/UpdateProduct/:productId',authorized.verifyToken,accountController1.updateProduct)

Router.delete('/RemoveProduct/:delId',authorized.verifyToken ,accountController1.deleteProduct)


module.exports = Router