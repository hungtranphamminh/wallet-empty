import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes,Route, BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='w-[357px] border-4 border-gray-900'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
