import express from 'express';
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';

const router = express.Router();

// GET todos los productos
router.get('/', getProducts);

// GET producto por ID
router.get('/:id', getProductById);

// POST nuevo producto
router.post('/', createProduct);

export default router;
