import React from 'react';

const SignOut = ({ setSignOut, setSignOutIsVisible }) => {
  const isSignedOut = (event) => {
    event.preventDefault();
    setSignOutIsVisible((prev) => !prev);
    setSignOut((prev) => !prev);
  };

  return (
    <>
      <form className="dropdownContainer">
        <h2>Sign out from your Account</h2>
        <button type="submit" className="dropdownBtn" onClick={isSignedOut}>Sign out</button>
      </form>
    </>
  );
};

export default SignOut;
