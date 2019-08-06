const express = require('express');
const router = express.Router();
const products = require('../controllers/products');
const productsById = require('../controllers/productsById');
const categories = require('../controllers/categories');
const prodByCat = require('../controllers/productsByCategory');
const getByM = require('../controllers/productsByM');
//const validationMiddleware = import('../middleware/users')
//console.log(products)

//router.get('/product/?category=:idmanufacturer=:id', getByM);
router.get('/products', products);
router.get('/products/:id', productsById);
router.get('/categories', categories);
router.get('/categories/:id/products', prodByCat);


//router.get('/products/:id', products.getProducts);
// router.route('/products')
//         .get(products);
module.exports = router;