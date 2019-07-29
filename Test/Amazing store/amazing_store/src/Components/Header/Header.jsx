import React from 'react';
import "./Header.css";
import Logo from '../Logo/Logo';
import Contact from '../Contact/Contact';
import Navigtaion from '../Navigation/Navigation';
import Search from '../Search/Search';
import CartButton from '../CartButton/CartButton';


class Header extends React.Component{
    render(){
        return <div  className="header-container">
            <div className="header-top-container">
                <Logo />
                <Contact />
                <Navigtaion />
            </div>
            <div className="header-bottom-container">
                <Search />
                <CartButton />
            </div>
            
        </div>;
    }
}

export default Header;