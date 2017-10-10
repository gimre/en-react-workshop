
import React from '/lib/react.js'

export const ForecastListItem = ( {
    main: {
        temp: tempKelvin
    },
    name
} ) => (
    <div>${ name } ${ tempKelvin - 275.15 }</div>
)

export default ForecastListItem
