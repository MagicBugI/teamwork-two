import React from "react";
import './Navigation.css';
import Link from '../Link/Link';
import BrandLogo from "../Brand-Logo/Brand-Logo";

const Navigation = ()=>{
    return(<nav className='navigation'>
        <BrandLogo/>
        <ul>
            <Link name='Home' root='/'></Link>
            <Link name='Catalog' root='/catalog'></Link>
            <Link name='Card' root='/card'></Link>
        </ul>
    </nav>)
}

export default Navigation;