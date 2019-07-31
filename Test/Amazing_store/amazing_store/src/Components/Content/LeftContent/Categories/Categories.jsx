import React from 'react'
import Component from './Component'

class Categories extends React.Component {
  
  
    constructor(props){
      super(props);
      this.state= {isVisible: null}
      this.press = this.press.bind(this);
      
    }
  
    press(categ)  {
      this.setState({isVisible: this.state.isVisible === categ ? null : categ }
        
        );
    }
    
  
       
      
      render() { 
        const categories = Object.keys(this.props.categories);
        return(
            <div id="side-menu"> 
                <div className="toggle-menu">                        
                    <h5 className="list-button">All categories</h5>
                    {categories.map((category, index) =>
                        <Component extend={this.state.isVisible} press={this.press}cat = {category} categories={this.props.categories[category]} key={index}/>
                                    
                    )} 
                </div>
                <div className="side-cream">
                    <img src={"images/1.jpg"} alt="" />
                </div>
            </div>
      ) }
  
  
  }


// const Categories = (props) => {
//     const categories = Object.keys(props.categories);
    
//     return (
//         <div id="side-menu"> 
//             <div>                        
//                  <h5 className="list-button">All categories</h5>
        
//                     {categories.map((category, index) =>
//                     <Component cat = {category} categories={props.categories[category]} key={index}/>
                       
//                     )} 
//         </div>
//       </div>
//     )


// }



// class Categories extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = { show: false }
//         this.press = this.press.bind(this);
//     }
//     press() {
//         this.setState({show: !this.state.show})
//     }
    
//     render(){
//         const categories = (Object.keys(this.props.categories));
//         const cat = (this.props.categories);
//             return (
//                 <div id="side-menu">
//                     <div>
//                         <h5 className="list-button">All categories</h5>
//                         {   
                            
//                             categories.map((category, index) => 
//                                 //<Component key={index} category={category}  cat={cat} press={this.press} isVisible={this.state.show}/>
//                                 <Component key={index} category={category}  cat={cat} press={this.press} isVisible={this.state.show}/>
//                             )
//                         }
//                     </div>
//                     <div className="side-cream">
//                             <img src={"images/1.jpg"} alt="" />
//                     </div>
//                 </div>
//             )
//     }
   

// }

export default Categories