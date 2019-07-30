import React from 'react';
import "./Header.css";
import UpperRight from './Navbar/Left/UpperRight/UpperRight';
import LowerRight from './Navbar/Left/LowerRight/LowerRight';


class Header extends React.Component{
    render(){
        return( 
            <header className="header">
                <nav>
                    <div className="left-nav">
                        <h1>Amazing store</h1>
                    </div>
                    <div className="right-nav">
                        <UpperRight />
                        <LowerRight />
                    </div>
                </nav>
            </header>
        );       
    }
}

export default Header;