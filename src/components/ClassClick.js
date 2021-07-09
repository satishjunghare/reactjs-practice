import React, { Component } from 'react';

class ClassClick extends Component {

    handleClick() {
        console.log("click");
    }

    render() {
        return(
            <div>
                <button onClick={() => this.handleClick()}>Click</button>
            </div>
        )
    }
}

export default ClassClick
