import React from 'react';
import "../admin/dashboard.css";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VerifiedIcon from '@mui/icons-material/Verified';
import flogo from "../image/logo.jpg";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const data = {
  labels: ['2012', '2013', '2014', '2015', '2016', '2017'],
  datasets: [
    {
      label: 'User Activity',
      data: [15000, 18000, 16000, 19900, 22000, 23000],
      fill: false,
      backgroundColor: 'yellow',
      borderColor: 'black',
    },
  ],
};

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo1">
        <img src={flogo} width={30} height={30} alt="Company Logo" />
        </div>
        <ul className="sidebar-menu">
        <br/><br/>
          <li className="menu-item">Dashboard</li>
          <br/>
          <li className="menu-item">Clients</li>
          <br/>
          <li className="menu-item">Request</li>
          <br/>
          <li className="menu-item">Messages</li>
          <br/>
          <li className="menu-item">Products</li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <h2>Dashboard</h2>
          <div className="header-right">
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Avatar>Admin</Avatar>
          </div>
        </div>
        <div className="stats">
          <div className="stat-card1">
            <h3>15</h3>
            <p>New Requests</p>
            <AssignmentIcon />
          </div>
          <div className="stat-card2">
            <h3>08</h3>
            <p>Available Products</p>
            <ShoppingCartIcon />
          </div>
          <div className="stat-card3">
            <h3>18</h3>
            <p>Request Products</p>
            <AssignmentIcon />
          </div>
          <div className="stat-card4">
            <h3>05</h3>
            <p>Sold Products</p>
            <VerifiedIcon />
          </div>
        </div>
        <div className="charts">
          <div className="user-activity">
            <h3>User Activity</h3>
            <Line data={data} />
          </div>
          <div className="tasks">
            <h3>Tasks</h3>
            <div className="task-chart">
              <div className="task-chart-inner">
                <div className="completed"></div>
                <div className="ongoing"></div>
              </div>
              <p>25% Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
