import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next';

import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import global_de from './translations/de/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en', 
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    },
    de: {
      global: global_de
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);


reportWebVitals();
