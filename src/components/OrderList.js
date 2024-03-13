import React, { useState } from 'react';
import ordersData from '../data/orders';
import OrderDetailsModal from './OrderDetailsModal';

const OrderList = () => {
  const [orders, setOrders] = useState(ordersData);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStatusChange = (e, orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: e.target.value } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    setSelectedOrder(null); // Clear selected order details if it's deleted
  };

  return (
    <div>
      <h1>Orders Management</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>
                <select value={order.status} onChange={(e) => handleStatusChange(e, order.id)}>
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleViewDetails(order)}>View Details</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <OrderDetailsModal order={selectedOrder} onClose={handleCloseModal} />}
    </div>
  );
};

export default OrderList;