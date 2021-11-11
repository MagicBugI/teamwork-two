import React from "react";
import './Card.css';

const Card = ({item})=>{
    return(
        <li className='card' key={item.id}>
            <img className='card-img' src={item.url}></img>
            <div className='card-content'>
                <h3>{item.name}</h3>
                <p>{item.title}</p>
            </div>
        </li>
    )
}

export default Card;