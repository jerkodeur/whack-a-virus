import React from 'react'

class Game extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="rectangle" id="rectangle">
                    <div class="circle" id="circle"></div>
                    <div class="circle2" id="circle2"></div>
                </div>
            </div>
            <div class="container2">
                <div class="life">
                    <div class="realLife"></div>
                    <div class="bullet"></div>
                </div>
            </div>
        )
    }
}