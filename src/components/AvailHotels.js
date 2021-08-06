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









  // const searchAvail = () => {
  //   if (data.includes(currentValue)) {
  //     return (
  //       <section className="avail-hotels filter-hidden">
  //         <div className="avail-hotels-container">
  //           <h1>Available Hotels</h1>
  //           <div className="avail-hotels-gallery">
  //             <AvailHotel props={data}/>
  //           </div>
  //         </div>
  //       </section>
  //     )
  //   } else {
  //     return (
  //       <h1>Sorry, there are no hotels on your request</h1>
  //     )
  //   }
  // }
  // return null;





// data.filter(obj => obj?.country?.includes(currentValue) || obj?.city?.includes(currentValue) ||
//   obj?.name?.includes(currentValue))