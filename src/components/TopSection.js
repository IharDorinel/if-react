import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// components
import AvailHotels from './AvailHotels';
import Filter from './Filter';
import SignIn from './SignIn';
import SignOut from './SignOut';

// images
import logoVector from '../styles/booking_images/logo_vector.svg';
import iconNight from '../styles/booking_images/Night.svg';
import iconAccount from '../styles/booking_images/AccountCircle.svg';
import google from '../styles/booking_images/google-play-badge.svg';
import appStore from '../styles/booking_images/App_Store_Badge.svg';
import kastelmeccano from '../styles/booking_images/kastelmeccano.jpg';

const TopSection = () => {
  const [currentValue, setCurrentValue] = useState('');

  const [signInIsVisible, setSignInIsVisible] = useState(false);

  const [signOutIsVisible, setSignOutIsVisible] = useState(false);

  const [signOut, setSignOut] = useState(false);

  const [filterIsVisible, setFilterIsVisible] = useState(false);

  const [datePickerIsVisible, setDatePickerIsVisible] = useState(false);

  const [checkUpper, setCheckUpper] = useState('check__label--desktop');

  const [data, setData] = useState([]);

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [adultNumber, setAdultNumber] = useState(1);

  const [childrenNumber, setChildrenNumber] = useState(0);

  const [roomNumber, setRoomNumber] = useState(1);

  const params = {
    search: currentValue,
    adults: adultNumber,
    rooms: roomNumber,
  };

  const url = new URL('https://fe-student-api.herokuapp.com/api/hotels');

  url.search = new URLSearchParams(params).toString();

  const setValue = (event) => {
    setCurrentValue(event.target.value);
  };

  const fetchData = () => fetch(url)
    .then((response) => response.json());

  const handleSearch = (event) => {
    event.preventDefault();

    if (!currentValue.trim()) {
      setData([]);
      return (
        alert('Please enter some value!')
      );
    }

    fetchData(currentValue)
      .then((data) => data.filter((obj) => obj?.country?.toLowerCase().includes(currentValue.toLowerCase())
        || obj?.city?.toLowerCase().includes(currentValue.toLowerCase())
        || obj?.name?.toLowerCase().includes(currentValue.toLowerCase())))
      .then((data) => setData(data))
      .catch(() => setData([]));
  };

  const availHotels = data.length > 0 ? <AvailHotels props={data} /> : null;

  const calendarShow = () => {
    setCheckUpper('check__label--desktop-up');
    setDatePickerIsVisible(true);
  };

  const filterShow = () => {
    setFilterIsVisible((prev) => !prev);
  };

  const showDropdown = (event) => {
    event.preventDefault();
    setSignInIsVisible((prev) => !prev);

    if (signOut) {
      setSignInIsVisible((prev) => !prev);
      setSignOutIsVisible((prev) => !prev);
    }
  };

  return (
    <>
      <header className="header">

        <div className="header-big-container" style={{ backgroundImage: { kastelmeccano } }}>
          <div className="header-big-upper">
            <a href="/">
              <img src={logoVector} className="image" alt="logoVector" />
            </a>

            <nav className="header-nav">
              <div className="header-nav-words">
                <a href="/">
                  <span id="stays" className="word">Stays</span>
                </a>
                <a href="/">
                  <span id="attractions" className="word">Attractions</span>
                </a>
              </div>
              <div className="header-nav-icons">
                <a href="/">
                  <img src={iconNight} className="icon-night icon" alt="iconNight" />
                </a>

                <img src={iconAccount} className="icon-account icon" alt="iconAccount" onClick={showDropdown} />
                {signOut
                  ? (
                    <p className="dropdownSignOut">Sign out</p>
                  )
                  : null}
              </div>
            </nav>
            <nav className="header-nav-adapt">
              <a href="/">
                <img src={iconNight} className="icon-night icon" alt="iconNight" />
              </a>
              <img src={iconAccount} className="icon-account icon" alt="iconAccount" />
            </nav>
          </div>

          {signInIsVisible
            ? (
              <SignIn setSignOut={setSignOut} setSignInIsVisible={setSignInIsVisible} />
            )
            : null}
          {signOutIsVisible
            ? (
              <SignOut setSignOut={setSignOut} setSignOutIsVisible={setSignOutIsVisible} />
            )
            : null}

          <p className="search-title">Discover stays to live, work or just relax</p>

          <div className="search-section">
            <form className="search-form">
              <div className="search-form__group destination">
                <svg className="loupe-icon destination__loupe-icon">
                  <use href="#loupe-icon" />
                </svg>
                <input
                  type="text"
                  value={currentValue}
                  name="destination"
                  id="destination"
                  className="destination__input"
                  placeholder=" "
                  required
                  onChange={setValue}
                />
                <label htmlFor="destination" className="destination__label">Your destination or hotel name</label>
              </div>
              <div className="search-form__group check" onClick={calendarShow}>

                { datePickerIsVisible
                  ? (
                    <div>
                      <DatePicker
                        wrapperClassName="datePicker"
                        selected={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      <DatePicker
                        wrapperClassName="datePicker"
                        selected={endDate}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={(date) => setEndDate(date)}
                      />
                    </div>
                  )
                  : null }

                <input type="text" className="check__input" name="check-in" id="check-in" placeholder=" " />
                <label htmlFor="check-in" className="check__label">Check-in</label>
                <input type="text" className="check__input" name="check-out" id="check-out" placeholder=" " />
                <label htmlFor="check-out" className="check__label">Check-out</label>
                <label htmlFor="check-in" className={checkUpper}>Check-in — Check-out</label>
              </div>
              <div className="search-form__group related" onClick={filterShow}>
                <span className="guests_count">
                  <span id="adults">
                    {adultNumber}
                    {' '}
                    Adults
                  </span>
                  <span id="children">
                    &nbsp;—&nbsp;
                    {childrenNumber}
                    {' '}
                    Children
                  </span>
                  <span id="rooms">
                    &nbsp;—&nbsp;
                    {roomNumber}
                    {' '}
                    Rooms
                  </span>
                </span>

              </div>
              <button type="submit" value="Search" className="submit-button" onClick={handleSearch}>Search</button>

              {filterIsVisible

                ? (
                  <Filter
                    adultNumber={adultNumber}
                    setAdultNumber={setAdultNumber}
                    childrenNumber={childrenNumber}
                    setChildrenNumber={setChildrenNumber}
                    roomNumber={roomNumber}
                    setRoomNumber={setRoomNumber}
                  />
                )

                : null}

            </form>
          </div>

          <div className="header-mobile-icons">
            <a href="/">
              <img
                className="google-play"
                src={google}
                alt="google-play"
              />
            </a>
            <a href="/">
              <img
                className="app-store"
                src={appStore}
                alt="App_Store"
              />
            </a>
          </div>
        </div>

      </header>

      {availHotels}
    </>

  );
};

export default TopSection;
