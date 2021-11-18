import React from "react";
import './Navigation.css';
import BrandLogo from "../Brand-Logo/Brand-Logo";
import { NavLink, Link, useLocation } from 'react-router-dom';


const Navigation = ({inputHandler , searchData}) => {
    const data = useLocation();

    const searchBlock = data.pathname === '/catalog' ? <input value={searchData} onChange={(e)=>inputHandler(e)} className='nav-search' placeholder='Search ...'></input> : null
    return (
        <nav className='navigation'>
            <div className='navigation-container'>
                <Link to='/'>
                    <BrandLogo></BrandLogo>
                </Link>
                {searchBlock}
                <ul>
                    <NavLink  className='nav-link' activeClassName='active' to='/'>Home</NavLink>
                    <NavLink  className='nav-link' activeClassName='active' to='/catalog'>Catalog</NavLink>
                    <NavLink  className='nav-link' activeClassName='active' to='/cart'>Cart</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;