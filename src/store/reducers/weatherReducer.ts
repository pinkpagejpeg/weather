import { IWeatherState, WeatherAction, WeatherActionTypes } from '../../types/weather'

const initialState: IWeatherState = {
    loading: false,
    error: null,
    weather: {
        currentConditions: {
            temp: null,
            feelslike: null,
            humidity: null,
            windspeed: null,
            pressure: null,
            uvindex: null
        },
        resolvedAddress: null
    },
}

export const weatherReducer = (state = initialState, action: WeatherAction): IWeatherState => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER:
            return {
                loading: true,
                error: null,
                weather: {
                    currentConditions: {
                        temp: null,
                        feelslike: null,
                        humidity: null,
                        windspeed: null,
                        pressure: null,
                        uvindex: null
                    },
                    resolvedAddress: null
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
                    currentConditions: {
                        temp: null,
                        feelslike: null,
                        humidity: null,
                        windspeed: null,
                        pressure: null,
                        uvindex: null
                    },
                    resolvedAddress: null
                },
            }
        default:
            return state
    }
}