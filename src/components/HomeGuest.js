import React from 'react';

// components
import HomeGuestContent from "./HomeGuestContent";

// constants
import data from '../constants/content';

const HomeGuest = () => {
  return (
    <section className="homes-guests">
      <div className="homes-guests-container">
        <h1>Homes guests loves</h1>
        <div className="home-guests-gallery gallery">
          <HomeGuestContent prop={data}/>
        </div>
      </div>
    </section>
  )
}

export default HomeGuest;
