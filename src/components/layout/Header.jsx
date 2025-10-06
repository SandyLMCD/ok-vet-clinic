import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h2 className="site-title">OK Vet Clinic</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
