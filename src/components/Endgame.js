import React from 'react';
import './Endgame.css';

class Endgame extends React.Component {
    state={
        text:'',
        textButton:'',
        win:true
    }



    win =()=>{
        this.state.win===true
         ? this.setState({text:"Yes! Well done, this level is complete !"})
         : this.setState({text:"Too bad, the epidemic won and everybody died !!"})

    }

    winButton=()=>{
        this.state.win===true
        ? this.setState({textButton:"Next Level"})
        : this.setState({textButton:"Try Again"})
    }

    
    

    render(){
        return(
            <div className="endGame">

                <div className="modal">
        <div className="text">{this.state.text}</div>
                    <button className="submit">Next Level</button>
                </div>



            </div>
        )
    }
}


export default Endgame
