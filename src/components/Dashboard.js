import React, { useState, useEffect } from 'react';
import ordersData from '../data/orders';
import productsData from '../data/products';

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    // Calculate total products
    setTotalProducts(productsData.length);

    // Calculate total orders
    setTotalOrders(ordersData.length);
  }, []);

  // JSX to render metrics table
  const renderMetricsTable = () => (
    <div className="metrics-table">
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Products</td>
            <td>{totalProducts}</td>
          </tr>
          <tr>
            <td>Total Orders</td>
            <td>{totalOrders}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {renderMetricsTable()}
    </div>
  );
};

export default Dashboard;