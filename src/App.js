import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/resume';

function App() {
  return (
    <>
    <div className='rounded-3xl drop-shadow-md  max-w-4xl mx-auto '>
      <HashRouter >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  </>
  );
}

export default App;
