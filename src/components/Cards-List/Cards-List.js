import React, { useState } from "react";
import Card from "../Card/Card";
import './Cards-List.css';
import Spinner from "../Spinner/Spinner";


const CardsList = ({items , handleClickMore , cheker})=>{
    const btnStyle = cheker ? 'disabled':'cards-btn';
    const [pagination , setPagination] = useState(true)
    const data = items.map(e => <Card item={e}></Card>)
    return(
        <section className='list'>
            <div className='list-container'>
                <ul className='cards-wrapper'>
                    {data}
                </ul>
                {pagination?
                <button disabled={cheker}  onClick={()=>handleClickMore(setPagination)} className={btnStyle}>View more</button>:
                <Spinner/>
                }
            </div>
        </section>
    )
}
export default CardsList;