import React from "react";
import { useParams } from "react-router-dom";

const Review = ()=>{
    let {id} = useParams();
    return <h2>Invoice: {id}</h2>;
}

export default Review;  