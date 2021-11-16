import React from "react";
import './Catalog.css';
import SelectList from "../../components/Select-List/Select-List";
import CatalogList from "../../components/Catalog-List/Catalog-List";

const Catalog = ({bikes}) =>{
   return(
   <section className='catalog'>
      <SelectList></SelectList>
      <CatalogList bikes={bikes}></CatalogList>
   </section>
   )
}

export default Catalog;