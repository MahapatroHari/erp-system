import React from 'react';

const OrderDetails = ({ order }) => {
  if (!order) {
    return null; // If no order is selected, don't render anything
  }

  const { orderId, customerName, orderDate, status } = order;

  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      <div className="order-details">
        <p>Order ID: {orderId}</p>
        <p>Customer Name: {customerName}</p>
        <p>Order Date: {orderDate}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default OrderDetails;