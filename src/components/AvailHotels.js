import React from 'react';
import AvailHotel from './AvailHotel';

const AvailHotels = ({ props, currentTheme }) => (

  <section
    css={(theme) => ({
      backgroundColor: theme[currentTheme].colors.primary,
    })}
    className="filter-hidden"
  >
    <div className="avail-hotels-container">
      <h1
        css={(theme) => ({
          color: theme[currentTheme].colors.secondary,
        })}
      >
        Available Hotels
      </h1>
      <div className="avail-hotels-gallery">
        <AvailHotel props={props} />
      </div>
    </div>
  </section>
);

export default AvailHotels;
