import React from 'react'
import LifeBar from './LifeBar'
import Call from './Call'


// const maxX = rectWidth - (circleWidth)
// const maxY = rectHeight - (circleHeight)

// const definePosition = () => {

// }

// setInterval(definePosition, 750)

import './Game.css'

class Game extends React.Component {

    state = {
        circle: '',
        circle2: '',
        rectangle:'',
        rectWidth: 0,
        rectHeight: 0,
        circleWidth: 0,
        circleHeight: 0
    }

    definePosition = () => {
        const maxX = this.state.rectWidth - this.state.circleWidth
        const maxY = this.state.rectHeight - this.state.circleHeight
        const posX = Math.random() * maxX
        const posY = Math.random() * maxY
        const posX2 = Math.random() * maxX
        const posY2 = Math.random() * maxY
        const circle1 = this.state.circle
        const circle2 = this.state.circle2
        if (circle1) { circle1.style.left = `${posX}px`  }
        if (circle1) { circle1.style.top = `${posY}px` }
        if (circle2) { circle2.style.left = `${posX2}px` }
        if (circle2) { circle2.style.top = `${posY2}px` }
    }



    componentDidMount() {
        const rectangle = document.getElementById("rectangle")
        const circle = document.getElementById("circle")
        const circle2 = document.getElementById("circle2")
        const rectWidth = parseFloat(getComputedStyle(rectangle).width)
        const rectHeight = parseFloat(getComputedStyle(rectangle).height)
        const circleWidth = parseFloat(getComputedStyle(circle).width)
        const circleHeight = parseFloat(getComputedStyle(circle).height)
        this.setState({ circle: circle, circle2: circle2, rectangle: rectangle, rectWidth: rectWidth, rectHeight: rectHeight, circleWidth: circleWidth, circleHeight: circleHeight })
        setInterval(this.definePosition, 1000)
    }

    render() {

        //const circleWidth = parseFloat(getComputedStyle(circle).width)

        const image = 'https://cdn.pixabay.com/photo/2018/02/12/10/10/figure-3147899_960_720.jpg'
        return (
            <div className="containerGame">
                <div className="empty"></div>
                <div className="flex">
                    <div className="areaGame">
                        <div className="rectangle" id="rectangle" style={{backgroundImage:`url(${image})`}}>
                            <div className="circle" id="circle"></div>
                            <div className="circle2" id="circle2"></div>
                        </div>
                    </div>
                    <LifeBar />
                </div>
                <div>{this.definePosition()}</div>
            </div>
        )
    }

}

export default Game