import React from 'react';

// components

// eslint-disable-next-line import/no-named-as-default-member
import TopSection from './TopSection';
import HomeGuest from './HomeGuest';

// styles
import '../styles/components/App.css';
import '../styles/components/HomeGuest.css';
import '../styles/components/HomeGuestContent.css';
import '../styles/components/AvailHotels.css';
import '../styles/components/AvailHotel.css';
import '../styles/components/TopSection.css';

const App = () => (
  <>
    <TopSection />
    <HomeGuest />
  </>
);

export default App;
