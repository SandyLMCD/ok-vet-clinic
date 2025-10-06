import React from 'react';
import hero from '../../assets/images/home-hero.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className="page home-page">
      <h1>Welcome to OK Vet Clinic</h1>
      <img src={hero} alt="Clinic team" className="home-hero" />
      <p>This is the Home page. Replace with your content.</p>
    </div>
  );
}
