import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, initialProduct }) => {
  const [product, setProduct] = useState({ name: '', category: '', price: '', stockQuantity: '' });

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: '', category: '', price: '', stockQuantity: '' });
  };

  const formTitle = initialProduct ? 'Edit Product' : 'Add New Product';
  const submitButtonLabel = initialProduct ? 'Save Changes' : 'Submit';

  return (
    <div className="ProductForm-container">
      <form onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <input type="text" id="productName" name="name" placeholder="Name" value={product.name} onChange={handleChange} required autoComplete="name" />
        <input type="text" id="productCategory" name="category" placeholder="Category" value={product.category} onChange={handleChange} required autoComplete="category" />
        <input type="number" id="productPrice" name="price" placeholder="Price" value={product.price} onChange={handleChange} required autoComplete="price" />
        <input type="number" id="productStockQuantity" name="stockQuantity" placeholder="Stock Quantity" value={product.stockQuantity} onChange={handleChange} required autoComplete="stock-quantity" />
        <button type="submit">{submitButtonLabel}</button>
      </form>
    </div>
  );
};

export default ProductForm;