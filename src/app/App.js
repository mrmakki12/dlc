import React from 'react';
import './App.css';
// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import { Header } from '../Components/Header/Header.js';
import { DLC } from '../Components/DLC/DLC';
import { Cart } from '../Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<><Header /><DLC /></>} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
