import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './shared/i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
