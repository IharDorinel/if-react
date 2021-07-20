import React from 'react';

const HomeGuestContent = ({prop}) => {
  return (
    <>
      {prop.map(el =>
        <div className="home-guests-box box" key={el.id}>
          <a href="/" className="home-guests-photo-link">
            <img className="home-guests-photo photo" src={el.imageUrl} alt={el.name}/>
          </a>
          <p className="home-hotel-name home-text">
            <a href="/">{el.name}</a>
          </p>
          <p className="home-destination home-text">
            <a href="/">{el.city}, {el.country}</a>
          </p>
        </div>
      )}
    </>
  )
}

export default HomeGuestContent;