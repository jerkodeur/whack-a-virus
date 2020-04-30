import React from 'react';
import './Endgame.css';
import { Link } from 'react-router-dom'

class Endgame extends React.Component {
    // state = {
    //     text: '',
    //     textButton: '',
    // }

    // defineModal() {
    //     const modal = document.getElementById('modal')
    //     if (this.props.verdict === "gagné") {
    //         modal.style.display = 'flex'
    //         this.win()
    //     } else if (this.props.verdict === "perdu") {
    //         modal.style.display = 'flex'
    //         this.lose()
    //     }
    // }

    // win() {

    //     this.setState({ text: "Yes! Well done, this level is complete !" })
    //     this.setState({ textButton: "Next Level" })
    // }

    // lose() {

    //     this.setState({ text: "Too bad, the epidemic won and everybody died !!" })
    //     this.setState({ textButton: "Try Again" })
    // }


    getModalText() {
        if (this.props.verdict === 'gagné') {
            return 'Vous avez gagné'
        }
        return 'Vous avez perdu'
    }
    getModalTextButton() {
        if (this.props.verdict === 'gagné') {
            return 'Bien joué!'
        }
        return 'Reessaie encore!'
    }


    render() {
        const classNames = ['endGame']

        if (this.props.verdict) {
            classNames.push('show')
        }

        return (
            <div className={classNames.join(' ')} id='modal'>

                <div className="modal">
                    <div className="text">{this.getModalText()}</div>
                    <button className="submit" onClick={this.props.reload}>{this.getModalTextButton()}</button>
                </div>
                {/* <div>{this.defineModal()}</div> */}
            </div>
        )
    }
}


export default Endgame
