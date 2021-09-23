import { decrementChildren, incrementChildren } from '../../actionCreators';

const { handleActions, combineActions } = require('redux-actions');

const initialState = 0;

export const childrenReducer = handleActions({
  [combineActions(incrementChildren, decrementChildren)]: (
    state, { payload: { amount } },
  ) => state + amount,
},
initialState);
