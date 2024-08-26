import React from 'react';
import Navi from '../components/Navi';
import './sidebar.css'; 


function Sidebar() {
    return (
        <div className="sidebar">
                <div className='navi'> <Navi/></div>
            <div className="menu-icon1">
                &#9776; {/* Hamburger menu icon */}
            </div>
            <ul className="menu-items">
                <li className="menu-item active">
                    <div className="menu-icon2">&#128248;</div> {/* Dashboard icon */}
                    <span className="menu-text">Dashboard</span>
                </li>
                <li className="menu-item">
                    <div className="menu-icon3">&#128101;</div> {/* Clients icon */}
                    <span className="menu-text">Clients</span>
                </li>
                <li className="menu-item">
                    <div className="menu-icon4">&#10067;</div> {/* Request icon */}
                    <span className="menu-text">Request</span>
                </li>
                <li className="menu-item">
                    <div className="menu-icon5">&#9993;</div> {/* Messages icon */}
                    <span className="menu-text">Messages</span>
                </li>
                <li className="menu-item">
                    <div className="menu-icon6">&#128295;</div> {/* Products icon */}
                    <span className="menu-text">Products</span>
                </li>
            </ul>
            <div className="footer-icon">
                &#128101; &#9881; {/* Footer icon */}
            </div>
        </div>
    );
}

export default Sidebar;
