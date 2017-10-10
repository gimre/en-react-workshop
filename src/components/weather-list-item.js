
import React from '/lib/react.js'

export const WeatherListItem = ( {
    main: {
        temp: tempKelvin
    },
    name,
    weather
} ) => (
    <div>
        <span>{ name } { tempKelvin - 273.15 | 0 }°</span>
        { weather.map( ( info, index ) => (
            <span key={ index }>, { info.description }</span>
        ) ) }
    </div>
)

export default WeatherListItem
