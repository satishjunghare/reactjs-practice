import React, { Component } from 'react'
import ListSingleComponent from './ListSingleComponent'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            places: [
                {
                    "id": 1,
                    "title": "Miscellaneous pencil drawing of trees.",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00045000.html"
                },
                {
                    "id": 2,
                    "title": "Miscellaneous pencil drawing.",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00045v00.html"
                },
                {
                    "id": 3,
                    "title": "Miscellaneous pencil drawings, mainly studies of trees. 43",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00043000.html"
                },
                {
                    "id": 4,
                    "title": "Miscellaneous pencil drawings, mainly studies of trees. 44",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00044000.html"
                },
                {
                    "id": 5,
                    "title": "Miscellaneous pencil drawings, mainly studies of trees. 44v",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00044v00.html"
                },
                {
                    "id": 6,
                    "title": "Miscellaneous pencil drawings, mainly studies of trees. 46",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00046000.html"
                }
            ]
        }
    }

    sortPlaces() {
        this.setState({
            places: [
                {
                    "id": 1,
                    "title": "Miscellaneous pencil drawing.",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00045v00.html"
                },
                {
                    "id": 2,
                    "title": "Miscellaneous pencil drawing of trees.",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00045000.html"
                },
                {
                    "id": 3,
                    "title": "Miscellaneous pencil drawings, mainly studies of trees. 43",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00043000.html"
                },
                {
                    "id": 4,
                    "title": "Miscellaneous pencil drawings, mainly studies of trees. 44v",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00044v00.html"
                },
                {
                    "id": 5,
                    "title": "Miscellaneous pencil drawings, mainly studies of trees. 44",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00044000.html"
                },
                {
                    "id": 6,
                    "title": "Miscellaneous pencil drawings, mainly studies of trees. 46",
                    "url": "http://www.bl.uk/onlinegallery/onlineex/apac/other/019wdz000004163u00046000.html"
                }
            ]
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.sortPlaces()}>Sort</button>
                <ul>
                    {
                        this.state.places.map((place, index) => (
                            <ListSingleComponent key={place.id} place={place} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ListComponent