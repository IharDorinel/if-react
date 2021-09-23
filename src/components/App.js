import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// components
import TopSection from './TopSection';
import HomeGuest from './HomeGuest';
import Footer from './Footer';
import HotelCard from './HotelCard';

// styles
import '../styles/components/App.css';
import '../styles/components/HomeGuest.css';
import '../styles/components/HomeGuestContent.css';
import '../styles/components/AvailHotels.css';
import '../styles/components/AvailHotel.css';
import '../styles/components/TopSection.css';
import '../styles/components/Filter.css';
import '../styles/components/Footer.css';
import '../styles/components/SignIn.css';
import '../styles/components/HotelCard.css';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <>
      <Router>
        <TopSection currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <Route exact path="/availHotels/:id">
          <HotelCard currentTheme={currentTheme} />
        </Route>

        <HomeGuest currentTheme={currentTheme} />

        <Route exact path="/homeHotels/:id">
          <HotelCard currentTheme={currentTheme} />
        </Route>

        <Footer />
      </Router>
    </>
  );
};

export default App;
