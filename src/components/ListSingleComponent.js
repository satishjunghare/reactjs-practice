import React, { Component } from 'react'

class ListSingleComponent extends Component {
    constructor(props) {
        super(props)   
    }

    render() {
        const { place } = this.props;

        return (
            <li key={place.id}>
                <a href={place.url} target="_blank">{place.title}</a>
            </li>
        )
    }
}

export default ListSingleComponent