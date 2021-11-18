import React from "react";
import CatalogCard from "../Catalog-Card/Catalog-Card";
import './Catalog-List.css';

const CatalogList = ({bikes})=>{
    const data = bikes.map(elem => <CatalogCard elem={elem}></CatalogCard>)
    const content = data.length === 0 ? 
    <div className='empty-wrapper'><h1>The product was not found</h1></div> : data
    
    return(
        <div className='catalog-list'>
            <div className='catalog-list__container'>
                {content}
            </div>
        </div>
    )
}

export default CatalogList;