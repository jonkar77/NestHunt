import React from 'react';
import '../../CssFiles/Filter.css';

const Filter = () => {
  return (
    <div className='filter'>
      <div className='filter-container'>
        
        <div className='dropdowns-container'>
          <div className='dropdown'>
            <button className='dropbtn'>For sale</button>
            <div className='dropdown-content'>
              <a href='#'>Sale</a>
              <a href='#'>Rent</a>
            </div>
          </div>
          <div className='dropdown'>
            <button className='dropbtn'>Price</button>
            <div className='dropdown-content'>
              <a href='#'>Option 1</a>
              <a href='#'>Option 2</a>
              <a href='#'>Option 3</a>
            </div>
          </div>
          <div className='dropdown'>
            <button className='dropbtn'>Bedrooms</button>
            <div className='dropdown-content'>
              <a href='#'>1</a>
              <a href='#'>2</a>
              <a href='#'>3</a>
            </div>
          </div>
          <div className='dropdown'>
            <button className='dropbtn'>Area</button>
            <div className='dropdown-content'>
              <a href='#'>Option 1</a>
              <a href='#'>Option 2</a>
              <a href='#'>Option 3</a>
            </div>
          </div>
        </div>
        <div className='search-container'>
          <button type='submit'>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
