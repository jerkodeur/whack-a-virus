import React from 'react';
import './Endgame.css';

class Endgame extends React.Component {
    state={
        text:'',
        textButton:'',
        win:true
    }



    win(){
       
          this.setState({text:"Yes! Well done, this level is complete !"})
          this.setState({textButton:"Next Level"})
    }

    lose(){
       
          this.setState({text:"Too bad, the epidemic won and everybody died !!"})
          this.setState({textButton:"Try Again"})
    }

    
    

    render(){
        return(
            <div className="endGame">

                <div className="modal">
                    <div className="text">{this.state.text}</div>
                    <button className="submit">{this.state.textButton}</button>
                </div>



            </div>
        )
    }
}


export default Endgame
