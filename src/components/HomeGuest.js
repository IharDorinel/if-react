import React, { useState, useEffect } from 'react';

// components
import HomeGuestContent from './HomeGuestContent';
import arrow from '../styles/booking_images/arrow.svg';

const HomeGuest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="homes-guests">
      <div className="homes-guests-container">
        <h1>Homes guests loves</h1>
        <div className="home-guests-gallery">
          <div className="home-switcher">
            <a href="#">
              <img className="home-switcher-left switcher" src={arrow} alt="arrow" />
            </a>
            <a href="#">
              <img className="home-switcher-right switcher" src={arrow} alt="arrow" />
            </a>
          </div>
          <HomeGuestContent props={data} />
        </div>
      </div>
    </section>
  );
};

export default HomeGuest;
