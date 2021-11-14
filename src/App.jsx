import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopItemsList from './components/ShopItemsList/ShopItemsList'
import Bar from './components/Bar/Bar'
import './index.css'
import CarouselCard from './components/Carousel/CarouselCard';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

const App = () => {

  return (
    <div className="App">
      <Bar />

      <Routes>
        <Route path="/carousel" element={<CarouselCard />} />
        <Route path="/" element={<ShopItemsList />} />
        <Route path="/content" element={<Content />} />

      </Routes>

      <Footer />




    </div>

  );
}

export default App;
