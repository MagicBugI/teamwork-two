import React, { useState, useEffect } from "react";
import './Review.css';
import { useParams } from "react-router-dom";
import Select from '../../components/Select/Select';
import CustomBtn from "../../components/Custom-Btn/Custom-Btn";
import axios from 'axios';
import Spinner from "../../components/Spinner/Spinner";

const Review = () => {
    const [bike, setBike] = useState([]);
    const [loading, setLoading] = useState(false);

    let { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios.get(`http://localhost:3000/${id}`)
                .then(res => setBike(res.data))
            setLoading(false)
        }, 500);
    }, []);

    if(loading) return(<Spinner></Spinner>) 
    
    return (
        <section className='review'>
            <div className='container'>
                <div className='review-block'>
                    <img src={bike.url} alt='Bike image'></img>
                    <div className='info-text'>
                        <h2>{bike.name}</h2>
                        <p>{bike.title}</p>
                        <input type='number' min='1' max='10' defaultValue='1'></input>
                        <Select list={['Black', 'White', 'Brown']}></Select>
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