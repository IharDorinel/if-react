import { decrementAdults, incrementAdults } from '../../actionCreators';

const { handleActions, combineActions } = require('redux-actions');

const initialState = 1;

export const adultReducer = handleActions({
  [combineActions(incrementAdults, decrementAdults)]: (
    state, { payload: { amount } },
  ) => state + amount,
},
initialState);
