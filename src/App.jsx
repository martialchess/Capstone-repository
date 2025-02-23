import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
