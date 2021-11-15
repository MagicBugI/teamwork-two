import React from "react";
import './Navigation.css';
import BrandLogo from "../Brand-Logo/Brand-Logo";
import {NavLink , Link} from 'react-router-dom'

const Navigation = ()=>{
    return(<nav className='navigation'>
        <Link to='/'>
            <BrandLogo></BrandLogo>
        </Link>
        <ul>
            <NavLink exact className='nav-link' activeClassName='active' to='/'>Home</NavLink>
            <NavLink exact className='nav-link' activeClassName='active' to='/catalog'>Catalog</NavLink>
            <NavLink exact className='nav-link' activeClassName='active' to='/cart'>Cart</NavLink>
        </ul>
    </nav>)
}

export default Navigation;