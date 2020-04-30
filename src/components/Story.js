import React from 'react'

import {Link} from 'react-router-dom'

import './Story.css'

class Story extends React.Component {

    render() {
        
    return (
        <div className="dialog-box">
            <h1 className='story-title'>First things first, let’s talk about the situation !</h1>
            <div className="story-container"> 
                                
                    
                    <p>This is the year 2022, and a mortal virus has been active on our<br/> planet for the last 2 years.</p>
                    <p><span id="name">{sessionStorage.getItem('name')}</span><br/>... You’re the last hope of Humanity, and the United Nations missioned you to eradicate this plague which threats the last survivors...</p> 
                    <Link to="/rules"><button>How it works...</button></Link> 
            </div>
        </div>
        )
    }
}

export default Story