import React from 'react';
import '../../CssFiles/Footer.css';
// import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

const Footer=() => {
  // const navigate = useNavigate();
  
  return (
    <div className="foot-container">
      <div className="look">
        <p
          className="quest">Need a Broker? We've got you covered</p>
        <div className="click">
          <a href='/broker'>
          <button className="hit" >
            Explore
          </button></a>
        </div>
      </div>
      <div class="footer">
        <div class="footer-top">
          <div class="container">

            <div class="footer-brand">

              <a href="#" class="logo">
              </a>

              <p class="section-text">
                Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
              </p>

              <ul class="contact-list">

                <li>
                  <a href="#" class="contact-link">
                    <ion-icon name="location-outline"></ion-icon>

                    <address>Brooklyn, New York, United States</address>
                  </a>
                </li>

                <li>
                  <a href="tel:+0123456789" class="contact-link">
                    <ion-icon name="call-outline"></ion-icon>

                    <span>+0123-456789</span>
                  </a>
                </li>

                <li>
                  <a href="mailto:contact@homeverse.com" class="contact-link">
                    <ion-icon name="mail-outline"></ion-icon>

                    <span>contact@homeverse.com</span>
                  </a>
                </li>

              </ul>

              <ul class="social-list">

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>

              </ul>

            </div>

            <div class="footer-link-box">

              <ul class="footer-list">

                <li>
                  <p class="footer-list-title">Company</p>
                </li>

                <li>
                  <a href="#" class="footer-link">About</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Blog</a>
                </li>

                <li>
                  <a href="#" class="footer-link">All Products</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Locations Map</a>
                </li>

                <li>
                  <a href="#" class="footer-link">FAQ</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Contact us</a>
                </li>

              </ul>


              <ul class="footer-list">

                <li>
                  <p class="footer-list-title">Featured Cities</p>
                </li>

                <li>
                  <a href="#" class="footer-link">New Delhi</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Jaipur</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Ahmedabad</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Hyderabad</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Bengaluru</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Chennai</a>
                </li>


              </ul>

              <ul class="footer-list">

                <li>
                  <p class="footer-list-title">Customer Care</p>
                </li>

                <li>
                  <a href="#" class="footer-link">Login</a>
                </li>

                <li>
                  <a href="#" class="footer-link">My account</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Wish List</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Order tracking</a>
                </li>

                <li>
                  <a href="#" class="footer-link">FAQ</a>
                </li>

                <li>
                  <a href="#" class="footer-link">Contact us</a>
                </li>

              </ul>


            </div>

          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">

            <p class="copyright">
              &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>

          </div>
        </div>

      </div>
    </div>
  )
};

export default Footer;
