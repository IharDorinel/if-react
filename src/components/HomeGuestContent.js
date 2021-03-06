import React, { Component } from 'react';

export default class HomeGuestContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this.props;

    return (
      <>
        {props.map((elem) => (
          <div className="home-guests-box" key={elem.id}>
            <a href="/" className="home-guests-photo-link">
              <img className="home-guests-photo" src={elem.imageUrl} alt={elem.name} />
            </a>
            <p className="home-hotel-name home-text">
              <a href="/">{elem.name}</a>
            </p>
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
      </>
    );
  }
}
