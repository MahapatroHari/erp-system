import React, { useState } from 'react';
import productsData from '../data/products';
import ProductForm from './ProductForm';

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleEditClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    setSelectedProductId(null);
  };

  const handleSubmit = (product) => {
    if (selectedProductId) {
      // Edit existing product
      const updatedProducts = products.map(p => (p.id === selectedProductId ? product : p));
      setProducts(updatedProducts);
    } else {
      // Add new product
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setSelectedProductId(null);
  };

  return (
    <div>
      <h1>Product List</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button onClick={() => handleEditClick(product.id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductForm
        onSubmit={handleSubmit}
        initialProduct={selectedProductId ? products.find(product => product.id === selectedProductId) : null}
      />
    </div>
  );
};

export default ProductList;