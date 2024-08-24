import React from "react";
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './admin/Login.js';
import Dashboard from './admin/Dashboard.js';

function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;