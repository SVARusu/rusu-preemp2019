import React from 'react';
import "./UpperRight.css";

const UpperRight = () =>{
    return (
        <div className="upper-right-nav">
            <p id="city" ><i className="fas fa-map-marker-alt"></i> My city: Los Angele</p>
            <p id="phone"><i className="fas fa-phone"></i> Phone: 43534534</p>
            <ul className="header-list">
                <li className="list"><a href="https://www.google.ro">Shipping</a></li>
                <li className="list"><a href="https://www.google.ro">Blog</a></li>
                <li className="list"><a href="https://www.google.ro">Company</a></li>
                <li className="list"><a href="https://www.google.ro">My Account</a></li>
            </ul>
        </div>
    );
}

export default UpperRight;