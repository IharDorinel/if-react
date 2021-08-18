import React, { Component } from 'react';

export default class AvailHotels extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this.props;

    return (
      <section className="avail-hotels filter-hidden">
        <div className="avail-hotels-container">
          <h1>Available Hotels</h1>
          <div className="avail-hotels-gallery">
            {props.map((elem) => (
              <div className="avail-hotels-box" key={elem.id}>
                <a href="/" className="avail-hotels-photo-link">
                  <img className="avail-hotels-photo" src={elem.imageUrl} alt="hotel_leopold" />
                </a>
                <p className="home-hotel-name home-text"><a href="/">{elem.name}</a></p>
                <p className="home-destination home-text">
                  <a href="/">
                    {elem.city}
                    ,
                    {' '}
                    {elem.country}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
