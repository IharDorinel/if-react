import React, {useState, useEffect, useRef} from 'react';
import AvailHotels from "./AvailHotels";


import google from "../styles/booking_images/google-play-badge.svg";
import appStore from "../styles/booking_images/App_Store_Badge.svg";
import kastelmeccano from "../styles/booking_images/kastelmeccano.jpg";


const TopSection = (props) => {


  const [currentValue, setCurrentValue] = useState('');

  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels')
      .then((response) => response.json())
      .then(data => data.filter(obj => obj?.country?.includes(currentValue) || obj?.city?.includes(currentValue) ||
        obj?.name?.includes(currentValue)))
      .then(data => setData(data))
  }, [currentValue]);

  // const inputEl = useRef('');


  const setValue = (event) => {
   setCurrentValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // const valueInput = inputEl.current.value;
    setIsVisible(true);

  };


  return (
    <>
    <header className="header">


      <div className="header-big-container" style ={{
        backgroundImage: {kastelmeccano} }}>
        <div className="header-big-upper">
          <a href="#">
            <svg className="image">
              <use href="#logo-vector"/>
            </svg>
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
                <svg className="icon-night">
                  <use href="#icon-night"/>
                </svg>
              </a>
              <a href="#">
                <svg className="icon-account">
                  <use href="#icon-account"/>
                </svg>
              </a>
            </div>
          </nav>
          <nav className="header-nav-adapt">
            <a href="#">
              <svg className="icon-night icon">
                <use href="#icon-night"/>
              </svg>
            </a>
            <a href="#">
              <svg className="icon-account icon">
                <use href="#icon-account"/>
              </svg>
            </a>
            <a href="#">
              <svg className="menu-icon icon">
                <use href="#menu-icon"/>
              </svg>
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
            <input type="text" value={currentValue} name="destination" id="destination" className="destination__input" placeholder=" "
                   required onChange={setValue}/>
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
          <button type="submit" value="Search" className="submit-button" onClick={handleSearch}>Search</button>
        </form>
      </div>
        <div className="header-mobile-icons">
          <a href="#">
            <img className="google-play"
                 src={google} alt="google-play"/>
          </a>
          <a href="#">
            <img className="app-store"
                 src={appStore}
                 alt="App_Store"/>
          </a>
        </div>
      </div>

    </header>
      { isVisible ? <AvailHotels props={data} /> : null}
    </>
  )
}

export default TopSection;

