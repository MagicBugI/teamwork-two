import React, { Fragment, useState, useEffect } from "react";
import './Home.css';
import Main from "../../components/Main/Main";
import CardsList from "../../components/Cards-List/Cards-List";
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';


const Home = () => {
    const [previewBikes, setPreviewBikes] = useState([]);
    const [skip , setSkip]  = useState(0);
    const [disabled , setDisabled] = useState(false)

    const [loading, setLoading] = useState(true);
    let bikesQuantity = 3;

    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:3000/preview/${bikesQuantity}`)
                .then(res =>{
                    setSkip(skip+bikesQuantity)
                    setPreviewBikes(res.data)
                })
            setLoading(false);
        },2000)
    }, []);

    const handleClickMore = (elem) => {
            elem(false)
             setTimeout(()=>{
                axios.get(`http://localhost:3000/preview/${skip}/${bikesQuantity}`)
                .then(res => {
                    if(res.data.length === 0){
                        elem(true);
                        return setDisabled(true);
                    }
                    setSkip(skip+bikesQuantity)
                    setPreviewBikes([...previewBikes, ...res.data]);
                    elem(true)
                })
             }, 2000)
    }
    return (
        <Fragment>
            <header>
                <Main></Main>
            </header>
            {loading ?
                <Spinner /> :
                <CardsList cheker={disabled} handleClickMore={handleClickMore} items={previewBikes} />
            }
        </Fragment>
    )
}

export default Home;