import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import Resume from './Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Resume/>
  </React.StrictMode>
);
