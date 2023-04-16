import '../../CssFiles/NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar' >
      <div className='navbar-container'>
        <div className='nav-links-container'>
          <ul className='nav-links'>
            <li className='nav-link'>
              <Link to='/#buy'>Home</Link>
            </li>
            <li className='nav-link'>
              <a href='/#cad'>Services</a>
            </li>
            <li className='nav-link'>
              <a href='/#abt'>About</a>
            </li>
            <li className='nav-link'>
              <a href='/#cd'>Listings</a>
            </li>
          </ul>
        </div>
        <div className='logo-container'>
          <img src="/assets/nhlogo.png" alt='Logo' className='logo' />
        </div>
    
        <div className='actions-container'>
        <button className='hit'>
            <a href='#login'>Model</a>
          </button>
          <button className='btn-1'>
            <a href='#login'>Login</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
