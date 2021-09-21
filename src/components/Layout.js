import React from 'react';
import TopSection from "./TopSection";
import Footer from "./Footer";

const Layout = (props) => {

  return (
    <>

      <TopSection/>

    {props.children}

      <Footer/>

    </>
  )
}

export default Layout;