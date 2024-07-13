import { IWeatherState, WeatherAction, WeatherActionTypes } from '../../types/weather'

const initialState: IWeatherState = {
    loading: false,
    error: null,
    weather: {
        resolvedAddress: null,
        currentConditions: {
            temp: null,
            feelslike: null,
            humidity: null,
            windspeed: null,
            pressure: null,
            uvindex: null,
            icon: null
        },
        days: []
    },
}

export const weatherReducer = (state = initialState, action: WeatherAction): IWeatherState => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER:
            return {
                loading: true,
                error: null,
                weather: {
                    resolvedAddress: null,
                    currentConditions: {
                        temp: null,
                        feelslike: null,
                        humidity: null,
                        windspeed: null,
                        pressure: null,
                        uvindex: null,
                        icon: null
                    },
                    days: []
                }
            }
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                loading: false,
                error: null,
                weather: action.payload,
            }
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return {
                loading: false,
                error: action.payload,
                weather: {
                    resolvedAddress: null,
                    currentConditions: {
                        temp: null,
                        feelslike: null,
                        humidity: null,
                        windspeed: null,
                        pressure: null,
                        uvindex: null,
                        icon: null
                    },
                    days: []
                },
            }
        default:
            return state
    }
}