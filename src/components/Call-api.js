import React from 'react';
import './Call-api.css';
import axios from 'axios';

class Call extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ""
        }
        console.log('state',this.state.image)
        this.getImage = this.getImage.bind(this)
    }

    getImage() {
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
    
    componentDidMount() {
        this.getImage()
    }
    render() {
        
        console.log(this.state.image)
        return (
            <div className="App">
                <div className="container" >
                    <img src={this.state.image} alt="" />
                </div>
            </div>
        );
    }
}

export default Call;
