import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import '../../CssFiles/About.css'
const About=() => {
  return (
    <div className="about-container" id='abt'>
      <div className="image-wrapper">
        <img src="https://th.bing.com/th/id/R.1bc60bd3666fc3431cd8b1d1ac6c3d0a?rik=J5Pjsy7Dhb0HKg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f7%2f2%2f52697.jpg&ehk=bSFndpRj8KLi1JoWtUOLDphHPT%2bKC3nAvyYQgMDgSeQ%3d&risl=&pid=ImgRaw&r=0" alt="My Image" className='img' />
        <img src="https://th.bing.com/th/id/R.1bc60bd3666fc3431cd8b1d1ac6c3d0a?rik=J5Pjsy7Dhb0HKg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f7%2f2%2f52697.jpg&ehk=bSFndpRj8KLi1JoWtUOLDphHPT%2bKC3nAvyYQgMDgSeQ%3d&risl=&pid=ImgRaw&r=0" alt="My Image" className='abs-img' />
      </div>
      <div className="info-wrapper">
        <h2>The Leading Real Estate Rental Marketplace.</h2>
        <div className="info-wrapper-content">
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Location: My City</span>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>Phone: 123-456-7890</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>Email: myemail@example.com</span>
            </li>
          </ul>
          
          <br></br>
          <br></br>
          <br></br>

          
          <div >
            <ui className="icons">

              <li><i className="fas fa-home">iugi</i></li>
              <li><i className="fas fa-search"></i></li>
              <li><i className="fas fa-user"></i></li>
              <li><i className="fas fa-user"></i></li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;