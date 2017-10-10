
const getApiUrl = ( version, path, params ) =>
    `http://api.openweathermap.org/data/${ version }/${ path }?${ params }&appid=75131f359572dd88fe193f25c136d59a`

export const WeatherService = {
    async getCityWeather( partialCityName ) {
        return fetch( getApiUrl( '2.5', 'weather', `q=${ partialCityName }` ) )
            .then( res => res.json( ) )
            .then( data => [ ].concat( data ) )
    },
    async getCityForecast( cityId ) {
        return fetch( getApiUrl( '2.5', 'forecast', `id=${ cityId }` ) )
    }
}

export default WeatherService
