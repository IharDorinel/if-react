import React from 'react';


// components
import HomeGuest from './HomeGuest';
import Layout from "./Layout";


// styles
import '../styles/components/App.css';
import '../styles/components/HomeGuest.css';
import '../styles/components/HomeGuestContent.css';
import '../styles/components/AvailHotels.css';
import '../styles/components/AvailHotel.css';
import '../styles/components/TopSection.css';
import '../styles/components/Filter.css';
import '../styles/components/Footer.css';
import '../styles/components/Hotel.css';



const App = () => {


  return (


        <Layout>
          <>

        <HomeGuest />

            </>
        </Layout>


  );
}

export default App;
