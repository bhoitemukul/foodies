import React from 'react';
import "./Navbar.css";
import mainlogo from "../../Assets/logo.png";


function Navbar() {
    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <img src={mainlogo} />
                </div>
                <div className="ham" id="hamRun">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar