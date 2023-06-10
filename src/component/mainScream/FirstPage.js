import React from 'react';
import './FirstPage.css';
import Menu from "./menu/Menu";
import Scroll from "./scroll/Scroll";

const FirstPage = (props) => {

    return (
        <>
            <div className="FirstPage">
                <div className="logo"/>

                <Menu/>

                <div className="TextGroup">
                <div className="Group">
                    <line/>
                    <h2>ARE YOU READY TO</h2>
                </div>
                <h1>GET FIT,STRONG AND MOTIVATED</h1>
                </div>

                <div className="ImgSport"></div>
                <Scroll/>
            </div>
        </>
    );
};

export default FirstPage;