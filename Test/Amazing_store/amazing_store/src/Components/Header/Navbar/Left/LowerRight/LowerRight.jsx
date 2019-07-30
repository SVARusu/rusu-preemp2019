import React from 'react'
import "./LowerRight.css"


const LowerRight = () =>{
    return(
        <div className="lower-right-nav">
            <form action="" className="lower-header">
                {/* <i class="fas fa-search icon"></i> */}
                <i className="fas fa-search"></i>
                <input className="search" type="text" placeholder="Search products by SKU or name"/>
                {/* <button class="search-button" value="My cart">
                    <i class="fas fa-shopping-cart"></i>
                    <span>My cart</span> 
                    <p class="number">12</p>
                </button>  */}
            </form>
            <a className="cart-button" value="My cart" href="http://www.google.ro">
                <i className="fas fa-shopping-cart"></i>
                <span>My cart</span> 
                <span className="number">12</span>
            </a> 
        </div>
        
    )
}

export default LowerRight;
