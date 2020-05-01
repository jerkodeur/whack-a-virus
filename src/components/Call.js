import React from "react";
import "./Call.css";
import axios from "axios";

class Call extends React.Component {
  state = {
    image: "",
  };

  getImage() {
    const url =
      "https://pixabay.com/api/?key=16287940-74526e304b3319cdff6dba577&q=city-war&image_type=photo";
    axios.get(url).then((res) => {
      this.setState({
        image: res.data.hits[2].pageURL,
      });
    });
  }

  componentDidMount() {
    this.getImage();
  }

  render() {
    console.log(this.state.image);
    return (
      <div className="App">
        <div className="container">
          <img src={this.state.image} alt="" />
        </div>
      </div>
    );
  }
}

export default Call;
