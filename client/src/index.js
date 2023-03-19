import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <GlobalStyles>
        <App />
      </GlobalStyles>
    {/* </React.StrictMode> */}
  </Provider>
);
