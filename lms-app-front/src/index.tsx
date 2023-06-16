import 'reflect-metadata';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import initTrackers from './trackers/initTrackers';

const container = document.getElementById('root');
if (!container) {
  throw new Error('root div не существует');
}

const root = createRoot(container);

initTrackers()
  .finally(() => {
    root.render(<App />);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics getParsingDataEndpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
