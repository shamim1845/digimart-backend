const express = require('express');
const { getAllProduct, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReviews } = require('../controllers/productController');
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');

const router = express.Router();

router.post('/admin/product/new', isAuthenticatedUser, authorizeRoles("admin"), createProduct)

router.get('/products', getAllProduct)

router.get('/product/:id', getProductDetails);

router.put('/admin/product/:id', isAuthenticatedUser, authorizeRoles("admin"), updateProduct)

router.delete('/admin/product/:id', isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

router.put("/product/review", isAuthenticatedUser, createProductReview)

router.get("/singlereview", getProductReviews)
router.delete("/singlereview", isAuthenticatedUser, deleteReviews)


module.exports = router;