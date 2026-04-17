import * as ProductModel from '../models/Product.js';

export const getProducts = (req, res) => {
  try {
    const products = ProductModel.getAllProducts();
    res.json({
      success: true,
      data: products,
      count: products.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const product = ProductModel.getProductById(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }
    
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const createProduct = (req, res) => {
  try {
    const { name, category, description, image, price } = req.body;
    
    if (!name || !category) {
      return res.status(400).json({
        success: false,
        message: 'Nombre y categoría son requeridos'
      });
    }
    
    const newProduct = ProductModel.addProduct({
      name,
      category,
      description,
      image,
      price: price || 0,
      inStock: true
    });
    
    res.status(201).json({
      success: true,
      data: newProduct,
      message: 'Producto creado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
