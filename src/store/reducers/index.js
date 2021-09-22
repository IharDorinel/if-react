import React from 'react';
import { combineReducers } from 'redux';

import { adultReducer } from './adultReducer';
import { roomReducer } from './roomReducer';
import { childrenReducer } from './childrenReducer';

const rootReducer = combineReducers({
  adults: adultReducer,
  children: childrenReducer,
  rooms: roomReducer,
});

export default rootReducer;
