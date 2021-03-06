import React from 'react'
import axios from 'axios'
import LifeBar from './LifeBar'
import corona from './images/coronavirus.png'
import anticorps from './images/anticorps.png'
import Endgame from './Endgame'

import './Game.css'

class Game extends React.Component {

    state = {
        circle: '',
        circle2: '',
        rectangle: '',
        rectWidth: 0,
        rectHeight: 0,
        circleWidth: 0,
        circleHeight: 0,
        health: 37,
        gameOver: '',
        lifeBarColor: "",
    }

    constructor(props) {
        super(props)

        this.timer1 = null
        this.timer2 = null
    }

    //  change lifeBarColor
    changeColor = () => {
        this.state.health > 75
            ? this.setState({ lifeBarColor: "red" })
            : this.state.health <= 75 && this.state.health > 50
                ? this.setState({ lifeBarColor: "orange" })
                : this.state.health <= 50 && this.state.health > 25
                    ? this.setState({ lifeBarColor: "yellow" })
                    : this.setState({ lifeBarColor: "green" });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.health !== prevState.health) {
            this.changeColor();

            if (this.state.health === 100) {
                this.setState({ gameOver: 'lost' });

                clearInterval(this.timer1);
                clearInterval(this.timer2);
            }

            if (this.state.health === 7) {
                this.setState({ gameOver: 'win' });

                clearInterval(this.timer1);
                clearInterval(this.timer2);
            }
        }
    }

    reload = () => {
        this.setState({ health: 37, gameOver: '', lifeBarColor: "" })
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
        if (circle1) { circle1.style.left = `${posX}px` }
        if (circle1) { circle1.style.top = `${posY}px` }
        if (circle2) { circle2.style.left = `${posX2}px` }
        if (circle2) { circle2.style.top = `${posY2}px` }
    }

    componentDidMount() {
        const random = Math.floor(Math.random() * 10)
        console.log(random)
        const url = "https://pixabay.com/api/?key=16287940-74526e304b3319cdff6dba577&q=city-war&image_type=photo"
        axios.get(url)
            .then(res => {
                console.log(res.data.hits)
                this.setState({
                    image: res.data.hits[random].largeImageURL
                })
            })
    }


    Start() {
        const rectangle = document.getElementById("rectangle")
        const circle = document.getElementById("circle")
        const circle2 = document.getElementById("circle2")
        const rectWidth = parseFloat(getComputedStyle(rectangle).width)
        const rectHeight = parseFloat(getComputedStyle(rectangle).height)
        const circleWidth = parseFloat(getComputedStyle(circle).width)
        const circleHeight = parseFloat(getComputedStyle(circle).height)
        this.setState({ circle: circle, circle2: circle2, rectangle: rectangle, rectWidth: rectWidth, rectHeight: rectHeight, circleWidth: circleWidth, circleHeight: circleHeight })

        this.timer1 = setInterval(this.definePosition, 1000)
        this.timer2 = setInterval(this.permanentDecrease, 250)
    }

    handle = () => {
        this.Start()
    }

    handleClick = (e) => {
        const id = e.target.id;
        id === "circle"
            ? this.increaseHealth()
            : this.decreaseHealth();
    };
    permanentDecrease = () => {
        this.state.health < 100 && this.setState({ health: this.state.health + 1 })
        this.state.health === 100 && this.setState({ gameOver: 'lost' })

    }
    // Increase the health permanently until 100
    increaseHealth = () => {
        this.state.health <= 90 ? this.setState({ health: this.state.health + 10 }) : this.setState({ health: 100 })
    };
    // Decrease the health if click on the monster
    decreaseHealth = () => {
        this.state.health >= 22
            ? this.setState({ health: this.state.health - 15 })
            : this.setState({ health: 7 });
        console.log(this.state.health)
    };

    render() {

        return (
            <div className="containerGame">
                <div className="flex">
                    <div className="areaGame">
                        <div className="rectangle" id="rectangle" style={{ backgroundImage: `url(${this.state.image})` }}>
                            <img className="circle" id="circle" src={anticorps} onClick={this.handleClick} alt="" />
                            <img className="circle2" id="circle2" src={corona} onClick={this.handleClick} alt="" />
                            <Endgame verdict={this.state.gameOver} reload={this.reload} />
                        </div>
                    </div>
                    <LifeBar health={this.state.health} lifeBarColor={this.state.lifeBarColor} />
                </div>
                <button id="start" onClick={this.handle} >Start</button>
            </div>
        )
    }
}

export default Game