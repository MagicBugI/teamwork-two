import React from "react";
import CatalogCard from "../Catalog-Card/Catalog-Card";
import './Catalog-List.css';

const CatalogList = ({bikes})=>{
    const data = bikes.map(elem => <CatalogCard elem={elem}></CatalogCard>)
    return(
        <div className='catalog-list'>
            <div className='catalog-list__container'>
                {data}
            </div>
        </div>
    )
}

export default CatalogList;