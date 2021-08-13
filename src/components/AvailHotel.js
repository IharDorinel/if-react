import React from 'react';

const AvailHotel = ({ props }) => (
  <>
    {props.map((elem) => (
      <div className="avail-hotels-box" key={elem.id}>
        <a href="/" className="avail-hotels-photo-link">
          <img className="avail-hotels-photo" src={elem.imageUrl} alt="hotel_leopold" />
        </a>
        <p className="home-hotel-name home-text"><a href="#">{elem.name}</a></p>
        <p className="home-destination home-text">
          <a href="/">
            {elem.city}
            ,
            {' '}
            {elem.country}
          </a>
        </p>
      </div>
    ))}
  </>
);

export default AvailHotel;
