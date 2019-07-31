import React from 'react'

const Component = (props) => {
      
    return ( 
      <div className="category-name1" >
        
        <button className="list-button"  onClick ={()=>props.press(props.cat)} >{props.cat}</button>
        <ul>

          {
            props.extend === props.cat && props.categories.map((listItem, index) => {
              return (<li key={index} className="list-item" >{listItem}</li>);
            }
          )}
        </ul>
      </div>
    )
  }

// class Component extends React.Component{
//     constructor(props){
//       super(props);
//       this.state= {isToggled: null}
//       //this.press = this.press.bind(this);
//     }
  
//     press(categ)  {
        
//         this.setState({isToggled: this.state.isToggled === categ ? null : categ});
//         /* if(this.state.isToggled){
//             console.log(index)
//         } */
//     }
    
//     render() {    
//       return ( 
        
//         <div >
          
//           <button className="list-button"  onClick={() => {this.press(this.props.categories)}} >{this.props.cat}</button>
//           <ul >
  
//             {
//               this.state.isToggled && this.props.categories.map((listItem, index) => {
                
//                 return (<li key={index} className="list-item">{listItem}</li>);
//               }
//             )}
//           </ul>
//         </div>
//       )
//     } 
//   } 


// const Component = ({category, cat, press, isVisible}) =>{
//     console.log(cat)
//     return (
//         <div>
//             <button onClick={press} className="list-button" >{category}</button>
//             {isVisible && <ul>{cat[category].map((entry, i) => <li key={i} className="list-item">{entry}</li>)}</ul>}
//         </div>
//     )
// }
export default Component