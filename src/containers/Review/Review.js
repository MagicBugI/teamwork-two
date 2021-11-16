import React from "react";
import './Review.css';
import { useParams } from "react-router-dom";
import { getBikeById } from "../../data/bicycles";
import Select from '../../components/Select/Select';
import CustomBtn from "../../components/Custom-Btn/Custom-Btn";

const Review = ()=>{
    let {id} = useParams();
    const bike = getBikeById(Number(id.slice(1)));
    return(
        <section className='review'>
            <div className='container'>
                <div className='review-block'>
                    <img src={bike.url} alt='Bike image'></img>
                    <div className='info-text'>
                        <h2>{bike.name}</h2>
                        <p>{bike.title}</p>
                        <input type='number' min='1' max='10' defaultValue='1'></input>
                        <Select list={['Black' , 'White' , 'Brown']}></Select>
                    </div>
                </div>
                <div className='action-block'>
                    <div className='price'>
                        <strong>Price : {bike.price}$</strong>
                    </div>
                    <div className='action-btn'>
                        <CustomBtn>Go Back</CustomBtn>
                        <CustomBtn inverce>Add to Cart</CustomBtn>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Review;  