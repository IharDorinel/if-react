import { decrementRooms, incrementRooms } from '../../actionCreators';

const { handleActions, combineActions } = require('redux-actions');

const initialState = 1;

export const roomReducer = handleActions({
  [combineActions(incrementRooms, decrementRooms)]: (
    state, { payload: { amount } },
  ) => state + amount,
},
initialState);
