import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import CalendarView from './components/CalendarView';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div>
        <div id="menuToggle" onClick={toggleMenu}>
          <input type="checkbox" checked={isOpen} readOnly />
          <label>
            <span className="menuIcon"></span>
          </label>
          <ul id="menu" style={{ display: isOpen ? 'block' : 'none' }}>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu}>Products Management</Link>
            </li>
            <li>
              <Link to="/orders" onClick={toggleMenu}>Orders Management</Link>
            </li>
            <li>
              <Link to="/calendar" onClick={toggleMenu}>Calendar View</Link>
            </li>
          </ul>
        </div>
        <div id="regularNavigation" className="navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products Management</Link>
          <Link to="/orders">Orders Management</Link>
          <Link to="/calendar">Calendar View</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/calendar" element={<CalendarView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
