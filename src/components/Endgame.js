import React from 'react';
import './Endgame.css';

class Endgame extends React.Component {

    getModalText() {
        if (this.props.verdict === 'win') {
            return 'You save the world !'
        }
        return 'You lose !'
    }
    getModalTextButton() {
        if (this.props.verdict === 'win') {
            return 'Play again...'
        }
        return 'Try again...'
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
            </div>
        )
    }
}


export default Endgame
