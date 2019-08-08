const express = require('express');
const router = express.Router();
const products = require('../controllers/products');
const productsById = require('../controllers/productsById');
const categories = require('../controllers/categories');
const prodByCat = require('../controllers/productsByCategory');
const schema = require('../middleware/validateProducts');
const validateParamsPath = require('../middleware/lib')
const {createProduct, deleteProduct, updateProduct} = require('../controllers/otherCrud');

router.get('/products', products);
router.get('/products/:id', validateParamsPath(schema), productsById);
router.get('/categories', categories);
router.get('/categories/:id/products', validateParamsPath(schema), prodByCat);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);


//router.get('/products/:id', products.getProducts);
// router.route('/products')
//         .get(products);
module.exports = router;