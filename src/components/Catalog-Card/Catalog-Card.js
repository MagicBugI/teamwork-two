import React from "react";
import {Link} from 'react-router-dom'
import './Catalog-Card.css';

const CatalogCard = ({ elem }) => {
    return (
        <div className='card-block' key={elem['_id']}>
            <img src={elem.url} alt='Bike image'></img>
            <div className='card-block__content'>
                <h3>{elem.name}</h3>
                <p>{elem.title}</p>
                <div className='price'>Price : {elem.price}$</div>
            </div>
            <Link className='card-block__btn' to={`/catalog/${elem['_id']}`}>View more</Link>
        </div>
    )
}

export default CatalogCard;