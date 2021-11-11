import './App.css';
import Home from '../Home/Home';
import React, { useState } from 'react';

function App() {
  const [bikes, setBikes] = useState([
    {
      url: 'https://en.author.eu/data/u_rotoskop/2021/magnum_29/magnum_29_10.jpg',
      name: 'AUTHOR MAGNUM 29 2021-22',
      title:'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm thru rear axle',
      id:1
    },
    {
      url:'https://en.author.eu/data/u_rotoskop/2021/sector_29/sector_29_10.jpg',
      name:'AUTHOR SECTOR 29 2021-22',
      title:'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm thru rear axle',
      id:2
    },
    {
      url:'https://en.author.eu/data/u_rotoskop/2021/egoist_29/egoist_29_10.jpg',
      name:'AUTHOR EGOIST 29 2021-22',
      title:'AUTHOR Flyer Carbon 29 TR wheel set 28 holes 15 × 110 mm thru front axle 12 × 148 mm thru rear axle',
      id:3
    }
  ])
  return (
    <Home bikes={bikes}></Home>
  );
}

export default App;
