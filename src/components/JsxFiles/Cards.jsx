import React from 'react';
import '../../CssFiles/Cards.css';

const Cards = () => {
  return (
    <div className="whole">
      <h2 className="hed">OUR MAIN FOCUS</h2>
    
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Product Title</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis nulla sed quam accumsan, eu porta nisi malesuada. Suspendisse potenti. Nam dignissim neque justo, vel auctor magna fringilla ut.
          </p>
          <p className="card-price">$99.99</p>
          <button className='btn'>Browse homes</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Product Title</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis nulla sed quam accumsan, eu porta nisi malesuada. Suspendisse potenti. Nam dignissim neque justo, vel auctor magna fringilla ut.
          </p>
          <p className="card-price">$99.99</p>
          <button className='btn'>Sell homes</button>

        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Product Title</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis nulla sed quam accumsan, eu porta nisi malesuada. Suspendisse potenti. Nam dignissim neque justo, vel auctor magna fringilla ut.
          </p>
          <p className="card-price">$99.99</p>
          <button className='btn'>Rent a home</button>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
