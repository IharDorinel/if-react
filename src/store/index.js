import { applyMiddleware, createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import rootReducer from './reducers';
import hotelsSaga from '../sagas/popularHotels';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['adults', 'children', 'rooms'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(hotelsSaga);

const persistor = persistStore(store);

export default function* rootSaga() {
  yield all([
    fork(hotelsSaga),
  ]);
}

export { store, persistor };
