import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">© {new Date().getFullYear()} OK Vet Clinic</div>
    </footer>
  );
}
