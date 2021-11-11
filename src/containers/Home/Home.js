import React , {Fragment} from "react";
import './Home.css';
import Navigation from "../../components/Navigation/Navigation";
import Main from "../../components/Main/Main";

const Home = ()=>{
    return(
        <Fragment>
            <header>
                <Navigation></Navigation>
                <Main></Main>
            </header>
        </Fragment>
    )
}

export default Home;