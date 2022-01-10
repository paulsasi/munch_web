import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import BeachProducts from './pages/BeachProducts';
import LingerieProducts from './pages/LingerieProducts';
import AccessoriesProducts from './pages/AccessoriesProducts';
import NoveltiesProducts from './pages/NoveltiesProducts';
import AboutUs from './pages/AbousUs.js';

import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/novelties' element={<NoveltiesProducts/>} />
          <Route exact path='/beach' element={<BeachProducts/>} />
          <Route exact path='/lingerie' element={<LingerieProducts/>} />
          <Route exact path='/accessories' element={<AccessoriesProducts/>} />
          <Route exact path='/about-us' element={<AboutUs/>} />
          <Route exact path='/product' element={<Product />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);