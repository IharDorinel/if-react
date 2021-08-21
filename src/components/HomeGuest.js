import React, { useState, useEffect } from 'react';

// components
import HomeGuestContent from './HomeGuestContent';

const HomeGuest = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((data) => setData(data));
  }, []);

  console.log(data)
    return (
      <section className="homes-guests">
        <div className="homes-guests-container">
          <h1>Homes guests loves</h1>
          <div className="home-guests-gallery">
            <HomeGuestContent props={data} />
          </div>
        </div>
      </section>
    );
  }

export default HomeGuest;