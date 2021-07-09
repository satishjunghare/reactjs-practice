import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    changeCount() {
        /*this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Counter changed");
        })*/

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                Count : { this.state.count }
                <button onClick={() => this.changeCount()}>Increase</button>
            </div>
        )
    }
}

export default Counter
