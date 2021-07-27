import React from 'react';

// components
import HomeGuest from './HomeGuest';
import TopSection from './TopSection'

// styles
import '../styles/components/App.css';
import '../styles/components/HomeGuest.css';
import '../styles/components/HomeGuestContent.css';

const App = () => {
  return (
    <>
      <TopSection/>
      <HomeGuest/>
    </>
  );
}

export default App;
