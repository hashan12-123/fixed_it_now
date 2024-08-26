import React from "react";
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './admin/Login.js';
import Navi from './components/Navi.js'
import Dashboard from './admin/Dashboard.js';
import Sidebar from "./components/Sidebar.js";

function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/nav" element={<Navi/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/sidebar" element={<Sidebar/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;