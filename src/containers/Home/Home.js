import React , {Fragment} from "react";
import './Home.css';
import Navigation from "../../components/Navigation/Navigation";
import Main from "../../components/Main/Main";
import CardsList from "../Cards-List/Cards-List";
import Footer from "../../components/Footer/Footer";

const Home = ({bikes})=>{
    return(
        <Fragment>
            <header>
                <Navigation></Navigation>
                <Main></Main>
            </header>
            <CardsList items={bikes}></CardsList>
            <Footer></Footer>
        </Fragment>
    )
}

export default Home;