// Simulamos una base de datos en memoria
let products = [
  {
    id: 1,
    name: 'Accesorios Automotrices Premium',
    category: 'accesorios',
    description: 'Complementos y equipamiento diseñado para mejorar la funcionalidad y estética de su vehículo',
    image: '/images/accessories.jpg',
    price: 0,
    inStock: true
  },
  {
    id: 2,
    name: 'Repuestos Honda Certificados',
    category: 'repuestos',
    description: 'Repuestos certificados diseñados específicamente para los requisitos de rendimiento únicos de Honda',
    image: '/images/honda-parts.jpg',
    price: 0,
    inStock: true
  }
];

let idCounter = 3;

export const getAllProducts = () => products;

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

export const addProduct = (product) => {
  const newProduct = {
    id: idCounter++,
    ...product
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id, updates) => {
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    products[index] = { ...products[index], ...updates };
    return products[index];
  }
  return null;
};

export const deleteProduct = (id) => {
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    return products.splice(index, 1);
  }
  return null;
};
