import React, { Component } from 'react'

export default class Welcome extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome here"
        }

        // console.log();
    }

    changeMessage() {
        console.log(this.props);

        this.setState({
            message: "Thankyou"
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.message } {this.props.fname}</h1>
                <button onClick={() => this.changeMessage()}>Change</button>
            </div>
        )
    }
}
