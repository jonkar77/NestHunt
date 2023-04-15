import React from 'react';
import Filter from '../../components/JsxFiles/Filter'
import '../../CssFiles/HouseGrid.css'


const HouseGrid=() => {
  const houses=[
    { id: 1, img: '/house1.jpg', price: '$500,000' },
    { id: 2, img: '/house2.jpg', price: '$750,000' },
    { id: 3, img: '/house3.jpg', price: '$1,000,000' },
    { id: 4, img: '/house4.jpg', price: '$1,500,000' },
    { id: 5, img: '/house5.jpg', price: '$2,000,000' },
    { id: 7, img: '/house6.jpg', price: '$2,500,000' },
    { id: 8, img: '/house6.jpg', price: '$2,500,000' },
    { id: 9, img: '/house6.jpg', price: '$2,500,000' },
    { id: 10, img: '/house6.jpg', price: '$2,500,000' },
    { id: 11, img: '/house6.jpg', price: '$2,500,000' },
    { id: 12, img: '/house6.jpg', price: '$2,500,000' },
    { id: 13, img: '/house6.jpg', price: '$2,500,000' },
    { id: 14, img: '/house6.jpg', price: '$2,500,000' },
    { id: 15, img: '/house6.jpg', price: '$2,500,000' },
    { id: 16, img: '/house6.jpg', price: '$2,500,000' },
  ];

  return (
    <div className='house-grid'>
      <Filter />
      {houses.map((house) => (
        <div key={house.id} className='house-card'>
          <img src={house.img} alt='House' className='house-image' />
          <div className='house-details'>
            <span className='house-price'>{house.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseGrid;
