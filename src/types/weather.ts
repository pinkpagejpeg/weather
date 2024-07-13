interface IWeatherCurrentConditions {
    temp: number | null,
    feelslike: number | null,
    humidity: number | null,
    windspeed: number | null,
    pressure: number | null,
    uvindex: number | null,
    icon: string | null
}

interface IWeatherNearest {
    datetime: string | null,
    hours: IWeatherNearestHours[]
}

interface IWeatherNearestHours {
    datetime: string | null,
    temp: number | null,
    feelslike: number | null,
    humidity: number | null,
    windspeed: number | null,
    pressure: number | null,
    uvindex: number | null,
    icon: string | null
}

export interface IWeatherState {
    loading: boolean,
    error: string | null,
    weather: {
        resolvedAddress: string | null,
        currentConditions: IWeatherCurrentConditions,
        days: IWeatherNearest[],
    },
}

export enum WeatherActionTypes {
    FETCH_WEATHER = 'FETCH_WEATHER',
    FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'
}

interface IFetchWeatherAction {
    type: WeatherActionTypes.FETCH_WEATHER
}

interface IFetchWeatherSuccessAction {
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: any
}


interface IFetchWeatherErrorAction {
    type: WeatherActionTypes.FETCH_WEATHER_ERROR,
    payload: string
}

export type WeatherAction = IFetchWeatherAction | IFetchWeatherSuccessAction | IFetchWeatherErrorAction

export interface IWeatherIconProps {
    icon: string | null,
}
