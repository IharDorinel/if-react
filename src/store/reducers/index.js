import React from 'react';
import { combineReducers } from 'redux';

import { adultReducer } from './adultReducer';
import { roomReducer } from './roomReducer';
import { childrenReducer } from './childrenReducer';
import hotelsReducer from './hotelsReducer';

const rootReducer = combineReducers({
  adults: adultReducer,
  children: childrenReducer,
  rooms: roomReducer,
  hotels: hotelsReducer,
});

export default rootReducer;
