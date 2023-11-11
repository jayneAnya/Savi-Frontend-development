import React from 'react';
import heroPhoto from '../../assets/images/heroPhoto.png';
import '../../assets/scss/heroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className='t-heading'>
        <h1 className="hero-heading">
            Achieve Financial Success with <span style={{ color: '#B5179E' }}>Savi: </span> 
            The Future of <span style={{ color: '#B5179E' }}>Smart Savings</span>.
        </h1>
        </div>
        <div className='h-subheading'>
        <p className="hero-subheading">
            Experience the convenience of secure group savings 
            and personalized savings plans with Savi. Take control 
            of your finances and unlock a brighter financial future.
        </p>
        </div>
        <div className='cta-container'>
        <button className="cta-button">Get Started</button>
        </div>
      </div>
      <div className='img-frame'>
      <img src={heroPhoto} alt="heroPhoto.png" className="image" />
      </div>
    </section>
  );
}

export default HeroSection;
