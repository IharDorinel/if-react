import { createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['adults', 'children', 'rooms'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};

export const { store, persistor } = configureStore();
