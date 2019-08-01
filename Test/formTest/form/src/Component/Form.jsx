import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email:''
        }
    }
    handleChange = (event) =>{
        console.log(event.target.name, event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        //event.target[0].value = ""
        //ANOTHER METHOD
        // console.log(event.target.length)
        // for(var i = 0; i < event.target.length - 1; i++){
        //     event.target[i].value = ""
        //     console.log(event.target[i])
        // }
        this.setState({
            firstName: '',
            lastName: '',
            phone:'',
            email:''
        })
    }
    render(){
        
        return(
            <form onSubmit={this.handleSubmit} style={{display:"flex", flexDirection:'column', width:"25%"}}>
                <label htmlFor="firstName">
                    First Name
                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
                </label>
                
                <label htmlFor="lastName">
                    Last Name
                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
                </label>
                <label htmlFor="phone">
                    Phone
                    <input type="text" value={this.state.phone} name="phone" onChange={this.handleChange} />
                </label>
                <label htmlFor="email">
                    Email
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                </label>
                
                <input type="submit" value="Submit" />
                
            </form>
        )
    }
}


export default Form