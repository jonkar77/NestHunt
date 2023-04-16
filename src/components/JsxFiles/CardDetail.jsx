import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../CssFiles/CardDetail.css';

const CardDetail = () => {
  return (
    <div className="card-box" id='cd'>
      <div className="card">
        <div className="card-image">
          <img src="https://example.com/image1.jpg" alt="Product 1" />
        </div>
        <div className="card-body">
          <h2 className="card-title">Product Title 1</h2>
          <div className="card-info">
            <p className="card-price">$99.99</p>
            <div className="card-icons">
              <i className="fa fa-bed"></i>
              <i className="fa fa-bath"></i>
              <i className="fa fa-car"></i>
            </div>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis nulla sed quam accumsan, eu porta nisi malesuada. Suspendisse potenti. Nam dignissim neque justo, vel auctor magna fringilla ut.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="https://example.com/image2.jpg" alt="Product 2" />
        </div>
        <div className="card-body">
          <h2 className="card-title">Product Title 2</h2>
          <div className="card-info">
            <p className="card-price">$99.99</p>
            <div className="card-icons">
              <i className="fa fa-bed"></i>
              <i className="fa fa-bath"></i>
              <i className="fa fa-car"></i>
            </div>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis nulla sed quam accumsan, eu porta nisi malesuada. Suspendisse potenti. Nam dignissim neque justo, vel auctor magna fringilla ut.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="https://example.com/image3.jpg" alt="Product 3" />
        </div>
        <div className="card-body">
          <h2 className="card-title">Product Title 3</h2>
          <div className="card-info">
            <p className="card-price">$99.99</p>
            <div className="card-icons">
              <i className="fa fa-bed"></i>
              <i className="fa fa-bath"></i>
              <i className="fa fa-car"></i>
            </div>
          </div>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis nulla sed quam accumsan, eu porta nisi malesuada. Suspendisse potenti. Nam dignissim neque justo, vel auctor magna fringilla ut.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default CardDetail;
