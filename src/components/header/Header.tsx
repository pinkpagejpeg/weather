import { FC } from 'react'
import search from 'bootstrap-icons/icons/search.svg'

const Header: FC = () => {
    return (
        <header className='w-100'>
            <ul className='nav w-100 d-flex justify-content-between align-items-center mt-3 mb-3'>
                <li className='nav_link'>Weather</li>
                <li className='nav_link'><button className='btn'><img src={search} alt='Поиск' /></button></li>
            </ul>
        </header>
    );
}

export default Header;