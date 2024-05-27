import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AccountProvider from './contexts/user.context';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <AccountProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </AccountProvider> */}
  </Provider>
  // </React.StrictMode>
);
