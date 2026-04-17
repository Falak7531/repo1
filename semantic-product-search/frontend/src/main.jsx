import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import design system globally
import './styles/variables.css';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
