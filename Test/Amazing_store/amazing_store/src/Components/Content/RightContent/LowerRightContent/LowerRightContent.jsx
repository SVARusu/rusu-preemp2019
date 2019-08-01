import React from 'react'
import "./LowerRightContent.css"
//const link = '/images.json';
import imagesFile from "./images.json";

class LowerRightContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images: []
            // titles: [],
            // prices: []

        }
    }

  /*   getImages = () =>{
        const url = "./images.json";
        const response =  fetch (url);
        const data =  response.json();
        this.setState({images: data})
        console.log(data)
        fetch('./images.json')
        .then(response => response.json())
        .then(data=>console.log(data))
        .then(data=>this.setState({images: this.data}))
        .then(data.map((item, index) => {
            this.setState(
                {
                    images: item.image[index],
                    titles: item.title[index],
                    prices: item.price[index]
        
                }
            )
        }))
    } */
    getImages(json_data){
            //let json_data = require('./images.json');
            console.log(json_data[1].location)
            return(
                <div className="lower-right-content">
                {json_data.map((image, index) =>
                    <div className="cream-image" key={index}>
                        <img src={image.location} alt=""  className="myImg" />
                        <p>{image.title}</p>
                        <p className="image-price"> {image.price} </p>
                    </div>
                )}
                
            </div>
            )
        
    }

    render(){
        //const {images} = this.state
        
        return(

            <div>
                {this.getImages(imagesFile)}
            </div>
            
            // <div className="lower-right-content">
            //     {images.map((image, index) =>
            //         <div className="cream-image">
            //             <img src={image.image[index]} alt=""  className="myImg"/>
            //             <p>{image.title[index]}</p>
            //             <p className="image-price"> {image.price[index]} </p>
            //         </div>
            //     )}
                
            // </div>
        )
    }
}



// const LowerRightContent = () =>{
//     return(
//             <div className="lower-right-content">
//                 <div className="cream-image">
//                     <img src="images/2.jpg" alt=""  className="myImg"/>
//                     <p>Missha all around safe block sebum zero sun</p>
//                     <p className="image-price">$4.00</p>
//                 </div>
//                 <div className="cream-image">
//                     <img src="images/3.jpg" alt="" className="myImg"/>
//                     <p>Missha all around safe block sebum zero sun</p>
//                     <p className="image-price">$4.00</p>
//                 </div>
//                 <div className="cream-image">
//                     <img src="images/4.jpg" alt=""  className="myImg"/>
//                     <p>Missha all around safe block sebum zero sun</p>
//                     <p className="image-price">$4.00</p>
//                 </div>
//                 <div className="cream-image"> 
//                     <img src="images/5.jpg" alt=""  className="myImg"/>
//                     <p>Missha all around safe block sebum zero sun</p>
//                     <p className="image-price">$4.00</p>
//                 </div>
//                 <div className="cream-image">
//                     <img src="images/6.png" alt=""  className="myImg"/>
//                     <p>Missha all around safe block sebum zero sun</p>
//                     <p className="image-price">$4.00</p>
//                 </div>
//                 <div className="cream-image">
//                     <img src="images/7.jpg" alt=""  className="myImg"/>
//                     <p>Missha all around safe block sebum zero sun</p>
//                     <p className="image-price">$4.00</p>
//                 </div>
//                 <div className="cream-image">
//                     <img src="images/8.jpg" alt=""  className="myImg"/>
//                     <p>Missha all around safe block sebum zero sun</p>
//                     <p className="image-price">$4.00</p>
//                 </div>
//                 <div className="cream-image"> 
//                     <img src="images/9.jpg" alt=""  className="myImg"/>
//                     <p>Missha all around safe block sebum zero sun</p>
//                     <p className="image-price">$4.00</p>
//                 </div>
//             </div>
//     )
// }

export default LowerRightContent