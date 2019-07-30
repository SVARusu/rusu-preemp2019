import React from 'react'
import "./UpperRightContent.css"
const UpperRightContent = () =>{
    return(
        <div className="upper-right-content">
            <div className="more-creams-upper">
                <div className="cream-title"><h2>Creams & gels</h2></div>
                <div className="cream-showing">
                    <p className="cream-bar cream-bar-text">Showing 60 of 323</p>
                    <button className="cream-bar cream-bar-button"><i className="fas fa-angle-left"></i></button>
                    <button className="cream-bar cream-bar-button"><i className="fas fa-angle-right"></i></button>
                </div>
            </div>
            <div className="more-creams-lower">
                <div className="brand">
                    <p>BRAND: <span className="more-creams-lower-span">ALL BRANDS</span></p>
                    <p className="cream-bottom">SKIN TYPE: <span className="more-creams-lower-span">FOR ALL SKIN TYPES</span></p>
                    <p className="cream-bottom">AGE: <span className="more-creams-lower-span">30+</span></p>
                </div>
                <div className="popularity">
                    <p>SORT BY: <span className="more-creams-lower-span">BY POPULARITY</span></p>
                </div>
                
            </div>
            <hr/>
        </div>
    )
}

export default UpperRightContent