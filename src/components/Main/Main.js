import React from "react";
import logo from './main-img.jpg';
import './Main.css';

const Main = () => {
    return (
        <main>
            <div className='main-container'>
                <img className='main-logo' src={logo} alt='Main logo'></img>
                <div className='main-content'>
                    <h1>Знайди своє покликання разом  з Роверами</h1>
                    <p>
                        Цікавлять наші велосипеди та їх комплектуючи?Ми знаємо про них все.Запитуйте
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Main;