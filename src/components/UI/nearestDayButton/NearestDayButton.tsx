import { FC } from 'react'
import { IWeatherNearestDayButton } from '../../../types/weather'

const NearestDayButton: FC<IWeatherNearestDayButton> = ({day, date, active, getWeatherInfo}) => {
    return (
        <button className={`w-100 border border-dark border-2 ${active ? 'bg-dark' : 'bg-white'}`} onClick={getWeatherInfo}>
            <p className={`mb-1 mt-2 ${active ? 'text-white' : ''}`}>{date}</p>
            <h2 className={`${active ? 'text-white' : ''}`}>{day}</h2>
        </button>
    );
}

export default NearestDayButton;