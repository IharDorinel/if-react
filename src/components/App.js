import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import HomeGuest from './HomeGuest';
import HotelCard from './HotelCard';
import TopSection from './TopSection';
import Footer from './Footer';

// styles
import '../styles/components/App.css';
import '../styles/components/HomeGuest.css';
import '../styles/components/HomeGuestContent.css';
import '../styles/components/AvailHotels.css';
import '../styles/components/AvailHotel.css';
import '../styles/components/TopSection.css';
import '../styles/components/Filter.css';
import '../styles/components/Footer.css';
import '../styles/components/HotelCard.css';

const App = () => (
  <>
    <Router>
      <TopSection />
      <Switch>
        <Route exact path="/availHotels/:id">
          <HotelCard />
        </Route>
      </Switch>
      <HomeGuest />
      <Route exact path="/homeHotels/:id">
        <HotelCard />
      </Route>
      <Footer />
    </Router>
  </>
);

export default App;
