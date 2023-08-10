import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
} from 'react-icons/fa';
import { Dashboard } from "./Dashboard";

import "./sidebar.css"

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const toggle = () => setIsOpen(!isOpen);
  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  
  return (
    <div className="container-fluid sidebarinfo">
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <div className="top_section py-5">

          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Tech Wheels
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <div className={`link ${activeComponent === 'dashboard' ? 'active' : ''}`} onClick={() => handleMenuClick('dashboard')}>
          <div className="icon">
            <FaTh />
          </div>
          <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
            Dashboard
          </div>
        </div>


       
      </div>
      <div className="dashboard">
        {activeComponent === 'dashboard' && <Dashboard />}

      </div>
    </div>
  );
};

export default Sidebar;
