import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const HotelCard = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${id}`)
      .then((response) => response.json())
      .then((response) => setHotel(response));
  }, []);

  if (hotel === null) {
    return <h3>404 Not Found</h3>;
  }

  return (

    <>
      <section className="avail-hotel">
        <div className="avail-hotel-container">
          <NavLink to="/">Back</NavLink>
          <div className="avail-hotel-header color-blue">
            <h3>{hotel.name}</h3>
          </div>
          <div className="avail-hotel-item">
            <img className="avail-hotels-photo-big" key={hotel.id} src={hotel.imageUrl} alt="hotel_image" />
            <div className="avail-hotel-text">
              <p className="color-blue">
                City:
                {' '}
                {hotel.city}
              </p>
              <p className="color-blue">
                Country:
                {' '}
                {hotel.country}
              </p>
              <p className="avail-hotel-description">
                {hotel.name}
                {' '}
                is situated in
                {' '}
                {hotel.city}
                , a 10-minute walk from city center. The hotel offers guests a shared lounge area and an on-site
                restaurant. Free WiFi is featured throughout the property.
                All air-conditioned rooms at
                {' '}
                {hotel.name}
                {' '}
                come with a working desk and cable TV. The private bathrooms are fitted with showers.
                A continental or buffet breakfast can be enjoyed at the property. The restaurant at
                {' '}
                {hotel.name}
                {' '}
                specialises in international cuisine.
                The accommodation offers a business centre for guest use. The reception can provide advice on the area
                in order to help guests plan their day.
              </p>
              <div className="avail-hotel-intContainer">
                <div className="avail-hotel-intBox">
                  <h5>Most popular facilities</h5>
                  <ul>
                    <li>Parking Free</li>
                    <li>WiFi</li>
                    <li>Pets allowed</li>
                    <li>Family rooms</li>
                    <li>Non-smoking rooms</li>
                    <li>Restaurant Bar</li>
                  </ul>
                </div>
                <button type="submit" className="avail-hotel-button">Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelCard;
