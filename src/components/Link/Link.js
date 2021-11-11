import React from "react";
import './Link.css';

const Link = ({name , root})=>{
    return(<a className='link' href={root}>{name}</a>);
}

export default Link;