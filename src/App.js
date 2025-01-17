import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import BookingPage from './BookingPage';

const App = () => {
  return (
    <div>
      <Header />
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
