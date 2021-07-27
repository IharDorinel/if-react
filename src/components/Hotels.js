import React, { useState } from 'react';
import data from '../constants/content';
import HotelRequest from './HotelRequest';
import Hotel from '/Hotel';

const Hotels = () => {
  const [hotels, setHotels] = useState([data])


  return data.map(elem => {
    if (setHotels.includes(target.value)) {
      return (<div>
        <section className="avail-hotels filter-hidden">
          <div className="avail-hotels-container">
            <h1>Available Hotels</h1>

            <div id="avail-hotels-content" className="avail-hotels-gallery gallery">
              <Hotel RequestedHotels={}/>

            </div>
          </div>

        </section>
        </div>
      )
    }
  })

}
