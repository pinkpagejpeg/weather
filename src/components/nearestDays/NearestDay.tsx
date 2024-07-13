import { FC, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getCurrentDate, getTomorrowDate, getAfterTomorrowDate } from '../../utils/getDate/getDate'
import HourItem from '../UI/hourItem/HourItem'

const NearestDay: FC = () => {
    const { weather } = useTypedSelector(state => state.weather)
    const [selectedDay, setSelectedDay] = useState(getCurrentDate())

    let city = ''
    if (weather.resolvedAddress !== null) {
        city = (weather.resolvedAddress).split(',')[0]
    }

    return (
        <div className='col-12 mb-5'>
            <div className='col-12 d-flex justify-content-between align-items-center mb-5'>
                {city !== '' &&
                    <h1 className='m-0'>Погода сегодня в городе {city}</h1>
                }
            </div>
            <nav>
                <ul className='nav col-12 d-flex justify-content-between align-items-center mt-3 mb-4'>
                    <li><button onClick={() => setSelectedDay(getCurrentDate())}>Сегодня</button></li>
                    <li><button onClick={() => setSelectedDay(getTomorrowDate())}>Завтра</button></li>
                    <li><button onClick={() => setSelectedDay(getAfterTomorrowDate())}>Послезавтра</button></li>
                </ul>
            </nav>
            <div className='col-12 d-flex align-items-center justify-content-center p-4 border border-dark border-2 rounded'>
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