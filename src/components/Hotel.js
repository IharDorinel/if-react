import React from 'react';
import data from '../constants/content';

const Hotel = ({RequestedHotels}) => {

  return (
    <div className="home-guests-box box">
      <a href="#" className="home-guests-photo-link">
        <img className="home-guests-photo photo" src=${elem.imageUrl} alt="hotel_leopold">
      </a>
      <p className="home-hotel-name home-text"><a href="#">${elem.name}</a></p>
      <p className="home-destination home-text"><a href="#">${elem.city}, ${elem.country}</a></p>
    </div>

)
}

export default Hotel;