import React , {Fragment} from "react";
import './Home.css';
import Main from "../../components/Main/Main";
import CardsList from "../../components/Cards-List/Cards-List";

const Home = ({bikes ,  handleShowMorePosts})=>{
    return(
        <Fragment>
            <header>
                <Main></Main>
            </header>
            <CardsList  handleShowMorePosts={ handleShowMorePosts} items={bikes}></CardsList>
        </Fragment>
    )
}

export default Home;