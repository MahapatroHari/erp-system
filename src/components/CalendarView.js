import React, { useState } from 'react';
import ordersData from '../data/orders';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  
  // Function to format date to match orderDate format
  const formatISODate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Function to handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const formattedDate = formatISODate(date);

    // Filter orders based on selected date
    const ordersForDate = ordersData.filter(order => order.orderDate === formattedDate);
    setFilteredOrders(ordersForDate);
  };

  // JSX to display filtered orders
  const renderFilteredOrders = () => {
    if (filteredOrders.length > 0) {
      return (
        <div className="filtered-orders">
          <h3>Orders for {selectedDate ? formatISODate(selectedDate) : 'selected date'}:</h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.orderId}</td>
                  <td>{order.customerName}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <p>Please select a date to display orders.</p>;
    }
  };

  return (
    <div className="calendar-view-container">
      <h2>Calendar View</h2>
      <div className="calendar-select">
        Select a date:
        <input
          type="date"
          value={selectedDate ? formatISODate(selectedDate) : ''}
          onChange={(e) => handleDateSelect(new Date(e.target.value))}
        />
      </div>
      {renderFilteredOrders()}
    </div>
  );
};

export default CalendarView;