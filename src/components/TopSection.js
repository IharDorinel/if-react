import React, {Component} from 'react';

// components
import AvailHotels from "./AvailHotels";

// images
import logo_vector from "../styles/booking_images/logo_vector.svg";
import icon_night from "../styles/booking_images/Night.svg";
import icon_account from "../styles/booking_images/AccountCircle.svg";
import kastelmeccano from "../styles/booking_images/kastelmeccano.jpg"
import google from "../styles/booking_images/google-play-badge.svg";
import appStore from "../styles/booking_images/App_Store_Badge.svg";


export default class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    value: '',
      data: [],
      setValue: this.setValue.bind(this),
      handleSearch: this.handleSearch.bind(this)
    }
  };


  setValue = (event) => {
    this.setState({value: event.target.value})
  };

  fetchData() {
    return fetch('https://fe-student-api.herokuapp.com/api/hotels')
      .then((response) => response.json())
  }

  handleSearch = (event) => {
    event.preventDefault();
    if(!this.state.value) {
      this.setState( { data: [] });
      return;
    }

    this.fetchData(this.state.value)
      .then(data => data.filter(obj => obj?.country?.toLowerCase().includes(this.state.value.toLowerCase()) || obj?.city?.toLowerCase().includes(this.state.value.toLowerCase()) ||
        obj?.name?.toLowerCase().includes(this.state.value.toLowerCase())))
      .then(data => this.setState({data: data}));
  };


    render() {
    return (
      <>
        <header className="header">


          <div className="header-big-container" style={{backgroundImage: {kastelmeccano}}}>
            <div className="header-big-upper">
              <a href="#">
                <img src={logo_vector} className="image" alt="logo_vector"/>
              </a>

              <nav className="header-nav">
                <div className="header-nav-words">
                  <a href="#">
                    <span id="stays" className="word">Stays</span>
                  </a>
                  <a href="#">
                    <span id="attractions" className="word">Attractions</span>
                  </a>
                </div>
                <div className="header-nav-icons">
                  <a href="#">
                    <img src={icon_night} className="icon-night" alt="icon_night"/>
                  </a>
                  <a href="#">
                    <img src={icon_account} className="icon-account" alt="icon_account"/>
                  </a>
                </div>
              </nav>
              <nav className="header-nav-adapt">
                <a href="#">
                  <img src={icon_night} className="icon-night icon" alt="icon_night"/>
                </a>
                <a href="#">
                  <img src={icon_account} className="icon-account icon" alt="icon_account"/>
                </a>
              </nav>
            </div>


            <p className="search-title">Discover stays to live, work or just relax</p>

            <div className="search-section">
              <form className="search-form">
                <div className="search-form__group destination">
                  <svg className="loupe-icon destination__loupe-icon">
                    <use href="#loupe-icon"/>
                  </svg>
                  <input type="text" value={this.state.value} name="destination" id="destination" className="destination__input" placeholder=" "
                         required onChange={this.state.setValue}/>
                  <label htmlFor="destination" className="destination__label">Your destination or hotel name</label>
                </div>
                <div className="search-form__group check">
                  <input type="text" className="check__input" name="check-in" id="check-in" placeholder=" "/>
                  <label htmlFor="check-in" className="check__label">Check-in</label>
                  <input type="text" className="check__input" name="check-out" id="check-out" placeholder=" "/>
                  <label htmlFor="check-out" className="check__label">Check-out</label>
                  <label htmlFor="check-in" className="check__label check__label--desktop">Check-in — Check-out</label>
                </div>
                <div className="search-form__group related">
                    <span className="guests_count">
                    <span id="adults">&nbsp;&nbsp;1 Adult</span>
                    <span id="children">&nbsp;—&nbsp;0 Children</span>
                    <span id="rooms">&nbsp;—&nbsp;1 Room</span>
                </span>

                </div>
                <button type="submit" value="Search" className="submit-button" onClick={this.state.handleSearch}>Search</button>
              </form>
            </div>
            <div className="header-mobile-icons">
              <a href="#">
                <img
                  className="google-play"
                  src={google} alt="google-play"/>
              </a>
              <a href="#">
                <img className="app-store"
                     src={appStore} alt="App_Store"/>
              </a>
            </div>
          </div>

        </header>

        {this.state.data.length > 0 ? <AvailHotels props={this.state.data} /> : null}

      </>

    )
  }

}
