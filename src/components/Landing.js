import React from 'react'
import './Landing.css'
import {Link} from 'react-router-dom'

class Landing extends React.Component {

    render() {
        const handleChange = (e) => {
            const value = e.target.value
            sessionStorage.setItem('name',value)
        }
    return (
        <div className="accueil">
            <h1>Welcome to Whack-A-Virus</h1>
            <div className="name"> 
                                
                    <label htmlFor="name">What is your name?</label>
                    <input type="text" id="name" name="name" required onChange={handleChange}/>  
                    <Link to="/story"><button>Go!</button></Link> 
            </div>
        </div>
        )
    }
}

export default Landing