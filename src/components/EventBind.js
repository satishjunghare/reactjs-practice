import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello there!'
        }

        // Third bind approach
        // this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Clicked'
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.message }</h1>
                {/* First approach */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Second approach */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* Third approach */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
