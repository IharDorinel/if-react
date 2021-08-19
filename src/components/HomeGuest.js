import React, { Component } from 'react';

// components
import HomeGuestContent from './HomeGuestContent';

export default class HomeGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  data = this.state.data;

  render() {
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
}
