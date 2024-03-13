import React from 'react';

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) {
    return null; // If no order is selected, don't render anything
  }

  const { orderId, customerName, orderDate, status } = order;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Order Details</h2>
        <table className="order-details-table">
          <tbody>
            <tr>
              <td>Order ID:</td>
              <td>{orderId}</td>
            </tr>
            <tr>
              <td>Customer Name:</td>
              <td>{customerName}</td>
            </tr>
            <tr>
              <td>Order Date:</td>
              <td>{orderDate}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsModal;