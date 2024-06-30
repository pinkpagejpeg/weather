import { FC, useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

const Now: FC = () => {
    const {weather, error, loading} = useTypedSelector(state => state.weather)
    const {fetchWeather} = useActions()

    useEffect( () => {
        fetchWeather()
    }, [])

    if(loading) {
        return <h1>Загрузка данных о погоде...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div>
                <h1>Погода сейчас в {weather.resolvedAddress}</h1>
                <button>Изменить город</button>
            </div>
            <div>
                <div>
                    <img></img>
                    <h2>{weather.currentConditions.temp}</h2>
                </div>
                <span>Ощущается как {weather.currentConditions.feelslike}</span>
                <div>
                    <span>Температура</span>
                    <h3>{weather.currentConditions.temp} </h3>
                </div>
                <div>
                    <span>Влажность</span>
                    <h3>{weather.currentConditions.humidity} %</h3>
                </div>
                <div>
                    <span>Ветер</span>
                    <h3>{weather.currentConditions.windspeed} м/c</h3>
                </div>
                <div>
                    <span>Давление</span>
                    <h3>{weather.currentConditions.pressure} мм.рт.ст.</h3>
                </div>

                <div>
                    <span>UV-индекс</span>
                    <h3>{weather.currentConditions.uvindex}</h3>
                </div>
            </div>
        </div>
    );
}

export default Now;