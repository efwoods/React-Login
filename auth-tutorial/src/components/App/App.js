import React, { useState } from 'react';
import './App.css';
import Login from '../Login/Login'
import Product from '../Product/Product';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/preferences" element={<Preferences/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    // <Product/>
  );
}

export default App;
