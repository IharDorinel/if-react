import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { jsx, ThemeProvider } from '@emotion/react';
import { store, persistor } from './store';

// components
import App from './components/App';

// styles
import './index.css';

const theme = {
  light: {
    colors: {
      primary: '#EAF0F9',
      secondary: '#121212',
    },
  },
  dark: {
    colors: {
      primary: '#10367C',
      secondary: '#BFBFBF',
    },
  },

};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
