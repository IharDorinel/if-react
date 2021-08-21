import React from 'react';
import AvailHotel from "./AvailHotel";

const AvailHotels = ({ props }) => (

  <section className="avail-hotels filter-hidden">
    <div className="avail-hotels-container">
      <h1>Available Hotels</h1>
      <div className="avail-hotels-gallery">
        <AvailHotel props={props}/>
      </div>
    </div>
  </section>)

export default AvailHotels;