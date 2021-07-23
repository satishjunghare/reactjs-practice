import React, { Component } from 'react'

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.greetHandler('child')}>Child Component Button</button>
            </div>
        )
    }
}

export default ChildComponent