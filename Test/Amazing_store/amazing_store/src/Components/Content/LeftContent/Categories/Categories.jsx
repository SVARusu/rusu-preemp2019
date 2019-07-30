import React from 'react'


const Categories = (props) =>{
    // return(
    //     <div id="side-menu">
    //         <ul>
    //             <li className="list-button"><h5>All categories</h5></li>
    //             <li /* onclick="myFunction()" */ className="list-button">FACE</li>
    //             <ul id="myDIV">
    //                 <li className="list-item active">Creams & Gel</li>
    //                 <li className="list-item">Patches</li>
    //                 <li className="list-item">Emulsions</li>
    //                 <li className="list-item">Toners</li>
    //                 <li className="list-item">Face cleansing</li>
    //                 <li className="list-item">Makeup removal</li>
    //                 <li className="list-item">Scrubs</li>
    //                 <li className="list-item">Peeling</li>
    //                 <li className="list-item">Masks</li>
    //             </ul>
    //             <li className="list-button">BODY</li>
    //             <li className="list-button">FOOT</li>
    //             <li className="list-button">HANDS</li>
    //             <li className="list-button">HAIR</li>
    //             <li className="list-button">MAKEUP</li>
    //         </ul>

    //         <div className="side-cream">
    //             <img src={"images/1.jpg"} alt="" />
    //         </div>
    //     </div>
    // )
    const categories = (Object.keys(props.categories));
    return (
        <div id="side-menu">
            <div>
                <h5 className="list-button">All categories</h5>
                {
                    categories.map((category, index) => {
                        return <button className="list-button" key={index}>{category}</button>
                    })
                }
            </div>
            <div className="side-cream">
                    <img src={"images/1.jpg"} alt="" />
            </div>
        </div>
           
        
        
    )
}

export default Categories