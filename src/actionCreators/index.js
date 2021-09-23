import { createActions } from 'redux-actions';

export const { incrementAdults, decrementAdults } = createActions({
  INCREMENT_ADULTS: (amount = 1) => ({ amount }),
  DECREMENT_ADULTS: (amount = 1) => ({ amount: -amount }),
});

export const { incrementChildren, decrementChildren } = createActions({
  INCREMENT_CHILDREN: (amount = 1) => ({ amount }),
  DECREMENT_CHILDREN: (amount = 1) => ({ amount: -amount }),
});

export const { incrementRooms, decrementRooms } = createActions({
  INCREMENT_ROOMS: (amount = 1) => ({ amount }),
  DECREMENT_ROOMS: (amount = 1) => ({ amount: -amount }),
});
