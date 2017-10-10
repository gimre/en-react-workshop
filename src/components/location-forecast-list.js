
import React from '/lib/react.js'

import List from '/components/generic/list.js'

export class LocationForecastList extends React.Component {
    constructor( ) {
        super( )

        this.state = {
            locationForecasts: [ ]
        }
    }

    render( ) {
        const { locationForecasts } = this.state

        return  (
            <List items={ locationForecasts } />
        )
    }
}

export default LocationForecastList
