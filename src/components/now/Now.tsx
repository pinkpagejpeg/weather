import { FC, useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { weatherIcons } from '../../utils/weatherIcon/WeatherIcon'

const Now: FC = () => {
    const { weather, error, loading } = useTypedSelector(state => state.weather)
    const { fetchWeather } = useActions()

    let weatherIconIndex = 'default'
    if (weather.currentConditions.icon !== null) {
        weatherIconIndex = weather.currentConditions.icon
    }
    const weatherIcon = weatherIcons[weatherIconIndex]

    let city = ''
    if (weather.resolvedAddress !== null) {
        city = (weather.resolvedAddress).split(',')[0]
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    if (loading) {
        return <h1>Загрузка данных о погоде...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='col-12'>
            <div className='col-12 d-flex justify-content-between align-items-center mb-5'>
                {city !== '' &&
                    <h1 className='m-0'>Погода сейчас в городе {city}</h1>
                }
                <button className='btn btn-dark'>Изменить город</button>
            </div>
            <div className='col-12 d-flex justify-content-between align-items-center'>
                <div className='col-6 d-flex flex-column align-items-center justify-content-center p-4 me-4 border border-dark border-2 rounded'>
                    <div className='col-10 w-100 mb-3 d-flex align-items-end justify-content-center'>
                        <h2 className='col-4 fw-bold display-2 m-0'>{weather.currentConditions.temp}°</h2>
                        {weatherIconIndex !== 'default' &&
                            <img className='col-6 ms-3' src={weatherIcon} alt={weatherIconIndex} />
                        }
                    </div>
                    <span>Ощущается как {weather.currentConditions.feelslike}°</span>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>Температура</span>
                        <h3>{weather.currentConditions.temp}°</h3>
                    </div>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>Влажность</span>
                        <h3>{weather.currentConditions.humidity} %</h3>
                    </div>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>Ветер</span>
                        <h3>{weather.currentConditions.windspeed} м/c</h3>
                    </div>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>Давление</span>
                        <h3>{weather.currentConditions.pressure} мм.рт.ст.</h3>
                    </div>

                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>UV-индекс</span>
                        <h3>{weather.currentConditions.uvindex}</h3>
                    </div>
                </div>
                <div className='col-6 d-flex flex-column align-items-center justify-content-center p-4 ms-4 border border-dark border-2 rounded'>
                    <div className='col-10 w-100 mb-3 d-flex align-items-end justify-content-center'>
                        <h2 className='col-4 fw-bold display-2 m-0'>{weather.currentConditions.temp}°</h2>
                        {weatherIconIndex !== 'default' &&
                            <img className='col-6 ms-3' src={weatherIcon} alt={weatherIconIndex} />
                        }
                    </div>
                    <span>Ощущается как {weather.currentConditions.feelslike}°</span>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>Температура</span>
                        <h3>{weather.currentConditions.temp}°</h3>
                    </div>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>Влажность</span>
                        <h3>{weather.currentConditions.humidity} %</h3>
                    </div>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>Ветер</span>
                        <h3>{weather.currentConditions.windspeed} м/c</h3>
                    </div>
                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>Давление</span>
                        <h3>{weather.currentConditions.pressure} мм.рт.ст.</h3>
                    </div>

                    <div className='col-10 d-flex justify-content-between align-items-center'>
                        <span>UV-индекс</span>
                        <h3>{weather.currentConditions.uvindex}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Now;