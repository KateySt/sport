import React from 'react';
import './Menu.css';

const Menu = (props) => {

    return (
        <>
            <div className="Menu">
                <div className="link">About us</div>
                <div className="link">Price</div>
                <div className="link">Trainers</div>
                <div className="link">Classes</div>
                <div className="link">Contacts</div>
            </div>
        </>
    );
};

export default Menu;