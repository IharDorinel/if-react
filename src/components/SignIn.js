import React, { useEffect, useState } from 'react';

const SignIn = ({ setSignOut, setSignInIsVisible }) => {
  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState('Email area should be filled');

  const [formValid, setFormValid] = useState(false);

  const [password, setPassword] = useState('');

  const [passwordError, setPasswordError] = useState('Password area should be filled');

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const isSignedIn = (event) => {
    event.preventDefault();
    setSignInIsVisible((prev) => !prev);
    setSignOut((prev) => !prev);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError('Email area should be filled');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 4 || event.target.value.length > 8) {
      setPasswordError('Password should include from 4 to 8 characters');
      if (!event.target.value) {
        setPasswordError('Password area should be filled');
      }
    } else {
      setPasswordError('');
    }
  };

  return (
    <>
      <form className="dropdownContainer">
        <h2>Sign in to your Account</h2>
        <div className="signInEmailError">{emailError}</div>
        <input type="email" value={email} className="dropdownInput" placeholder="Enter your email" onChange={(e) => handleEmail(e)} required />
        <br />
        <div className="signInPasswordError">{passwordError}</div>
        <input type="password" value={password} className="dropdownInput" placeholder="Enter your password" onChange={(e) => handlePassword(e)} required />
        <br />
        <button type="submit" className="dropdownBtn" onClick={isSignedIn} disabled={!formValid}>Sign in</button>
      </form>
    </>
  );
};

export default SignIn;
