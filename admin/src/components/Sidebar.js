import React, { useState } from 'react';

import './sidebar.css'; 

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className='navi'>
              
            </div>
            <ul className="menu-items">
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#128248;</div> {/* Dashboard icon */}
                    {!isCollapsed && <span className="menu-text">Dashboard</span>}
                </li>
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#128101;</div> {/* Clients icon */}
                    {!isCollapsed && <span className="menu-text">Clients</span>}
                </li>
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#10067;</div> {/* Request icon */}
                    {!isCollapsed && <span className="menu-text">Request</span>}
                </li>
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#9993;</div> {/* Messages icon */}
                    {!isCollapsed && <span className="menu-text">Messages</span>}
                </li>
                <li className={`menu-item ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="menu-icon">&#128295;</div> {/* Products icon */}
                    {!isCollapsed && <span className="menu-text">Products</span>}
                </li>
            </ul>
            <div className="footer-icon">
                &#128101; &#9881; {/* Footer icon */}
            </div>
            <div className="menu-icon1" onClick={toggleSidebar}>
                &#9776; {/* Hamburger menu icon */}
            </div>
        </div>
    );
}

export default Sidebar;
