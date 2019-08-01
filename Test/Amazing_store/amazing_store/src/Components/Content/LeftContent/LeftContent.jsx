import React from 'react'
import "./LeftContent.css"
import Categories from './Categories/Categories'

// const LeftContent = () =>{
//     return(
//         <div id="side-menu">
//             <div>
//                 <h5>All categories</h5>
//                 <button /* onclick="myFunction()" */ className="list-button">FACE</button>
//                 <ul id="myDIV">
//                     <li className="list-item active">Creams & Gel</li>
//                     <li className="list-item">Patches</li>
//                     <li className="list-item">Emulsions</li>
//                     <li className="list-item">Toners</li>
//                     <li className="list-item">Face cleansing</li>
//                     <li className="list-item">Makeup removal</li>
//                     <li className="list-item">Scrubs</li>
//                     <li className="list-item">Peeling</li>
//                     <li className="list-item">Masks</li>
//                 </ul>
//                 <button className="list-button">BODY</button>
//                 <button className="list-button">FOOT</button>
//                 <button className="list-button">HANDS</button>
//                 <button className="list-button">HAIR</button>
//                 <button className="list-button">MAKEUP</button>
//             </div>

//             <div className="side-cream">
//                 <img src={"images/1.jpg"} alt="" />
//             </div>
//         </div>
//     )
// }

class LeftContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            categories:{
                FACE: ["Creams & Gels", "Patches", "Emulsions", "Toners", "Face cleansing", "Makeup removal", "Scrubs", "Peeling", "Masks"],
                BODY: ["Creams & Gels", "more", "Emulsions", "Toners", "Face cleansing", "Makeup removal", "Scrubs", "Peeling", "Masks"],
                FOOT: ["Creams & Gels", "Patches", "Emulsions", "Toners", "Face cleansing", "Makeup removal", "Scrubs", "Peeling", "Masks"],
                HANDS: ["Creams & Gels", "Patches", "Emulsions", "Toners", "Face cleansing", "Makeup removal", "Scrubs", "Peeling", "Masks"],
                HAIR: ["Creams & Gels", "Patches", "Emulsions", "Toners", "Face cleansing", "Makeup removal", "Scrubs", "Peeling", "Masks"],
                MAKEUP: ["Creams & Gels", "Patches", "Emulsions", "Toners", "Face cleansing", "Makeup removal", "Scrubs", "Peeling", "Masks"],
                
            }
        }
    }
    render(){
        return (
          
                <Categories categories={this.state.categories} />
               
           
            
        )
    }
}

export default LeftContent;