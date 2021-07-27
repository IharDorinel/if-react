import React, { useState } from 'react';

const HotelRequest = ({RequestedHotels}) => {
  const [currentValue, setCurrentValue] = useState('');

  const SetValue = (event) => {
    setCurrentValue(event.target.value);
  };

  const SendRequest = () => {
    RequestedHotels(currentValue);
  }

  return (
    <div>
    <input type="text" onChange={SetValue}/>
    <button type="submit" onClick={SendRequest}>Search</button>
  </div>
  )
}

export default HotelRequest;