import React from "react";
import Card from "../Card/Card";
import './Cards-List.css';

const CardsList = ({items ,  handleShowMorePosts})=>{
    const data = items.map(e => <Card item={e}></Card>)
    return(
        <section className='list'>
            <div className='list-container'>
                <ul className='cards-wrapper'>
                    {data}
                </ul>
                <button onClick={ ()=>handleShowMorePosts()} className='cards-btn'>View more</button>  
            </div>
        </section>
    )
}
export default CardsList;