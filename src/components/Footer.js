import React from 'react';
import logo_vector_small from "../styles/booking_images/logo_vector_small.svg";


const Footer = () => {


  return (
    <>
    <footer className="footer">

  <div className="footer-big">
    <a href="#">
      <img src={logo_vector_small} className="footer-image" />

    </a>

    <div className="footer-container">
      <div className="footer-box">
        <a href="#">
          <p className="_font-weight-bold _underline">About</p></a>
        <a href="#">
          <p className="point">How Triphouse works</p></a>
        <a href="#">
          <p className="point">Careers</p></a>
        <a href="#">
          <p className="point">Privacy</p></a>
        <a href="#">
          <p className="point">Terms</p></a>
      </div>
      <div className="footer-box">
        <a href="#">
          <p className="_font-weight-bold _underline">Property types</p></a>
        <a href="#">
          <p className="point">Guest houses</p></a>
        <a href="#">
          <p className="point">Hotels</p></a>
        <a href="#">
          <p className="point">Apartments</p></a>
        <a href="#">
          <p className="point">Villas</p></a>
        <a href="#">
          <p className="point">Holiday homes</p></a>
        <a href="#">
          <p className="point">Hostels</p></a>
      </div>
      <div className="footer-box">
        <a href="#">
          <p className="_font-weight-bold _underline">Support</p></a>
        <a href="#">
          <p className="point">Contact Customer Service</p></a>
        <a href="#">
          <p className="point">FAQ</p></a>
      </div>

    </div>
    <div className="footer-footer col-lg-4 col-sm-12">
      <p>&copy 2020 Triphouse, Inc. All rights reserved</p>
    </div>
  </div>

</footer>
</>
  )
}

export default Footer;
