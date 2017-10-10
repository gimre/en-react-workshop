
import React from '/lib/react.js'

import LocationForecastList from '/components/location-forecast-list.js'
import LocationWeatherSearch from '/components/location-weather-search.js'

export const WeatherSearch = (

) => (
    <div>
        <h1>Weather search</h1>
        <LocationWeatherSearch />
        <LocationForecastList />
    </div>
)

export default WeatherSearch
