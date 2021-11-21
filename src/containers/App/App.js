import './App.css';
import Navigation from '../../components/Navigation/Navigation';
import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';
import { BrowserRouter as RouteWrapper, Route, Routes } from 'react-router-dom'
import React, { useState , useEffect } from 'react';
import Review from '../Review/Review';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

function App() {
  const [bikes, setBikes] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    axios.get(`http://localhost:3000/`)
      .then(res => setBikes(res.data))
  }, []);

  console.log(bikes);

  const handleSubmit = (event) => {
    event.preventDefault();
    const typeSelect = event.target.type; 
    const markSelect = event.target.mark;
    const priceSelect = event.target.price;

    axios.get(`http://localhost:3000/?${typeSelect.name}=${typeSelect.value}&${markSelect.name}=${markSelect.value}&${priceSelect.name}=${priceSelect.value}`)
    .then(res => setBikes(res.data))

  };
  const inputHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  }
  const filteredBikes = bikes.filter((bike) => {
    if (
      bike.name.toLowerCase().includes(search) ||
      bike.title.toLowerCase().includes(search)
    ) {
      return bike;
    }
  });



  return (
    <RouteWrapper>
      <Navigation searchData={search} inputHandler={inputHandler}></Navigation>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalog'
            element={<Catalog bikes={filteredBikes}
            handleSubmit={handleSubmit}
          />}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/catalog/:id' element={<Review />} />
      </Routes>
      <Footer></Footer>
    </RouteWrapper>
  );

}

export default App;
