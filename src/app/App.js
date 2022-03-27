import React from 'react';
import './App.css';
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import { Header } from '../Components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
        </Routes>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
