import React from "react";
import CatalogCard from "../Catalog-Card/Catalog-Card";
import './Catalog-List.css';

const CatalogList = ({bikes})=>{
    const data =<div className='catalog-list__container'> {bikes.map(elem => <CatalogCard elem={elem}></CatalogCard>)}</div>
    const content = bikes.length === 0 ? 
    <div className='empty-wrapper'><h1>The product was not found</h1></div>: 
    data
    
    return(
        <div className='catalog-list'>
                {content}
        </div>
    )
}

export default CatalogList;