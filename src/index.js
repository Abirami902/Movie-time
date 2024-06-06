import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Movies from './Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './Detail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Movies />} />
      <Route path="/detail/:id" element={<Detail />} />
      {/* <Route path="/home" element={<Home />} />
      <Route path="/fetchdata" element={<FetchData />} /> */}
    </Routes>
  </BrowserRouter>
</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();