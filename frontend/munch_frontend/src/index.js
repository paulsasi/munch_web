import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Novelties from './components/Novelties';
import Beach from './components/Beach';
import Lingerie from './components/Lingerie';
import Accessories from './components/Accessories';
import AboutUs from './components/AboutUs';
import HomeTest from './pages/HomeTest';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/home' element={<Home/>} />
        <Route exact path='/novelties' element={<Novelties/>} />
        <Route exact path='/beach' element={<Beach/>} />
        <Route exact path='/lingerie' element={<Lingerie/>} />
        <Route exact path='/accessories' element={<Accessories/>} />
        <Route exact path='/about-us' element={<AboutUs/>} />
        <Route exact path='/test' element={<HomeTest/>} />
        
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);