import { FC } from 'react'
import search from 'bootstrap-icons/icons/search.svg'
import logo from '../../assets/images/weather-logo.svg'
import classes from '../../styles/main.module.scss'

const Header: FC = () => {
    return (
        <header>
            <ul className='nav row d-flex justify-content-between align-items-center mt-3 mb-4'>
                <li className='nav_link col-11 d-flex align-items-center'>
                    <img className={classes.header__logo} src={logo} alt='Логотип'/>
                    <span className='fs-4 fw-bold text-dark'>Weather</span>
                </li>
                <li className='nav_link col-1 d-flex justify-content-end'>
                    <button className='btn p-1'>
                        <img src={search} alt='Поиск' /> 
                    </button>
                </li>
            </ul>
        </header>
    );
}

export default Header;