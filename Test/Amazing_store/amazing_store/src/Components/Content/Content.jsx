import React from 'react'
import './Content.css'
import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'

class Content extends React.Component{
    render(){
        return(
            <div className="content">
                <div className="left-content">
                    <LeftContent/>
                </div>
                <div className="right-content">
                    <RightContent/>
                </div>
            </div>
        )
    }
}

export default Content;