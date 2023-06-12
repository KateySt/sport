import React from 'react';
import './Scroll.css';
import {IoIosArrowDown} from "react-icons/io";

const Scroll = (props) => {

    return (
        <>
            <div className="groupScroll">
                <div className="scroll">Scroll down to discover</div>
                <IoIosArrowDown style={{color: "white"}}/>
            </div>
        </>
    );
};

export default Scroll;