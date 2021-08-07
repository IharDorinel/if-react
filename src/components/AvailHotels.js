import React, {useState, useEffect} from 'react';

// components
import AvailHotel from "./AvailHotel";


const AvailHotels = ({props}) => {


  return (
  <section className="avail-hotels filter-hidden">
    <div className="avail-hotels-container">
      <h1>Available Hotels</h1>
      <div className="avail-hotels-gallery">
        <AvailHotel props={props}/>
      </div>
    </div>
  </section>)

}

export default AvailHotels;









