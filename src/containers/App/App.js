import './App.css';
import Navigation from '../../components/Navigation/Navigation';
import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';
import { BrowserRouter as RouteWrapper, Route, Routes } from 'react-router-dom'
import React, { useState , useEffect } from 'react';
import Review from '../Review/Review';
import { bicycles, getBikesPreview } from '../../data/bicycles';
import Footer from '../../components/Footer/Footer';

function App() {
  const [bikes, setBikes] = useState(bicycles);
  const [filters, setFilters] = useState({ type: 'All', mark: 'All', price: 0 });
  const [search, setSearch] = useState("");
  
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);
  const postsPerPage = 3;

  const loopWithSlice = (start, end) => {
    const slicedPosts = bicycles.slice(start, end);
    setPostsToShow([...postsToShow , ...slicedPosts]);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  const listenChanges = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const getRightBikes = () => {
    setBikes(
      bicycles
        .filter(elem => filters.type === 'All' ? elem : elem.type === filters.type)
        .filter(elem => filters.mark === 'All' ? elem : elem.mark === filters.mark )
        .filter(elem => filters.price === 0 ? elem : elem.price <= filters.price)
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getRightBikes();
  };
  const inputHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  }
  const filteredBikes = bikes.filter((bike) => {
    if (
      bike.name.toLowerCase().includes(search) ||
      bike.title.toLowerCase().includes(search) ||
      bike.mark.toLowerCase().includes(search)
    ) {
      return bike;
    }
  });



  return (
    <RouteWrapper>
      <Navigation searchData={search} inputHandler={inputHandler}></Navigation>
      <Routes>
        <Route path='/' element={<Home bikes={postsToShow} handleShowMorePosts={ handleShowMorePosts} />} />
        <Route path='/catalog'
          element={<Catalog bikes={filteredBikes}
            handleSubmit={handleSubmit}
            listenChanges={listenChanges}
          />}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/catalog/:id' element={<Review />} />
      </Routes>
      <Footer></Footer>
    </RouteWrapper>
  );

}

export default App;
