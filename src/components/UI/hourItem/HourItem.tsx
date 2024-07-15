import { FC } from 'react'
import { weatherIcons } from '../../../utils/weatherIcon/WeatherIcon'
import { IWeatherNearestHours } from '../../../types/weather'
import classes from '../../../styles/main.module.scss'

const HourItem: FC<IWeatherNearestHours> = ({ datetime, icon, temp, humidity, windspeed, pressure, uvindex }) => {
    return (
        <div className='col-1 mx-3'>
            <div className="row text-center">
                <div className="col-12 p-0">
                    <p>{datetime !== null && datetime.split(':').slice(0, 2).join(':')}</p>
                </div>
                {icon !== null &&
                    <div className={`my-3 col-12 p-0 ${classes.nearest__icon}`}>
                        <img src={weatherIcons[icon]} alt={icon} />
                    </div>
                }
                <div className="col-12 p-0">
                    <p>{temp !== null && Math.round(temp)}°</p>
                </div>
                <div className="col-12 p-0">
                    <p>{humidity !== null && Math.round(humidity)} %</p>
                </div>
                <div className="col-12 p-0">
                    <p>{windspeed !== null && Math.round(windspeed)} м/с</p>
                </div>
                <div className="col-12 p-0">
                    <p>{pressure !== null && Math.round(pressure)} мм.рт.ст.</p>
                </div>
                <div className="col-12 p-0">
                    <p>{uvindex}</p>
                </div>
            </div>
        </div>
    );
}

export default HourItem;