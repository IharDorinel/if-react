const { handleActions } = require('redux-actions');
const { setPopularHotels } = require('../../actionCreators/popularHotels');

const initialState = {
  popular: [],
};

const hotelsReducer = handleActions({
  [setPopularHotels]: (state, { payload: popularHotels }) => ({
    ...state,
    popular: popularHotels,
  }),
}, initialState);

export default hotelsReducer;
