import { FC } from 'react'
import { weatherIcons } from '../../../utils/weatherIcon/WeatherIcon'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import classes from '../../../styles/main.module.scss'

const CurrentConditions: FC = () => {
    const { weather } = useTypedSelector(state => state.weather)

    let weatherIconIndex = 'default'
    if (weather.currentConditions.icon !== null) {
        weatherIconIndex = weather.currentConditions.icon
    }
    const weatherIcon = weatherIcons[weatherIconIndex]

    return (
        <div className='col p-4 mx-3 border border-dark border-2 rounded'>
            <div className='row justify-content-center align-items-center mb-3'>
                <div className='col-3 p-0 align-self-start mb-3'>
                    <h2 className={`fw-bold mt-5 mb-0 ${classes.current__temp}`}>{weather.currentConditions.temp !== null && Math.round(weather.currentConditions.temp)}°</h2>
                </div>
                {weatherIconIndex !== 'default' &&
                    <div className={`col-7 p-0 align-self-end ${classes.current__icon}`}>
                        <img src={weatherIcon} alt={weatherIconIndex} />
                    </div>
                }
                <div className="col-12 text-center mt-3">
                    <span>Ощущается как {weather.currentConditions.feelslike !== null && Math.round(weather.currentConditions.feelslike)}°</span>
                </div>
            </div>

            <div className='row'>
                <div className='col offset-2'>
                    <span>Температура</span>
                </div>
                <div className='col offset-1'>
                    <h3>{weather.currentConditions.temp !== null && Math.round(weather.currentConditions.temp)}°</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col offset-2'>
                    <span>Влажность</span>
                </div>
                <div className='col offset-1'>
                    <h3>{weather.currentConditions.humidity !== null && Math.round(weather.currentConditions.humidity)} %</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col offset-2'>
                    <span>Ветер</span>
                </div>
                <div className='col offset-1'>
                    <h3>{weather.currentConditions.windspeed !== null && Math.round(weather.currentConditions.windspeed)} м/c</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col offset-2'>
                    <span>Давление</span>
                </div>
                <div className='col offset-1'>
                    <h3>{weather.currentConditions.pressure !== null && Math.round(weather.currentConditions.pressure)} мм.рт.ст.</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col offset-2'>
                    <span>UV-индекс</span>
                </div>
                <div className='col offset-1'>
                    <h3>{weather.currentConditions.uvindex}</h3>
                </div>
            </div>
        </div>
    );
}

export default CurrentConditions;