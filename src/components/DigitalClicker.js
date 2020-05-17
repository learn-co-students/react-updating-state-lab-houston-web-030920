import React, { Component } from "react";

// Code DigitalClicker Component Here
export default class DigitalClicker extends Component{
    state = {
        timesClicked: 0
    }

    clicked = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render(){
        return(
            <div>
                <button onClick={() => this.clicked()}>{this.state.timesClicked}</button>
            </div>
        )
    }
}