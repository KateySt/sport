import React from 'react';
import './AboutUs.css';
import {AiOutlineArrowDown} from "react-icons/ai";
import net from './img/svg.svg';

const AboutUs = (props) => {
    return (
        <>
            <div className="AboutUs">
                <div className="number number-centered">
                    <div className="member" data-after="members">
                        5M+
                    </div>
                    <div className="member" data-after="partners">
                        100+
                    </div>
                    <div className="member arrow">
                        <AiOutlineArrowDown/>
                    </div>
                    <div className="member" data-after="best coach">
                        25+
                    </div>
                    <div className="member" data-after="appreciations">
                        100+
                    </div>
                </div>

                <div className="textBlock">
                    <h2 className="title about">About us</h2>
                </div>

                <div className="svg-container">
                    <img src={net} alt="SVG Image"/>
                </div>
            </div>
        </>
    );
};

export default AboutUs;