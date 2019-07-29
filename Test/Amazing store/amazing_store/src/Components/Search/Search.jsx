import React from 'react'
import "./Search.css";

const Search = () =>{
    return(
        <div className="searchBar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search products by SKU or name"/>
        </div>
    )
}

export default Search;