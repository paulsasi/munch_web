import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/home' element={<Home/>} />
        <Route exact path='/about-us' element={<AboutUs/>} />
        
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);