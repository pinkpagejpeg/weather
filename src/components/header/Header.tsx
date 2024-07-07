import { FC } from 'react'
import search from 'bootstrap-icons/icons/search.svg'
import logo from '../../assets/images/weather-logo.svg'

const Header: FC = () => {
    return (
        <header className='col-12'>
            <ul className='nav col-12 d-flex justify-content-between align-items-center mt-3 mb-4'>
                <li className='nav_link col-3 d-flex align-items-center'>
                    <img className='col-3 me-3' src={logo} alt='Логотип'/>
                    <span className='fs-4 fw-bold text-dark'>Weather</span>
                </li>
                <li className='nav_link'>
                    <button className='btn p-1'>
                        <img src={search} alt='Поиск' /> 
                    </button>
                </li>
            </ul>
        </header>
    );
}

export default Header;