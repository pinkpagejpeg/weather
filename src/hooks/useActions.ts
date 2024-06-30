import { bindActionCreators } from 'redux'
import * as WeatherActionCreators from '../store/action-creators/weather'
import { useAppDispatch } from './useAppDispatch'

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(WeatherActionCreators, dispatch)
}