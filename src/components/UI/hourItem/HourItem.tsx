import { FC } from 'react'
import { weatherIcons } from '../../../utils/weatherIcon/WeatherIcon'
import { IWeatherNearestHours } from '../../../types/weather'

const HourItem: FC<IWeatherNearestHours> = ({ datetime, icon, temp, humidity, windspeed, pressure, uvindex }) => {
    return (
        <div className='col-1 d-flex flex-column justify-content-start align-items-center mx-3'>
            <p>{datetime}</p>
            {icon !== null &&
                <img className='col-6 ms-3' src={weatherIcons[icon]} alt={icon} />
            }
            <p>{temp}°</p>
            <p>{humidity} %</p>
            <p>{windspeed} м/с</p>
            <p>{pressure} мм.рт.ст.</p>
            <p>{uvindex}</p>
        </div>
    );
}

export default HourItem;