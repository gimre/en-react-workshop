
import React from '/lib/react.js'

import Button from '/components/generic/button.js'
import List from '/components/generic/list.js'
import WeatherListItem from '/components/weather-list-item.js'
import WeatherService from '/services/weather.js'

export class LocationWeatherSearch extends React.Component {
    constructor( ) {
        super( )

        this.state = {
            searchText: '',
            suggestions: [ ]
        }

        this.searchButtonClicked = this.searchButtonClicked.bind( this )
        this.searchTextChanged = this.searchTextChanged.bind( this )
    }

    async searchButtonClicked( ) {
        const { searchText } = this.state
        this.setState( { searchText: '' } )

        const suggestions = await WeatherService.getCityWeather( searchText )
        this.setState( { suggestions } )
    }

    searchTextChanged( {
        target: { value }
    } ) {
        this.setState( { searchText: value } )
    }

    render ( ) {
        const { searchText, suggestions } = this.state

        return (
            <div>
                <input
                    onChange={ this.searchTextChanged }
                    type="text"
                    value={ searchText }/>
                <Button
                    action={ this.searchButtonClicked }
                    text="Search"/>
                <List
                    items={ suggestions }
                    renderer={ WeatherListItem }/>
            </div>
        )
    }
}

export default LocationWeatherSearch
