import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18용으로 변경
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { MealProvider } from './MealContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot로 변경

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MealProvider>
        <App />
      </MealProvider>
    </BrowserRouter>
  </React.StrictMode>
);
