import { FC, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getCurrentDate, getTomorrowDate, getAfterTomorrowDate } from '../../utils/getDate/getDate'
import HourItem from '../UI/hourItem/HourItem'
import NearestDayButton from '../UI/nearestDayButton/NearestDayButton'
import classes from '../../styles/main.module.scss'

const NearestDay: FC = () => {
    const { weather } = useTypedSelector(state => state.weather)
    const [selectedDay, setSelectedDay] = useState(getCurrentDate())

    let city = ''
    if (weather.resolvedAddress !== null) {
        city = (weather.resolvedAddress).split(',')[0]
    }

    return (
        <div className='mb-5'>
            {city !== '' &&
                <h1 className='mb-5'>Погода сегодня в городе {city}</h1>
            }
            <nav>
                <ul className={`nav row d-flex justify-content-between align-items-center mt-3 ${classes.nearest__custom_buttons}`}>
                    <li className='col p-0'>
                        <NearestDayButton
                            date='14 июля, пт'
                            day='Сегодня'
                            active={selectedDay === getCurrentDate()}
                            getWeatherInfo={() => {
                                setSelectedDay(getCurrentDate())
                            }} />
                    </li>
                    <li className='col p-0'>
                        <NearestDayButton
                            date='15 июля, сб'
                            day='Завтра'
                            active={selectedDay === getTomorrowDate()}
                            getWeatherInfo={() => {
                                setSelectedDay(getTomorrowDate())
                            }} />
                    </li>
                    <li className='col p-0'>
                        <NearestDayButton
                            date='16 июля, вс'
                            day='Послезавтра'
                            active={selectedDay === getAfterTomorrowDate()}
                            getWeatherInfo={() => {
                                setSelectedDay(getAfterTomorrowDate())
                            }} />
                    </li>
                </ul>
            </nav>

            <div className='row align-items-center justify-content-center p-4 border border-dark border-2 rounded-bottom'>
                {weather.days && weather.days.length > 0 && weather.days.map(day => {
                    if (day.datetime === selectedDay) {
                        return day.hours.map((hour, index) => {
                            if (hour.datetime !== null && index % 3 === 0) {
                                return (
                                    <HourItem key={`${day.datetime}-${hour.datetime}`}
                                        datetime={hour.datetime}
                                        icon={hour.icon}
                                        temp={hour.temp}
                                        humidity={hour.humidity}
                                        windspeed={hour.windspeed}
                                        pressure={hour.pressure}
                                        uvindex={hour.uvindex} />
                                );
                            } else {
                                return null;
                            }
                        });
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default NearestDay;