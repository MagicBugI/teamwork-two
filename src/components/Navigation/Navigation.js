import React from "react";
import './Navigation.css';
import BrandLogo from "../Brand-Logo/Brand-Logo";
import { NavLink, Link, useLocation } from 'react-router-dom';


const Navigation = () => {
    const data = useLocation();

    const searchBlock = data.pathname === '/catalog' ? <input className='nav-search' placeholder='Search ...'></input> : null
    return (
        <nav className='navigation'>
            <div className='navigation-container'>
                <Link to='/'>
                    <BrandLogo></BrandLogo>
                </Link>
                {searchBlock}
                <ul>
                    <NavLink exact className='nav-link' activeClassName='active' to='/'>Home</NavLink>
                    <NavLink exact className='nav-link' activeClassName='active' to='/catalog'>Catalog</NavLink>
                    <NavLink exact className='nav-link' activeClassName='active' to='/cart'>Cart</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;