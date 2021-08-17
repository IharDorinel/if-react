import React from 'react';
import { BrowserRouter as Router,  Switch, Route, Link } from "react-router-dom";


// components
import AvailHotel from "./AvailHotel";
import Hotel from "./Hotel";


const AvailHotels = ({props}) => {


  return (

  <section className="avail-hotels filter-hidden">
    <div className="avail-hotels-container">
      <h1>Available Hotels</h1>
      <div className="avail-hotels-gallery">


        <AvailHotel props={props}/>


      </div>
    </div>
  </section>

    )

}

export default AvailHotels;









