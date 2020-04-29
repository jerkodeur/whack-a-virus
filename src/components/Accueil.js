import React from 'react'
import './Accueil.css'
import {Link} from 'react-router-dom'
import Call from './Call-api'

class Accueil extends React.Component {

    render() {

        const handleChange = (e) => {
            const value = e.target.value
            sessionStorage.setItem('name',value)
        }
    return (
        <div>
            <h1>Welcolme</h1>
            <div className="name"> 
                                
                    <label htmlfor="name">What your name?</label>
                    <input type="text" id="name" name="name" required onChange={handleChange}/>  
                    <Link to="/"><button>Go!</button></Link> 
                    {/* <Call/>                   */}
            </div>
        </div>
        )
    }
}

export default Accueil