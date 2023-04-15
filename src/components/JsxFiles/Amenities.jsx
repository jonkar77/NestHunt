import React from 'react';
import '../../CssFiles/Amenities.css';

const Amenities = () => {
  return (
    <div className="amenities-container">
      <h1>Amenities</h1>
      <div className="amenities-grid">
        <div className="amenity">
          <i className="fas fa-swimming-pool"></i>
          <p>Swimming Pool</p>
        </div>
        <div className="amenity">
          <i className="fas fa-utensils"></i>
          <p>Restaurant</p>
        </div>
        <div className="amenity">
          <i className="fas fa-futbol"></i>
          <p>Sports Field</p>
        </div>
        <div className="amenity">
          <i className="fas fa-spa"></i>
          <p>Spa</p>
        </div>
        <div className="amenity">
          <i className="fas fa-glass-cheers"></i>
          <p>Bar</p>
        </div>
        <div className="amenity">
          <i className="fas fa-gamepad"></i>
          <p>Game Room</p>
        </div>
        <div className="amenity">
          <i className="fas fa-shopping-bag"></i>
          <p>Retail Shops</p>
        </div>
        <div className="amenity">
          <i className="fas fa-concierge-bell"></i>
          <p>Concierge</p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
