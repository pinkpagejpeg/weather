import { Dispatch } from 'redux'
import { WeatherAction, WeatherActionTypes } from '../../types/weather'
import axios from 'axios'

export const fetchWeather = (): any => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const response = await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/moscow?unitGroup=metric&key=8RMVQTKXAGNVKG9W65GQBEVVQ&contentType=json')
            // 8RMVQTKXAGNVKG9W65GQBEVVQ
            // HU7YCVGGE6ACVLZBC3LVVPJSE
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_ERROR, 
                payload: 'Произошла ошибка, попробуйте еще раз'
            })
        }
    }
}