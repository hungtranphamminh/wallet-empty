import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Login from './pages/login/Login';
import Info from './pages/info/Info';
import HeaderBar from './pages/header/Header';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='w-[357px] h-[600px] border-4 border-gray-900'>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/info" element={<Info />}/>
        </Routes>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
