import './App.css';
import Navigation from '../../components/Navigation/Navigation';
import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';
import { BrowserRouter as RouteWrapper, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react';
import Review from '../Review/Review';
import { bicycles } from '../../data/bicycles';
import Footer from '../../components/Footer/Footer';

function App() {
  const [bikes, setBikes] = useState(bicycles);
  return (
    <RouteWrapper>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home bikes={bikes}/>} />
        <Route path='/catalog' element={<Catalog bikes={bikes} />}></Route>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/catalog/:id' element={<Review />} />
      </Routes>
      <Footer></Footer>
    </RouteWrapper>
  );
}

export default App;
