import React from 'react'
import LifeBar from './LifeBar'

import './Game.css'

class Game extends React.Component {
    render() {
        return (
            <div className="containerGame">
                <div className="empty"></div>
                <div className="areaGame">
                    <div className="rectangle" id="rectangle">
                        <div className="circle" id="circle"></div>
                        <div className="circle2" id="circle2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game