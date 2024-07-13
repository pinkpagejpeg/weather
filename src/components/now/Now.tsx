import { FC, useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import CurrentConditions from './components/CurrentConditions'

const Now: FC = () => {
    const { weather, error, loading } = useTypedSelector(state => state.weather)
    const { fetchWeather } = useActions()

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
        <div className='col-12 mb-5'>
            <div className='col-12 d-flex justify-content-between align-items-center mb-5'>
                {city !== '' &&
                    <h1 className='m-0'>Погода сейчас в городе {city}</h1>
                }
                <button className='btn btn-dark'>Изменить город</button>
            </div>
            <div className='col-12 d-flex justify-content-between align-items-center'>
                <CurrentConditions />
            </div>
        </div>
    );
}

export default Now;