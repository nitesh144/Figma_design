// index.js or index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind and global styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
